package com.camp.campon.security.jwt.filter;
//첫번째 필터

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.camp.campon.security.jwt.constants.JwtConstants;
import com.camp.campon.security.jwt.provider.JwtTokenProvider;

import lombok.extern.slf4j.Slf4j;

// OncePerRequestFilter : 스프링프레임워크의 필터. 매 요청마다 필터가 걸립니다. 
@Slf4j
public class JwtRequestFilter extends OncePerRequestFilter{
    private final JwtTokenProvider jwtTokenProvider;

    //생성자
    public JwtRequestFilter ( JwtTokenProvider jwtTokenProvider){
        this.jwtTokenProvider = jwtTokenProvider;
    }
    //jwt 요청 필터 : 클라이언트가 요청을 보내면, 요청헤더에 Authorization : {jwt} 가 들어있는데 그 토큰에 대한 유효성검사를 해줄 겁니다. 
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String header = request.getHeader(JwtConstants.TOKEN_HEADER);
        log.info("헤더에 있는 authorization 정보 : " + header);
        //jwt 토큰이 없으면 다음 필터로 이동시킵니다. 
        if (header == null || header.length() == 0 || !header.startsWith(JwtConstants.TOKEN_PREFIX)){
            filterChain.doFilter(request, response); //아무 필터도 거치지 않거나, JwtAuthenticationFilter로 넘겨집니다. 
            return;
        }
        //prefix 제거
        String jwt = header.replace(JwtConstants.TOKEN_PREFIX, "");
        //토큰 해석
        Authentication authentication = jwtTokenProvider.getAuthentication(header);
        
        //토큰 유효성 검사
        if (jwtTokenProvider.validateToken(jwt)){
            log.info("유효한 jwt 토큰입니다. ");
            //로그인
            SecurityContextHolder.getContext().setAuthentication(authentication); //📌이게 인증인 것이야!!!!!!!!
            log.info("isAuthenticated : " + authentication.isAuthenticated());
        }
        filterChain.doFilter(request, response);
    }
}
