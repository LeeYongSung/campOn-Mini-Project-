package com.camp.campon.dto;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;

//이걸 만든 이유: 우리가 만든 Users 객체를  스프링시큐리티에 맞는 형식으로 만들기 위해
//extends UserDetails 해줘야 업캐스팅 해서 반환타입을 맞출 수 있습니다. (CustomUserDetailService.java 참고)
@Data
public class CustomUser implements UserDetails {

    private Users user;

    public CustomUser(Users user) {
        this.user = user;
    }

    // 오버라이딩한 모든 메소드 중 필수적인 건 권한 응답입니다.

    // 권한 getter 메소드
    // GrantedAuthority를 구현한 SimpleGrantedAuthority
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // List<UserAuth> authList = user.getAuthList(); // UserAuth (authNo, userId,
        // auth)
        String auth = user.getAuth(); // UserAuth (authNo, userId, auth)
        // SimpleGrantedAuthority() - "ROLE_USER"
        Collection<SimpleGrantedAuthority> roleList = new ArrayList<>();
        // authList.map((auth) -> new SimpleGrantedAuthority(auth.getAuth()))
        // .collect(Collectors.toList());
        // (new SimpleGrantedAuthority(auth)).collect(Collectors.toList());
        // new ArrayList<>();
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(auth);
        // authorities.add(authority);
        roleList.add(authority);
        return roleList;
    }

    // jwt에서도 활성화여부, 만료여부 등등을 할수있기 때문에 일단 다 true로 줘볼게요.

    @Override
    public String getPassword() {
        return user.getUserPw();
    }

    @Override
    public String getUsername() {
        return user.getUserId();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
      //  return user.getEnabled() == 0 ? false : true;
      return true;
    }

}
