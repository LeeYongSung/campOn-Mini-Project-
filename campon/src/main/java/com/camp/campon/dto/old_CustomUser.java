// package com.camp.campon.dto;

// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.Collection;
// import java.util.stream.Collectors;

// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.userdetails.User;

// import lombok.Data;


// //@Slf4j
// @Data
// public class old_CustomUser extends User{
    
//     private Users users;

//     public old_CustomUser(String username, String password, Collection<? extends GrantedAuthority> authorities) {
//         super(username, password, authorities);
//     }



//     public old_CustomUser(Users users) {
//         super(users.getUserId(), users.getUserPw(), Arrays.asList(new SimpleGrantedAuthority(users.getAuth())));
        
//         this.users = users;
//     }

    
// }
