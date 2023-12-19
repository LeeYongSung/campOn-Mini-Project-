package com.camp.campon.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.camp.campon.security.custom.CustomUserDetailService;
import com.camp.campon.security.jwt.filter.JwtAuthenticationFilter;
import com.camp.campon.security.jwt.filter.JwtRequestFilter;
import com.camp.campon.security.jwt.provider.JwtTokenProvider;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration //컴포넌트가 아닌 메소드 방식으로 스프링 빈을 등록해줄 수 있습니다. 
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true, securedEnabled = true) //첫번째 true : prePostEnabled 를 컨트롤러에서 쓸수있습니다. (권한에 대해 디테일하게 설정)
//두번째 true : @Secured를 쓸 수 있습니다. (권한에 대해 간단하게 설정)
//필터 설정, 인가 설정 등등을 합니다. 
public class SecurityConfig {

    @Autowired //인증방식 설정할 때 필요합니다. 
    private CustomUserDetailService custonUserDetailService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    //시큐리티 설정
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        log.info("시큐리티 설정...");

        //일단 비활성화 해주는 것들 입니다. 
        // // 폼 기반 로그인 비활성화
        http.formLogin( login -> login.disable() );
        // // HTTP 기본 인증 비활성화
        http.httpBasic( basic -> basic.disable() );
        // CSRF(Cross-Site Request Forgery) 공격 방어 기능 비활성화
        http.csrf( csrf -> csrf.disable() );

        //필터 설정
        //서버로 넘어오기 전에 앞에서 필터 두개를 걸어줄 거에요. 
        // 1. jwt를 체크하는 필터 (1)Jwt Request Filter 
        //jwt 토큰을 해석하는 작업
        //2. 로그인 처리하는 필터 (2)Jwt Filter : username, password를 가져와서 인증성공하면 JWT토큰을 생성해줌.
        //첫번째 인자: 필터, 두번째 인자: 어떤 상황에서 필터를 적용해야 하는지
        http.addFilterAt(new JwtAuthenticationFilter(authenticationManager, jwtTokenProvider), UsernamePasswordAuthenticationFilter.class)
            .addFilterBefore(new JwtRequestFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
            ;
        //인가 설정
        // 정적자원, /, /login : all
        // /user/** :  user, admin
        // /admin/** : admin
        //이제는 람다식으로 쓰는게 바람직합니다. 
        http.authorizeHttpRequests(authorizeRequests -> authorizeRequests
        // .requestMatchers("/").permitAll()
        // .requestMatchers("/login").permitAll()
        // // .requestMatchers("/users/**").hasAnyRole("USER", "ADMIN")
        // .requestMatchers("/users").permitAll()
        // .requestMatchers("/admin/**").hasRole("ADMIN")
        .requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll() //사실 이미 프론트엔드에서 정적자원을 가지고 있기에 굳이..? 라는 생각이 듭니다. 
        .anyRequest().permitAll()
        );

        //인증 방식 ( 메모리 방식, JDBC 방식, 커스텀 방식 )
        //커스텀 방식은 userDetailService 인터페이스에서 해줍니다. 
        //위 인터페이스를 구현한 클래스가 있어야 합니다. //security 폴더를 만들어서 거기서 관리를 해주겠습니다. 
        http.userDetailsService(custonUserDetailService);

        return http.build();
    }

    //passwordEncoder의 암호화방식을 설정합니다. 
    @Bean
    public PasswordEncoder passwordEncoder () {
        return new BCryptPasswordEncoder(); //암호화 알고리즘 방식 : Bcrypt
    }

    //JwtAuthenticationFilter.java 에서 사용하기 위함입니다. 
    //AuthenticationManager 빈 등록
    private AuthenticationManager authenticationManager;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        this.authenticationManager = authenticationConfiguration.getAuthenticationManager();
        return authenticationManager;
    }
}
