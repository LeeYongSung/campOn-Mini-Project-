package com.camp.campon.apis;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.camp.campon.dto.Product;
import com.camp.campon.dto.Users;
import com.camp.campon.service.AdService;
import com.camp.campon.service.BoardService;
import com.camp.campon.service.CampService;
import com.camp.campon.service.ProductService;
import com.camp.campon.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/admin")
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

    // 상품등록 실행
    @PostMapping("/productInsert")
    public ResponseEntity<?> productInsert(Product product) throws Exception {
        int result = productService.productInsert(product);
        log.info("상품등록 성공여부 : " + result);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // // 상품 수정 페이지
    // @GetMapping(value = "/productupdate", params = "productNo")
    // public ResponseEntity<?> productUpdate(@RequestParam String productNo, Model model) throws Exception {
    //     Product product = productService.selectUpd(Integer.parseInt(productNo));
    //     model.addAttribute("product", product);
    //     return "admin/productupdate";
    //     return new ResponseEntity<>(result, HttpStatus.OK);
    // }

    // // 상품 수정 pro
    // @PostMapping(value = "/productUpdate")
    // public ResponseEntity<?> productUpdate(Product product) throws Exception {
    //     log.info("썸네일 있냐?" + product.getProductThmFile().size());
    //     int result = productService.productUpdate(product);
    //     log.info("상품수정 성공여부 : " + result);
    //     return "redirect:/admin/productlist";
    //     return new ResponseEntity<>(result, HttpStatus.OK);
    // }

    // // 상품 삭제 pro
    // @GetMapping(value = "/delete", params = "productNo")
    // public ResponseEntity<?> productDelete(@RequestParam String productNo) throws NumberFormatException, Exception {
    //     int result = productService.deleteProduct(Integer.parseInt(productNo));
    //     return "redirect:/admin/productlist";
    //     return new ResponseEntity<>(result, HttpStatus.OK);
    // }

    // 멤버 관리 페이지
    @GetMapping(value = "/memberList")
    public ResponseEntity<?> memberList() throws Exception {
        List<Users> userList = userService.memberList("ROLE_USER");
        List<Users> sellList = userService.memberList("ROLE_SELL");
        Map<String, Object> map = new HashMap<>();
        map.put("userList", userList) ;
        map.put("sellList", sellList) ;
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    // @GetMapping(value = "/memberDelete")
    // public ResponseEntity<?> memberDelete(String userId) throws Exception {
    //     int result = userService.delete(userId);
    //     log.info("회원 삭제 여부 : " + result);
    //     return "redirect:/admin/memberList";
    //     return new ResponseEntity<>(result, HttpStatus.OK);
    // }


}
