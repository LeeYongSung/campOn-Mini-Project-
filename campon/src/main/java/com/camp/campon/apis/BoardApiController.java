package com.camp.campon.apis;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.camp.campon.dto.Board;
import com.camp.campon.dto.Camp;
import com.camp.campon.dto.CustomUser;
import com.camp.campon.dto.Users;
import com.camp.campon.service.BoardService;
import com.camp.campon.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/board")
public class BoardApiController {

    @Autowired
    private BoardService boardService;

    @Autowired
    private UserService userService;

    // 메인페이지 //TODO : 수정중
    @GetMapping(value = "/index")
    // public ResponseEntity<?> index(@AuthenticationPrincipal CustomUser customUser) throws Exception {
    // public ResponseEntity<?> index(Authentication authentication) throws Exception {
    public ResponseEntity<?> index(@AuthenticationPrincipal CustomUser customUser) throws Exception {
        
        log.info("customUser는?", customUser);

        Users user = customUser.getUser();
        log.info("user는?", user);
        String auth = user.getAuth();
        log.info("auth는? ", auth);
        int userNo = user.getUserNo();
        // List<Board> newReviewList = new ArrayList<>();
        // List<Board> crlist = new ArrayList<>();
        // if (auth == "ROLE_ADMIN") {
        //     newReviewList = boardService.newReviewList();
        //     crlist = boardService.crlist();
        //     log.info("뉴리뷰리스트"+newReviewList.toString());
        // }
        // if (auth == "ROLE_USER") {
        //     newReviewList = boardService.userprlist(userNo);
        //     log.info("뉴리뷰리스트"+newReviewList.toString());
        //     crlist = boardService.usercrlist(userNo);
        // }
        // if (auth == "ROLE_SELL") {
        //     newReviewList = boardService.newReviewList();
        //     crlist = boardService.campreviewlist(userNo);
        //     log.info("뉴리뷰리스트"+newReviewList.toString());
        // }
        try {
            List<Board> newReviewList = boardService.newReviewList();
            List<Board> crlist = boardService.crlist();
            List<Board> newprlist = boardService.newprlist();
            List<Board> prlist = boardService.prlist();

            Map<String, Object> map = new HashMap<>();
            map.put("newReviewList", newReviewList); //캠핑
            map.put("crlist", crlist);//캠핑
            map.put("newprlist", newprlist);//대여상품
            map.put("prlist", prlist);//대여상품

            return new ResponseEntity<>(map, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ---------------------------------------------------------------------------

    // 캠핑 리뷰 읽기
    @GetMapping(value = "/crread/{reviewNo}")
    public ResponseEntity<?> crread(@PathVariable int reviewNo) throws Exception {
        try {
            Board crread = boardService.crread(reviewNo);
            return new ResponseEntity<>(crread, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ---------------------------------------------------------------------------

    // 캠핑 리뷰 등록
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping(value = "/crinsert/{reservationNo}")
    public ResponseEntity<?> crinsert(@PathVariable int reservationNo) throws Exception {
        try {
            Camp reservation = boardService.reservation(reservationNo);
            if (reservation != null)
                return new ResponseEntity<>(reservation, HttpStatus.OK);
            else
                return new ResponseEntity<>("예약 정보를 찾을 수 없습니다", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping(value = "/crinsert")
    public ResponseEntity<?> crinsertPro(Board board) throws Exception {
        log.info(board + "board는?");
        int result = 0;
        result = boardService.crinsert(board);
        if (result > 0)
            return new ResponseEntity<>("게시글 등록 완료", HttpStatus.CREATED);
        else
            return new ResponseEntity<>("게시글 등록 실패", HttpStatus.BAD_REQUEST);
    }

    // ---------------------------------------------------------------------------

    // 캠핑 리뷰 삭제
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL', 'ROLE_USER')")
    @DeleteMapping(value = "/crdelete/{reviewNo}")
    public ResponseEntity<?> crdelete(@PathVariable Integer reviewNo) throws Exception {
        try {
            int result = boardService.crdelete(reviewNo);
            if (result > 0)
                return new ResponseEntity<>("게시글 삭제 완료", HttpStatus.OK);
            else
                return new ResponseEntity<>("게시글 삭제 실패", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ---------------------------------------------------------------------------

    // 캠핑 리뷰 수정
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL', 'ROLE_USER')")
    @GetMapping(value = "/crupdate/{reviewNo}")
    public ResponseEntity<?> crupdate(@PathVariable int reviewNo) throws Exception {
        try {
            Board crread = boardService.crread(reviewNo);
            return new ResponseEntity<>(crread, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL', 'ROLE_USER')")
    @PostMapping(value = "/crupdate")
    public ResponseEntity<?> crupdatePro(Board board) throws Exception {
        int result = boardService.crupdate(board);
        log.info("상품수정 성공여부 : " + result);
        if (result > 0)
            return new ResponseEntity<>("게시글 수정 완료", HttpStatus.OK);
        else
            return new ResponseEntity<>("게시글 수정 실패", HttpStatus.OK);
    }

    // ---------------------------------------------------------------------------

    // 상품 리뷰 읽기
    @GetMapping(value = "/prread/{prNo}")
    public ResponseEntity<?> prread(@PathVariable int prNo) throws Exception {
        try {
            Board prread = boardService.prread(prNo);
            return new ResponseEntity<>(prread, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ---------------------------------------------------------------------------

    // 상품 리뷰 등록
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL', 'ROLE_USER')")
    @GetMapping(value = "/prinsert/{orderNo}")
    public ResponseEntity<?> prinsert(@PathVariable int orderNo) throws Exception {
        try {
            Board order = boardService.order(orderNo);
            if (order != null)
                return new ResponseEntity<>(order, HttpStatus.OK);
            else
                return new ResponseEntity<>("예약 정보를 찾을 수 없습니다", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL', 'ROLE_USER')")
    @PostMapping(value = "/prinsert")
    public ResponseEntity<?> prinsertPro(Board board) throws Exception {
        log.info(board + "board는?");
        int result = 0;
        result = boardService.prinsert(board);
        if (result > 0)
            return new ResponseEntity<>("게시글 등록 완료", HttpStatus.CREATED);
        else
            return new ResponseEntity<>("게시글 등록 실패", HttpStatus.BAD_REQUEST);
    }
    // ---------------------------------------------------------------------------

    // 상품 리뷰 삭제
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL', 'ROLE_USER')")
    @DeleteMapping(value = "/prdelete/{prNo}")
    public ResponseEntity<?> prdelete(@PathVariable Integer prNo) throws Exception {
        try {
            int result = boardService.prdelete(prNo);
            if (result > 0)
                return new ResponseEntity<>("게시글 삭제 완료", HttpStatus.OK);
            else
                return new ResponseEntity<>("게시글 삭제 실패", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ---------------------------------------------------------------------------

    // 상품 리뷰 수정
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL', 'ROLE_USER')")
    @GetMapping(value = "/prupdate/{prNo}")
    public ResponseEntity<?> prupdate(@PathVariable int prNo) throws Exception {
        try {
            Board pr = boardService.prread(prNo);
            return new ResponseEntity<>(pr, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELL', 'ROLE_USER')")
    @PostMapping(value = "/prupdate")
    public ResponseEntity<?> prupdatePro(Board board) throws Exception {
        int result = 0;
        log.info("상품수정 성공여부 : " + result);
        result = boardService.prupdate(board);
        if (result > 0)
            return new ResponseEntity<>("게시글 수정 완료", HttpStatus.CREATED);
        else
            return new ResponseEntity<>("게시글 수정 실패", HttpStatus.BAD_REQUEST);
    }
}
