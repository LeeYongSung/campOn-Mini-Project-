package com.camp.campon.apis;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.camp.campon.dto.Product;
import com.camp.campon.service.AdService;
import com.camp.campon.service.BoardService;
import com.camp.campon.service.CampService;
import com.camp.campon.service.ProductService;
import com.camp.campon.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/admin")
public class AdminApiController {
    // private final UserService userService;
    @Autowired
    private UserService userService;
    @Autowired
    private CampService campService;
    @Autowired
    private ProductService productService;
    @Autowired
    private BoardService boardService;
    @Autowired
    private AdService adService;

    @GetMapping(value = "/productlist")
    public ResponseEntity<?> productList() throws Exception {
        List<Product> productList = productService.getProductList();
        log.info(productList.toString());
        // HttpHeaders headers = new HttpHeaders();
        // headers.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<>(productList,HttpStatus.OK);
    }

}
