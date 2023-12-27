package com.camp.campon.apis;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.camp.campon.dto.Ad;
import com.camp.campon.dto.Camp;
import com.camp.campon.dto.CustomUser;
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

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping(value = "/productlist")
    public ResponseEntity<?> productList() throws Exception {
        List<Product> productList = productService.getProductList();
        log.info(productList.toString());
        // HttpHeaders headers = new HttpHeaders();
        // headers.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    // 상품등록 실행
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/productInsert")
    public ResponseEntity<?> productInsert(Product product) throws Exception {
        int result = productService.productInsert(product);
        log.info("상품등록 성공여부 : " + result);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 상품 수정 페이지
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping(value = "/productupdate/{productNo}")
    public ResponseEntity<?> productUpdate(@PathVariable String productNo) throws Exception {
        log.info(productNo);
        log.info("상품 수정 페이지 진입");
        Product product = productService.selectUpd(Integer.parseInt(productNo));
        // return "admin/productupdate";
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    // 상품 수정 pro
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping(value = "/productUpdate")
    public ResponseEntity<?> productUpdate(Product product) throws Exception {
        int result = productService.productUpdate(product);
        log.info("상품수정 성공여부 : " + result);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 상품 삭제 pro
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping(value = "/delete/{productNo}")
    public ResponseEntity<?> productDelete(@PathVariable String productNo) throws NumberFormatException, Exception {
        int result = productService.deleteProduct(Integer.parseInt(productNo));
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 멤버 관리 페이지
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping(value = "/memberList")
    public ResponseEntity<?> memberList() throws Exception {
        List<Users> userList = userService.memberList("ROLE_USER");
        List<Users> sellList = userService.memberList("ROLE_SELL");
        Map<String, Object> map = new HashMap<>();
        map.put("userList", userList);
        map.put("sellList", sellList);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping(value = "/memberDelete/{userId}")
    public ResponseEntity<?> memberDelete(@PathVariable String userId) throws Exception {
        int result = userService.delete(userId);
        log.info("회원 삭제 여부 : " + result);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /* 캠핑장 crud */
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL')")
    @GetMapping(value = "/campproductlist")
    public ResponseEntity<?> campList(@AuthenticationPrincipal CustomUser customUser) throws Exception {
        Users user = customUser.getUser();
        log.info("user찍히는지", user);
        List<Camp> camp = campService.campproductUser(user.getUserNo());
        List<Camp> camp1 = campService.campproductadmin();
        log.info(camp.toString());
        log.info(camp1.toString());
        Map map = new HashMap<>();
        map.put("campList", camp);
        map.put("campListadmin", camp1);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    // @GetMapping(value = "/campproductadd")
    // public ResponseEntity<?> campInsert(@ModelAttribute Camp camp) throws
    // Exception {
    // Authentication auth = SecurityContextHolder.getContext().getAuthentication();

    // String userId = auth.getName();
    // Users user = userService.selectById(userId);
    // int userNo = user.getUserNo();
    // camp.setUserNo(userNo);
    // // log.info("camp : " + camp.getUserNo());
    // // model.addAttribute("camp", camp);
    // // return "admin/campproductadd";
    // return new ResponseEntity<>(HttpStatus.OK);
    // }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL')")
    @PostMapping(value = "/campproductadd")
    public ResponseEntity<?> campInsertPro(Camp camp) throws Exception {
        List<String> facilityTypeNo = camp.getFacilityTypeNoList();
        int result = campService.campInsert(camp, facilityTypeNo);
        if (result == 0)
            // return "admin/campproductadd";
            return new ResponseEntity<>(result, HttpStatus.OK);
        // return "redirect:/admin/campproductlist";
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL')")
    @GetMapping(value = "/campproductupdate/{campNo}")
    public ResponseEntity<?> campUpdate(@PathVariable String campNo) throws Exception {
        Camp camp = campService.productsproducts(Integer.parseInt(campNo));
        List<Camp> campfacility = campService.productsfacility(Integer.parseInt(campNo));
        Map<String, Object> map = new HashMap<>();
        map.put("camp", camp);
        map.put("campfacility", campfacility);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL')")
    @PostMapping(value = "/campproductupdatePro")
    public ResponseEntity<?> campUpdatePro(@ModelAttribute Camp camp)
            throws Exception {
        List<String> facilityTypeNo = camp.getFacilityTypeNoList();
        int campNo = camp.getCampNo();
        int result1 = campService.campFacilityDelete(campNo);
        int result2 = campService.campEnvironmentDelete(campNo);
        int result3 = campService.campImgDelete(campNo);
        int result4 = campService.campUpdate(camp, facilityTypeNo);
        String result = "캠핑장 수정" + result1 + ", " + result2 + result3 + ", " + result4;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 캠핑상품 등록처리
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL')")
    @PostMapping(value = "/campdetailinsert")
    public ResponseEntity<?> campdetailinsertPro(@ModelAttribute Camp camp) throws Exception {
        int result = campService.detailinsert(camp);
        int campNo = camp.getCampNo();
        int userNo = camp.getUserNo();
        String resultString = "D캠핑장 등록" + result + ", " + campNo + ", " + userNo;
        return new ResponseEntity<>(resultString, HttpStatus.OK);
    }

    // 캠핑상품 수정
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL')")
    @GetMapping(value = "/campdetailupdate/{cpdtNo}")
    public ResponseEntity<?> campdetailupdate(@PathVariable int cpdtNo) throws Exception {
        Camp camp = campService.productintro(cpdtNo);
        return new ResponseEntity<>(camp, HttpStatus.OK);
    }

    // 캠핑상품 수정처리
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL')")
    @PostMapping(value = "/campdetailupdate")
    public ResponseEntity<?> campdetailupdatePro(Camp camp) throws Exception {
        log.info("cpdtPrice : " + camp.getCpdtPrice());
        log.info(camp.getCpdtPrice() + "");
        //String cpdtPriceStr = camp.getCpdtPriceStr();
       // Integer cpdtPrice = cpdtPriceStr == null ? 0 : Integer.parseInt(cpdtPriceStr);
       // camp.setCpdtPrice(cpdtPrice);
        int filedelete = campService.cpdidelete(camp.getCpdtNo());
        int result = campService.detailupdate(camp);
        int cpdtNo = camp.getCpdtNo();
        String resultString = "D캠핑장 수정" + result + ", " + filedelete + ", " + cpdtNo;
        return new ResponseEntity<>(resultString, HttpStatus.OK);
    }

    // 캠핑상품 삭제처리
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL')")
    @DeleteMapping(value = "/campdetaildelete/{cpdtNo}")
    public ResponseEntity<?> campdetaildelete(@PathVariable int cpdtNo) throws Exception {
        log.info("숫자 : " + cpdtNo);
        int filedelete = campService.cpdidelete(cpdtNo);
        int result1 = boardService.crdeletecpdtNo(cpdtNo);
        int result = campService.detaildelete(cpdtNo);
        if (result == 0)
            // return "redirect:/admin/campdetailupdate?cpdtNo=" + cpdtNo;
            return new ResponseEntity<>(HttpStatus.OK);
        // return "redirect:/admin/campproductlist";
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // @GetMapping(value = "/campdetaildelete")
    // public ResponseEntity<?> campdetaildeletepro(int cpdtNo) throws Exception {
    // log.info("숫자 : " + cpdtNo);
    // int filedelete = campService.cpdidelete(cpdtNo);
    // int result1 = boardService.crdeletecpdtNo(cpdtNo);
    // int result = campService.detaildelete(cpdtNo);
    // if (result == 0)
    // // return "redirect:/admin/campdetailupdate?cpdtNo=" + cpdtNo;
    // return new ResponseEntity<>(HttpStatus.OK);
    // // return "redirect:/admin/campproductlist";
    // return new ResponseEntity<>(HttpStatus.OK);
    // }

    // 캠핑장 삭제
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL')")
    @DeleteMapping(value = "/campdelete/{campNo}")
    public ResponseEntity<?> campdelete(@PathVariable int campNo) throws Exception {
        int result1 = campService.cpdeletecdi(campNo);
        int result2 = campService.cpdeletecpdt(campNo);
        int result3 = campService.cpdeletecpi(campNo);
        int result6 = campService.campFacilityDelete(campNo);
        int result7 = campService.campEnvironmentDelete(campNo);
        int result4 = campService.cpdelete(campNo);
        int result5 = boardService.crdeletecampNo(campNo);
        String result = result1 + ", " + result2 + ", " + result3 + ", " + result6 + ", " + result7 + ", " + result4
                + ", " + result5;
        // return "redirect:/admin/campproductlist";
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    /*
     * 광고
     */

    // 광고 등록 페이지 (필요없음)
    // @GetMapping("/adinsert/{campNo}")
    // public ResponseEntity<?> adinsert(@PathVariable int campNo) {
    //     model.addAttribute("campNo", campNo);
    //     //return "admin/adinsert";
    //     return new ResponseEntity<>(result, HttpStatus.OK);
    // }
    // 광고 등록 실행 (판매자)
    @PreAuthorize("hasRole('ROLE_SELL')")
    @PostMapping(value = "/adinsertpro")
    public ResponseEntity<?> adinsertpro(@ModelAttribute Ad ad) throws Exception {
        int result = adService.adinsert(ad);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    // admin 광고리스트
    // @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping(value = "/adlist")
    public ResponseEntity<?> adlist() throws Exception {
        log.info("들어오는가");
        List<Ad> adlist = adService.adlist();
        log.info("광고는? "+adlist);
        return new ResponseEntity<>(adlist, HttpStatus.OK);
    }

    // 승인처리
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping(value = "/adcheck/{adNo}")
    public ResponseEntity<?> adcheck(@PathVariable int adNo) throws Exception {
        int result = adService.adcheck(adNo);
        //return "redirect:/admin/adlist";
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // seller 광고리스트
    @PreAuthorize("hasRole('ROLE_SELL')")
    @GetMapping(value = "/adlistseller")
    public ResponseEntity<?> adlistseller(Principal principal) throws Exception {
        int userNo = 0;
        if (principal == null) {
            userNo = 3; //하드코딩
        } else {
            String userId = principal.getName();
            Users users = userService.selectById(userId);
            userNo = users.getUserNo();
        }
        List<Ad> adlistseller = adService.adlistseller(userNo);
        //return "admin/adlistseller";
        return new ResponseEntity<>(adlistseller, HttpStatus.OK);
    }

}
