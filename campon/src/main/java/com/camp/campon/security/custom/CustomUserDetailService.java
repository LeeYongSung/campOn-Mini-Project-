package com.camp.campon.security.custom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.camp.campon.dto.CustomUser;
import com.camp.campon.dto.Users;
import com.camp.campon.mapper.UserMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserMapper userMapper; // 디비에서 조회를 해야 하기 때문에
    // loadUserByUsername 를 오버라이딩 해줍니다.

    @Override
    // UserDetails객체를 반환해줘야 합니다. 우리가 가지고 있는 Users 객체를 UserDetails에 맞게끔 변환해줘야 합니다.
    // 시큐리티에서 사용할수있게끔

    public UserDetails loadUserByUsername(String username) {
        log.info("login - loadUserByUsername : " + username);

        Users user = userMapper.login(username);

        if (user == null) {
            log.info("사용자 없음... (일치하는 아이디가 없음)");
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다 : " + username);
        }

        log.info("user : ");
        log.info(user.toString());

        // Users -> CustomUser (dto에 만들어줍니다. )
        CustomUser customUser = new CustomUser(user);

        log.info("customUser : ");
        log.info(customUser.toString());

        return customUser;
    }

}
