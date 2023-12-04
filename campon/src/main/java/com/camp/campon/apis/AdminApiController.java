package com.camp.campon.apis;
import java.io.FileInputStream;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    // 상품 수정 페이지
    @GetMapping(value = "/productupdate", params = "productNo")
    public String productUpdate(@RequestParam String productNo, Model model) throws Exception {
        Product product = productService.selectUpd(Integer.parseInt(productNo));
        model.addAttribute("product", product);
        return "admin/productupdate";
    }

    // 상품 수정 pro
    @PostMapping(value = "/productUpdate")
    public String productUpdate(Product product) throws Exception {
        log.info("썸네일 있냐?" + product.getProductThmFile().size());
        int result = productService.productUpdate(product);
        log.info("상품수정 성공여부 : " + result);
        return "redirect:/admin/productlist";
    }

    // 상품 삭제 pro
    @GetMapping(value = "/delete", params = "productNo")
    public String productDelete(@RequestParam String productNo) throws NumberFormatException, Exception {
        int result = productService.deleteProduct(Integer.parseInt(productNo));
        return "redirect:/admin/productlist";
    }

}
