package com.camp.campon.apis;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.camp.campon.dto.Board;
import com.camp.campon.dto.Camp;
import com.camp.campon.dto.Product;
import com.camp.campon.dto.Users;
import com.camp.campon.service.BoardService;
import com.camp.campon.service.CampService;
import com.camp.campon.service.ProductService;
import com.camp.campon.service.SMSService;
import com.camp.campon.service.UserService;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;


@Slf4j
@RestController
@RequestMapping("/api/camp")
public class CampAPIController {
    @Autowired
    private CampService campService;
    @Autowired
    private BoardService boardService;
    @Autowired
    private UserService userService;
    @Autowired
    private ProductService productService;
    @Autowired
    private SMSService smsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    //메인 화면
    @GetMapping(value="/index")
    public ResponseEntity<?> campMain(){
        try{
            List<Camp> camptypeList = campService.camptype();
            List<Camp> campnewList = campService.newList();
            List<Camp> campHotList = campService.hotList();
            List<Board> newReviewList = boardService.newReviewList();

            Map<String, Object> map = new HashMap<>();
            map.put("camptypeList", camptypeList);
            map.put("campnewList", campnewList);
            map.put("campHotList", campHotList);
            map.put("newReviewList", newReviewList);

            return new ResponseEntity<>(map, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //소개페이지
    @GetMapping(value="/information")
    public ResponseEntity<?> information() {
        try{
            return new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    //즐겨찾기 페이지
    @GetMapping(value="/favorites")
    public ResponseEntity<?> favorites() {
        try{
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();

            int userNo = 2;
            // String userId = auth.getName();
            List<Camp> favoritesList = campService.favoritesList(userNo);
            return new ResponseEntity<>(favoritesList, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //즐겨찾기 항목 삭제
    @DeleteMapping(value="/favorites/{no}")
    public ResponseEntity<?> favoriteDelete(@PathVariable Integer no) throws Exception {
        try{
            int result = campService.favoriteDelete(no);
            if( result > 0 )
                return new ResponseEntity<>("항목 삭제 완료", HttpStatus.OK); 
            else
                return new ResponseEntity<>("항목 삭제 실패", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }    

    //캠핑장 목록 페이지
    @GetMapping(value="/campproducts/{campTypeNo}")
    public ResponseEntity<?> campproducts(@PathVariable Integer campTypeNo, Integer[] campTypeNos, Camp camp){
        try{
        List<Camp> campselect = null;
        campTypeNo = campTypeNo == null ? 0 : campTypeNo;

        if(campTypeNo == 0) {
            
            List<String> checkBoxList = new ArrayList<>();
            for (int i = 0; i < campTypeNos.length; i++) {
                checkBoxList.add(campTypeNos[i] + "");
            }

            if(campTypeNos != null && campTypeNos.length == 0) campTypeNo = -1;

            camp.setCheckBoxList(checkBoxList);
            camp.setSearchDate(new Date());
            camp.setCampTypeNo(campTypeNo);

            campselect = campService.campSearch(camp);
        } else {
            campselect = campService.campSelect(campTypeNo);
        }

            return new ResponseEntity<>(campselect, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //캠핑장 상세 페이지
    @GetMapping(value="/campproduct/{no}")
    public ResponseEntity<?> campproduct(@PathVariable Integer no){
        try{
            List<Camp> productsimg = campService.productsimg(no);
            Camp productsproducts = campService.productsproducts(no);
            int productsreserve = campService.productsreserve(no);
            Users productsseller = userService.productsseller(no);
            List<Camp> productsenvironment = campService.productsenvironment(no);
            Board productsreview = boardService.productsreview(no);
            List<Camp> productsfacility = campService.productsfacility(no);
            List<Camp> productsproductlist = campService.productsproductlist(no);

            Map<String, Object> map = new HashMap<>();
            map.put("productsimg", productsimg);
            map.put("productsproducts", productsproducts);
            map.put("productsreserve", productsreserve);
            map.put("productsseller", productsseller);
            map.put("productsenvironment", productsenvironment);
            map.put("productsreview", productsreview);
            map.put("productsfacility", productsfacility);
            map.put("productsproductlist", productsproductlist);

            return new ResponseEntity<>(map, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //캠핑상품 페이지
    @GetMapping(value="/campdetail/{no}")
    public ResponseEntity<?> campdetail(@PathVariable Integer no){
        try{
            List<Camp> productimg = campService.productimg(no);
            Camp productintro = campService.productintro(no);

            Map<String, Object> map = new HashMap<>();
            map.put("productimg", productimg);
            map.put("productintro", productintro);
            
            return new ResponseEntity<>(map, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //캠핑 예약 페이지
    @GetMapping(value="/reservate/{no}")
    public ResponseEntity<?> campReservate(@PathVariable Integer no){
        try{
            Camp camp = campService.reservate(no);
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            // String userId = auth.getName();
            String userId = "user";
            // if(userId.equals("anonymousUser")) return "redirect:/user/login";
            Users user = userService.selectById(userId);

            Map<String, Object> map = new HashMap<>();
            map.put("camp", camp);
            map.put("user", user);
            
            return new ResponseEntity<>(map, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //캠핑 예약 처리
    @PostMapping(value="/reservate")
    public ResponseEntity<?> campReservatePay(@RequestBody Camp camp) {
        try{
            int result = campService.reservateInsert(camp);
            //캠핑장 판매자한테 문자보내기
            int cpdtNo = camp.getCpdtNo();
            String cpdtName = camp.getCpdtName();
            String sellerTel = userService.sellerTel(cpdtNo);
            SimpleDateFormat sdf = new SimpleDateFormat("yy년 MM월 dd일"); 
            Date reservationStart = camp.getReservationStart();
            String rsStart = sdf.format(reservationStart);
            Date reservationEnd = camp.getReservationEnd();
            String rsEnd = sdf.format(reservationEnd);
            String msg = "안녕하세요 캠핑장 판매자님 캠프온입니다.\n"+cpdtName +"에 "+rsStart +"~"+rsEnd+" 예약되었습니다. 홈페이지에서 확인하세요.";
            MultiValueMap<String, String> param =  new LinkedMultiValueMap<String, String>(); 
            param.add("msg", msg);
            param.add("receiver", sellerTel);
            param.add("rdate", "");
            param.add("rtime", "");
            param.add("testmode_yn", "N");
            // 문자 전송 요청
            Map<String, Object> resultMap = smsService.send(param);
            Object resultCode = resultMap.get("result_code");
            Integer result_code = Integer.valueOf( resultCode != null ? resultCode.toString() : "-1" );
            String message = (String) resultMap.get("message");
            
            //캠핑장 예약한 사람한테 문자보내기
            String userTel = camp.getUserTel();
            String msgg = "안녕하세요 캠프온입니다.\n"+cpdtName +"에 "+rsStart +"~"+rsEnd+" 예약되었습니다. \n홈페이지에서 캠핑장에 필요한 상품도 대여해보세요. \n 즐거운 여행 되세요!"; 
            MultiValueMap<String, String> param2 =  new LinkedMultiValueMap<String, String>(); 
            param.add("msg", msgg);
            param.add("receiver", userTel);
            param.add("rdate", "");
            param.add("rtime", "");
            param.add("testmode_yn", "N");
            // 문자 전송 요청
            Map<String, Object> resultMap2 = smsService.send(param2);
            Object resultCode2 = resultMap.get("result_code");
            Integer result_code2 = Integer.valueOf( resultCode2 != null ? resultCode2.toString() : "-1" );
            String message2 = (String) resultMap2.get("message");

            if( result > 0 )
                return new ResponseEntity<>("예약 완료", HttpStatus.CREATED);  // 201
            else
                return new ResponseEntity<>("예약 실패", HttpStatus.OK);  
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //예약완료 페이지
    @GetMapping(value="/complete")
    public ResponseEntity<?> complete(){
        try{
            Camp reservecomplete = null;
        
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();

            String userId = "user";
            // String userId = auth.getName();

            Users user = userService.selectById(userId);

            String name = user.getUserId();

            if(userId.equals(name)){
                reservecomplete = campService.reservecomplete(userId);
            }
            
            return new ResponseEntity<>(reservecomplete, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //예약현황 페이지
    @GetMapping(value="/reservation")
    public ResponseEntity<?> campReservation(){
        try{
            int userNo = 2;
            // if (principal == null){ userNo = 1000;}
            // else {
            //     String userId = principal.getName();
            //     Users users = userService.selectById(userId);
            //     userNo = users.getUserNo();
            // }
            List<Product> productList = productService.reservedProduct(userNo);
            List<Camp> reservationList = campService.reservation(userNo);
            
            Map<String, Object> map = new HashMap<>();
            map.put("productList", productList);
            map.put("reservationList", reservationList);

            return new ResponseEntity<>(map, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //예약현황 삭제
    @DeleteMapping("/reservation/{no}")
    public ResponseEntity<?> reservationdelete(@PathVariable Integer no) {
        log.info("주소 : /reservation/{no}");
        try {
            int result = campService.reservationdelete(no);
            int result1 = boardService.crdeletelist(no);
            if( result > 0 )
                return new ResponseEntity<>("예약내역 삭제 완료", HttpStatus.OK); 
            else
                return new ResponseEntity<>("예약내역 삭제 실패", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //캠핑오픈일정
    @GetMapping(value="/schedule")
    public ResponseEntity<?> campSchedule(Camp camp){
        try{
            // 현재 날짜 가져오기
            LocalDate currentDate = LocalDate.now();
            
            // 30일 뒤 날짜 계산
            LocalDate plus30Days = currentDate.plusDays(30);
            
            // 날짜 포맷 지정
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            
            // 포맷에 맞게 날짜 문자열로 변환
            String startDate = currentDate.format(formatter);
            String endDate = plus30Days.format(formatter);
           
            camp.setCampOpen(startDate);
            camp.setCampClose(endDate);
            
            List<Camp> campschedule = campService.schedule(camp);

            Map<String, Object> map = new HashMap<>();
            map.put("campschedule", campschedule);
            map.put("startDate", startDate);

            return new ResponseEntity<>(map, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //캠핑장 검색창
    // @ResponseBody
    // @GetMapping(value="/campSearch")
    @PostMapping(value="/campSearch")
    public ResponseEntity<?> campSearch(@RequestBody Camp camp) throws Exception {
        // log.info("테스트 : " + camp);
        try{
            log.info("keywordValue : " + camp.getKeyword());
            log.info("dateValue : " + camp.getSearchDate());
            log.info("regionNoValue : " + camp.getRegionNo());
            log.info("checkBoxList : " + camp.getCheckBoxList());
            
            // log.info(""+camp);
            List<String> checkBoxList = camp.getCheckBoxList();
            
            log.info("checkBoxList : " + checkBoxList);

            if( checkBoxList != null )
            for(int i = 0; i < checkBoxList.size(); i++) {
                // Integer[] campTypeNo = checkBoxList.get(i).split(',');
                log.info("캠프타입번호 : " + checkBoxList.get(i));
            }

            if( checkBoxList.isEmpty() )  {
                // log.info("들어옴");
                camp.setCampTypeNo(-1);
                camp.setCheckBoxList(new ArrayList<>());
            }
            
            camp.setSearchDate(new Date());
            log.info("camp : "+camp);
            List<Camp> campList = campService.campSearch(camp);
            
            log.info("campList : "+campList);
            return new ResponseEntity<>(campList, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //찜 등록
    @PostMapping(value="/favorites")
    public ResponseEntity<?> favoriteInsert(@RequestBody Camp camp) {
        try{
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();

            int userNo = 2;
            // String userId = auth.getName();
            camp.setUserNo(userNo);

            int result = campService.favoriteInsert(camp);
            
            if( result > 0 )
                return new ResponseEntity<>("찜 완료", HttpStatus.CREATED);  // 201
            else
                return new ResponseEntity<>("찜 실패", HttpStatus.OK);  
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
