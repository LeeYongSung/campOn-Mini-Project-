package com.camp.campon.apis;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
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

import com.camp.campon.dto.Camp;
import com.camp.campon.dto.Order;
import com.camp.campon.dto.Product;
import com.camp.campon.dto.Productreview;
import com.camp.campon.dto.Users;
import com.camp.campon.service.CampService;
import com.camp.campon.service.OrderService;
import com.camp.campon.service.ProductService;
import com.camp.campon.service.SMSService;
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
    private OrderService orderService;

    @Autowired
    private CampService campService;

    @Autowired
        private SMSService smsService;
    
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
            log.info("리뷰카운트 : " + reviewCount + "");
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
            String state = "";
            Users users = userService.selectById(userId);
            int userNo = users.getUserNo();
            Product product = new Product();
            product.setProductNo(productNo);
            product.setUserNo(userNo);
            int result = productService.addProductsave(product);

            if(result == 1) state = "SUCCESS";
            else state = "FAIL";


            return new ResponseEntity<>(state, HttpStatus.OK);
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

    @GetMapping(value="/addProductsaveAjax")
    public ResponseEntity<?> addCart(Product product) {
        try {
            String state = "";
            int result = 0;
            int productNo = product.getProductNo();
            log.info(productNo + "");
            int cnt = productService.dupliCateTest(productNo);
            if(cnt == 0) {
                result = productService.addCart(product);
                log.info("장바구니에 넣기 성공여부 : "+ result);
                state = "SUCCESS";
            } else {
                log.info("장바구니에 넣기 성공여부 : "+ result);
                state = "FAIL";
            }
            return new ResponseEntity<>(state, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value="/addcart")
    public ResponseEntity<?> addcart(Product product) {
        try {
            int result = productService.addCart(product);
            log.info("장바구니에 넣기 성공여부 : "+ result);

            return new ResponseEntity<>(result, HttpStatus.OK);
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

    /**
     * 결제
     */
    @GetMapping(value="/payment")
    public ResponseEntity<?> payMent() {
        try {
            // 임시값
            int userNo = 2;

            List<Product> cartList = productService.cartList(userNo);
            List<Camp> reservationList = campService.reservationNow(userNo);
            Map<String, Object> payments = new HashMap<>();
            payments.put("cartList", cartList);
            payments.put("reservationList", reservationList);

            log.info("payments : " + payments);

            return new ResponseEntity<>(payments, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 결제완료
     */
    
    @GetMapping(value="/depositcomp")
    public ResponseEntity<?> depositcomp(@RequestParam String orderNumber) {
        try {
            log.info(orderNumber);
            Map<String, Object> deposit = null;
            try {
                Order order = orderService.selectOrder(orderNumber);
                log.info("order : " + order);
                Order orderpay = orderService.paymentsByOrNo(orderNumber);
                String pmType = orderpay.getPmType();
                String paytotal = orderpay.getPmPrice();
                String userName = userService.select(order.getUserNo()).getUserName();
                log.info(userName + "userName");
                log.info(order.toString());
                log.info(paytotal);
                deposit = new HashMap<>();
    
                deposit.put("order", order);
                deposit.put("paytotal", paytotal);
                deposit.put("userName", userName);
                deposit.put("pmType", pmType);
                
            } catch (Exception e) {
                System.err.println("에러발생");
                e.printStackTrace();
            }


            return new ResponseEntity<>(deposit, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 결제 폼 제출
     */
    @PostMapping("/paymentpro")
    public ResponseEntity<?> paymentpro(Order order) {
        try {

            int userNo = 0;
            String userTel = "01000000000";
            String userName = "이용자";

            String userId = "user";
            Users users = userService.selectById(userId);
            userTel = users.getUserTel();
            userNo = users.getUserNo();
            userName = users.getUserName();
            
            order.setUserNo(userNo);
            log.info("order 객체에 어떻게 담겨있는지 확인 : "+order);
            //(reservationNo=2, pmType=카드,cartCnts=[2, 3, 4, 5], productNos=[1, 2, 11, 1])
            //카트 업뎃
            int[] cartCnts = order.getCartCnts();
            int[] productNos = order.getProductNos();
            
            for (int i=0; i< cartCnts.length ; i++) {
                Product product = new Product();
                product.setCartCnt(cartCnts[i]);
                product.setProductNo(productNos[i]);

                product.setUserNo(userNo);
                int result = productService.cartUpdate(product);
                log.info("카트업뎃여부 : "+ result);
            }
            //orderNumber 생성
            int createNum = 0;
            String ranNum = "";
            String orderNumber = "";
            Random random = new Random();
            for (int j=0; j<6; j++){
                createNum = random.nextInt(9);
                ranNum =  Integer.toString(createNum);
                orderNumber += ranNum;
            } 
            System.out.println(orderNumber); //order_number에 넣어줄 거임
            order.setOrderNumber(orderNumber);
            int result2 = orderService.addOrder(order);
            log.info("order 테이블에 주문정보 등록여부 : " +result2);
            Long pmPrice = orderService.payAmount(order);
            log.info("결제합계금액 : "+pmPrice);
            order.setPmPrice(pmPrice+"");
            int result3 = orderService.addPayments(order);
            log.info("payments테이블에 등록 : "+ result3);
            int result4 = orderService.addDelivery(orderNumber);
            log.info("delivery 테이블에 등록 : "+result4);

            
            //상품 결제 문자 보내기
            SimpleDateFormat sdt = new SimpleDateFormat("yy년 MM월 dd일");
            SimpleDateFormat sdtt = new SimpleDateFormat("MM월 dd일");
            List<Order> orderList = orderService.toUserMsg(orderNumber);
            String cpDtName = orderList.get(0).getCpDtName();
            String productmsg = "";
            for (int i = 0; i < orderList.size(); i++) {
                Order order2 = orderList.get(i);
                int orderCnt = order2.getOrderCnt();
                String productName = order2.getProductName();
                String mmm ="";
                if (i == orderList.size()-1){ mmm =  productName + " : "+orderCnt + "개";}
                else { mmm = productName + " : "+orderCnt + "개, "; }
                productmsg += mmm;
            }
            String stDate = sdt.format(orderList.get(0).getStartDate());
            String sttDate = sdtt.format(orderList.get(0).getStartDate());
            String edDate = sdt.format(orderList.get(0).getEndDate());
            String msg = "안녕하세요 "+ userName+"님 캠프온입니다. \n"+ stDate +"~"+ edDate+ " 예약된 " +cpDtName+" 캠핑장에 대여상품 "+productmsg+"를 대여하셨습니다. \n"+sttDate +"에 캠핑장으로 배송될 예정입니다. \n이용해주셔서 감사합니다. ";
            MultiValueMap<String, String> param =  new LinkedMultiValueMap<String, String>(); 
            param.add("msg", msg);
            param.add("receiver", userTel);
            param.add("rdate", "");
            param.add("rtime", "");
            param.add("testmode_yn", "N");
            // 문자 전송 요청
            Map<String, Object> resultMap = smsService.send(param);
            Object resultCode = resultMap.get("result_code");
            Integer result_code = Integer.valueOf( resultCode != null ? resultCode.toString() : "-1" );
            String message = (String) resultMap.get("message");


            //장바구니와 찜에 있는 상품들 모두 삭제
            int result5 = orderService.saveCartDel(userNo);
            log.info("장바구니와 찜에 있는 목록들 삭제여부 : "+result5);

            return new ResponseEntity<>(orderNumber, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
