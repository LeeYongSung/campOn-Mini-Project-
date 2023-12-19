package com.camp.campon.security.jwt.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.camp.campon.dto.CustomUser;
import com.camp.campon.security.jwt.constants.JwtConstants;
import com.camp.campon.security.jwt.provider.JwtTokenProvider;

import lombok.extern.slf4j.Slf4j;

/*
 * 🎊요약
 * 클라이언트 ->로그인 경로 : filter -> server
 * ✨username, password 인증 시도 : attemptAuthentication 메소드
 * ✨인증 성공하면 : successfulAuthentication 메소드. ]
 * ===> 이 안에서 🧨JWT 생성, 🧨response>header>authorization 안에 jwt 담는 작업
 * ✨인증 실패 시 : attemptAuthentication 메소드
 * ===> 이 안에서 🧨response>status>401 담아주기
 */
//로그인(두번째 필터)
//스프링시큐리티와의 연결을 위해 상속을 받습니다. 
//그 중 2개의 메소드를 오버라이딩 해줍니다. 
@Slf4j
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    // @Autowired
    // private AuthenticationManager authenticationManager; //이렇게 할수있다고 생각하지만
    // 불가능합니다... 왜?? 필터는 안됩니다.
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    // 생성자에다가 AuthenticationManager 를 넣어서 생성해줄 겁니다.

    // 생성자 (추가로 토큰을 생성하는 것도 매개변수에 넣어줄 예정입니다. )
    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        // 필터 url 경로 설정 : /login
        setFilterProcessesUrl(JwtConstants.AUTH_LOGIN_URL);
        log.info("여기 들어오니?");
    }

    // 인증 시도 메소드
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        // request에서 파라미터를 꺼냅니다.
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        log.info("username : " + username);
        log.info("password : " + password);
        // 사용자 인증정보 객체 생성
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, password);
        // 사용자 인증 (로그인)
        // authenticationManager을 빈으로 등록해주는 작업은 SecurityConfig.java에서 해줄거에요.
        authentication = authenticationManager.authenticate(authentication); // UserDeatilsService 와 PasswordEncoder 두
                                                                             // 설정이 이 메소드가 호출되었을 때 타게 됩니다.
        log.info("인증 여부 : " + authentication.isAuthenticated());
        // 인증 실패 로직 (usernme, password 불일치)
        if (!authentication.isAuthenticated()) {
            log.info("인증 실패 : 아이디 또는 비밀번호가 일치하지 않습니다. ");
            response.setStatus(401); // UNAUTHORIZED (인증 실패)
        }
        return authentication;// 궁금증 : 만약 인증되지 않은 객체면 어떻게 반환이 될까?
    }
    // Authentication을 반환하는 메소드이고, 이걸 반환해주면 자동으로 시큐리티가 securityContextHolder에 넣어주게
    // 됩니다.

    // 인증 성공 시 실행될 메소드
    // authentication.isAuthenticated() 가 true면 이 메소드가 실행되는 겁니다.
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
            Authentication authentication) throws IOException, ServletException {
        // 여기서 jwt 토큰을 생성해주고, jwt를 응답헤더에 설정해줄 겁니다.
        // authentication는 attemptAuthentication 메소드의 반환값인 authentication 객체가 넘어온거에요.
        log.info("인증 성공..");
        CustomUser user = (CustomUser) authentication.getPrincipal();
        log.info("로그인필터에서의 유저 정보 : " + user);
        // 로그인필터에서의 유저 정보 : CustomUser(user=Users(userNo=2, userId=user,
        // userPw=$2a$12$159xFwNqq8SflOLm0o.JB.2lOS.ejEf6OrcV5Eou7mkXGbxYqxt8.,
        // userPwCheck=null, userName=길동이, userTel=01034716517, userEmail=user@user.com,
        // userAddress=유저시 유저동 유저아파
        // 트 유저호, companyName=null, companyNumber=null, regDate=Wed Nov 01 14:47:44 KST
        // 2023, updDate=Mon Nov 13 12:53:16 KST 2023, auth=ROLE_USER, authList=null))
        int userNo = user.getUser().getUserNo();
        String userId = user.getUser().getUserId();
        // List<String> roles = user.getUser().getAuthList(); // List<UserAuth>

        //
        // List<String> roles = user.getUser().getAuthList().stream()
        // .map((auth)->auth.getAuth()).collect(Collectors.toList());
        List<String> roles = new ArrayList<String>();
        roles.add(user.getUser().getAuth());
        // jwt Provider에 넘겨줄겁니다.
        String jwt = jwtTokenProvider.createToken(userNo, userId, roles);
        response.addHeader(JwtConstants.TOKEN_HEADER, JwtConstants.TOKEN_PREFIX + jwt);
        response.setStatus(200);

    }

}
