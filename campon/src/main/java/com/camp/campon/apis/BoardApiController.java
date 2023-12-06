package com.camp.campon.apis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.camp.campon.dto.Board;
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

    // 메인페이지
    @GetMapping(value="/index")
    public ResponseEntity<?> index() throws Exception {
        try {
            List<Board> newReviewList = boardService.newReviewList();
            List<Board> crlist = boardService.crlist();
            List<Board> newprlist = boardService.newprlist();
            List<Board> prlist = boardService.prlist();

            Map<String, Object> map = new HashMap<>();
            map.put("newReviewList", newReviewList);
            map.put("crlist", crlist);
            map.put("newprlist", newprlist);
            map.put("prlist", prlist);

            return new ResponseEntity<>(map, HttpStatus.OK);
            
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 캠핑 리뷰 읽기
    @GetMapping(value="/crread/{reviewNo}")
    public ResponseEntity<?> crread(@PathVariable int reviewNo) throws Exception {
        try {
            Board crread = boardService.crread(reviewNo);
            return new ResponseEntity<>(crread, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 캠핑 리뷰 등록
    @PostMapping(value="/crinsert")
    public ResponseEntity<?> crinsertPro(@RequestBody Board board) throws Exception {
        try {
            int result = boardService.crinsert(board);
            if (result > 0)
                return new ResponseEntity<>("게시글 등록 완료", HttpStatus.CREATED);
            else
                return new ResponseEntity<>("게시글 등록 실패", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 캠핑 리뷰 삭제
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

    // 캠핑 리뷰 수정
    @PostMapping(value="/crupdate")
    public ResponseEntity<?> crupdatePro(@RequestBody Board board) throws Exception {
        try {
            int result = boardService.crupdate(board);
            if (result > 0)
                return new ResponseEntity<>("게시글 수정 완료", HttpStatus.OK);
            else
                return new ResponseEntity<>("게시글 수정 실패", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상품 리뷰 읽기
    @GetMapping(value="/prread/{prNo}")
    public ResponseEntity<?> prread(@PathVariable int prNo) throws Exception {
        try {
            Board prread = boardService.prread(prNo);
            return new ResponseEntity<>(prread, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상품 리뷰 등록
    @PostMapping(value="/prinsert")
    public ResponseEntity<?> prinsertPro(@RequestBody Board board) throws Exception {
        try {
            int result = boardService.prinsert(board);
            if (result > 0)
                return new ResponseEntity<>("게시글 등록 완료", HttpStatus.CREATED);
            else
                return new ResponseEntity<>("게시글 등록 실패", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상품 리뷰 삭제
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

    // 상품 리뷰 수정
    @PostMapping(value="/prupdate")
    public ResponseEntity<?> prupdatePro(@RequestBody Board board) throws Exception {
        try {
            int result = boardService.prupdate(board);
            if (result > 0)
                return new ResponseEntity<>("게시글 수정 완료", HttpStatus.OK);
            else
                return new ResponseEntity<>("게시글 수정 실패", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}