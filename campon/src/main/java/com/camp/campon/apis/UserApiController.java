package com.camp.campon.apis;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.camp.campon.dto.Users;
import com.camp.campon.service.UserService;

import lombok.extern.slf4j.Slf4j;



@Slf4j
@RestController
@RequestMapping("/api/user")
public class UserApiController {
    @Autowired
    private UserService userService;
    @Autowired
    private PersistentTokenRepository persistentTokenRepository;


    // 로그인화면
    @GetMapping(value = "/login")
    public ResponseEntity<?> login(@CookieValue(value = "remember-id", required = false) Cookie cookie) {
        // - required=false : 쿠키 필수 ❌ ➡ 쿠키가 없어도 에러❌ (null)
        String userId = "";
        boolean rememberId = false;
        if (cookie != null) {
            log.info("CookieName : " + cookie.getName());
            log.info("CookiValue : " + cookie.getValue());
            userId = cookie.getValue();
            rememberId = true;
        }
        Map<String, Object> response = new HashMap<>();
        response.put("userId", userId);
        response.put("rememberId", rememberId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


     // 회원 가입 화면
    // @GetMapping(value = "/join")
    // public ResponseEntity<?> join() throws Exception {
    //     return new ResponseEntity<>(response, org.springframework.http.HttpStatus.OK);
    // }

    // 회원 가입 처리
    @PostMapping(value = "/join")
    public ResponseEntity<?> joinPro(@RequestBody Users user, HttpServletRequest request) throws Exception {
        log.info(request.getParameter("userPw"));
        log.info("user : #############################");
        log.info(user.toString());
        int result = userService.insert(user);
        log.info(result + "회원가입성공");
        // 회원 가입 성공 시, 바로 로그인
        if (result > 0) {
            // userService.login(user, request);
            log.info("회원가입 성공 시 바로 로그인 되었나?");
        }
        //return "redirect:/";
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // // 회원정보 수정
    // @GetMapping(value = "/update")
    // public ResponseEntity<?> userUpdate(Model model, Principal principal) throws Exception {
    //     String loginId = principal != null ? principal.getName() : null;
    //     Users user = userService.selectById(loginId);
    //     model.addAttribute("user", user);
    //     return "user/update";
    //     return new ResponseEntity<>(response, org.springframework.http.HttpStatus.OK);
    // }

    /**
     * 회원정보 수정 처리
     * 
     * @param entity
     * @return
     * @throws Exception
     */
    @PostMapping(value = "/update")
    public ResponseEntity<?> updateUpdatePro(@RequestBody Users user, HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        String responseText = "";
        log.info("user : " + user);
        int result = userService.update(user);
        log.info("회원정보 수정여부 : " + result);
        // 회원정보 수정 실패
        if (result == 0) {
            responseText="회원정보 수정 실패";
        }
        // 시큐리티 강제 로그아웃
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        new SecurityContextLogoutHandler().logout(request, response, authentication);
        // remember-me 쿠키 삭제
        Cookie cookie = new Cookie("remember-me", "");
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);
        // 토큰 삭제
        persistentTokenRepository.removeUserTokens(user.getUserId());
        // 로그아웃 후 ➡ 로그인 페이지
        responseText="회원정보 수정 성공";
        return new ResponseEntity<>(responseText, HttpStatus.OK);
    }

    //회원정보 삭제
    @DeleteMapping(value="/delete/{userId}")
    public ResponseEntity<?> delete(@PathVariable String userId, HttpServletRequest request, HttpServletResponse response) throws Exception {
        String responseText = "";
        log.info("삭제할 아이디 : " + userId);
        int result = userService.delete(userId);
        log.info("유저 삭제 여부 : "+ result);
        if (result > 0){
            responseText = "회원정보삭제성공";
            // 시큐리티 강제 로그아웃
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            new SecurityContextLogoutHandler().logout(request, response, authentication);
            // remember-me 쿠키 삭제
            Cookie cookie = new Cookie("remember-me", "");     
            cookie.setMaxAge(0);                                  
            cookie.setPath("/");        
            response.addCookie(cookie);
            // 토큰 삭제
            persistentTokenRepository.removeUserTokens(userId);
            //return "redirect:/";
            return new ResponseEntity<>(responseText, HttpStatus.OK);
        } else {
            //return "redirect:/user/update";
            responseText = "회원정보 삭제 실패";
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
    }


}
