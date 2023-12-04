package com.camp.campon.apis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.camp.campon.dto.Product;
import com.camp.campon.dto.Productreview;
import com.camp.campon.dto.Users;
import com.camp.campon.service.CampService;
import com.camp.campon.service.ProductService;
import com.camp.campon.service.UserService;

import lombok.extern.slf4j.Slf4j;



@Slf4j
@RestController
@RequestMapping("/api/product")
public class ProductApiController {
    @Autowired
    private ProductService productService;

    @Autowired
    private UserService userService;

    @Autowired
    private CampService campService;
    
    @Value("${upload.path}")
    private String uploadPath;

    
    @GetMapping("/index")
    public ResponseEntity<?> productMain() {
        log.info("/api/product/index");
        try {
            //상품 후기 불러오기
            List<Productreview> proReviewList =  productService.getReviewListLimit();
            // 추천상품 리스트
            List<Product> productHotList = productService.hotList();

            Map<String, Object> response = new HashMap<>();

            response.put("proReviewList", proReviewList);
            response.put("productHotList", productHotList);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            log.info("indexError : " + e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping(value={"/productList"})
    public ResponseEntity<?> getCategoryList(String category) {
        log.info(category);
        try {
            List<Product> productList = productService.getCategoryList(category);
            log.info("카테고리 : " + category);
            log.info("카테고리별 아이템 : " + productList);
            return new ResponseEntity<>(productList, HttpStatus.OK);
        } catch (Exception e) {
            log.info("categoryError : " + e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping(value = "/productdetail")
    public ResponseEntity<?> productDetail(Integer productNo) {
        try {
            Product product = productService.select(productNo);
            List<Productreview> proReviewList = productService.getReviewListByNoLim(productNo);
            for (Productreview productreview : proReviewList) {
                log.info(productreview.getPrNo() +"리뷰넘버"); 
            }
            int reviewCount = productService.reviewCount(productNo);

            Map<String, Object> pd = new HashMap<>();

            pd.put("product", product);
            pd.put("proReviewList", proReviewList);
            pd.put("reviewCount", reviewCount);
            return new ResponseEntity<>(pd, HttpStatus.OK);
        } catch (Exception e) {
            log.info("productdetailError : " + e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/wishlist")
    public ResponseEntity<?> wishlist() {
        try {
            String userId = "user";
            Users users = userService.selectById(userId);
            int userNo = users.getUserNo();
            List<Product> wishlist = productService.wishList(userNo);
            return new ResponseEntity<>(wishlist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value="/addProductsave")
    public ResponseEntity<?> addProductsave(int productNo) {
        try {
            String userId = "user";
            Users users = userService.selectById(userId);
            int userNo = users.getUserNo();
            Product product = new Product();
            product.setProductNo(productNo);
            product.setUserNo(userNo);
            int result = productService.addProductsave(product);
            return new ResponseEntity<>(product, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping(value = "/wishlistDelete")
    public ResponseEntity<?> wishlistDelete(int productsaveNo) {
        try {
            log.info("productsaveNo : " + productsaveNo + " ");
            int result = productService.wishListDelete(productsaveNo);
            log.info("delete : " + result + " ");
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/cart")
    public ResponseEntity<?> cartlist() {
        try {
            String userId = "user";
            Users users = userService.selectById(userId);
            int userNo = users.getUserNo();
            List<Product> cartList = productService.cartList(userNo);

            return new ResponseEntity<>(cartList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ResponseBody
    @GetMapping(value="/addProductsaveAjax")
    public ResponseEntity<?> addCart(Product product) {
        try {
            String state = "";
            int result = productService.addCart(product);
            log.info("장바구니에 넣기 성공여부 : "+ result);
            if(result == 0) {
                state = "FAIL";
            } else {
                state = "SUCCESS";
            }
            return new ResponseEntity<>(state, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value="/addcartAll")
    public ResponseEntity<?> addcartAll() {
        try {
            String userId = "user";
            Users users = userService.selectById(userId);
            int userNo = users.getUserNo();
            int result = productService.addcartAll(userNo);
            log.info("장바구니에 담긴 상품 갯수 : " + result);

            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/cartDelete")
    public ResponseEntity<?> cartListDelete(Product product) {
        try {
            int cartNo = product.getCartNo();
            int result = productService.cartListDelete(cartNo);

            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
