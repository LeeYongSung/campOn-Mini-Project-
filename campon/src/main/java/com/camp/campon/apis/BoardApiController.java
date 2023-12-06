package com.camp.campon.apis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.camp.campon.dto.Board;
import com.camp.campon.service.BoardService;
import com.camp.campon.service.UserService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Slf4j
@RestController
@RequestMapping("/api/board")
public class BoardApiController {

    @Autowired
    private BoardService boardService;

    // 게시글 등록
    @PostMapping(value = "/crinsert")
    public ResponseEntity<?> crinsertPro(@RequestBody Board board) throws Exception {
        int result = boardService.crinsert(board);
        try {
            if (result > 0)
                return new ResponseEntity<>("게시글 등록 완료", HttpStatus.CREATED);
            else
                return new ResponseEntity<>("게시글 등록 실패", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 게시글 수정(읽기)
    @GetMapping(value = "/crupdate/{no}")
    public ResponseEntity<?> crupdate(@PathVariable Integer no) throws Exception {
        try {
            Board board = boardService.crread(no);
            return new ResponseEntity<>(board, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 게시글 수정(수정)
    @PutMapping(value = "/crupdate")
    public ResponseEntity<?> crupdatePro(@RequestBody Board board) throws Exception {
        int result = boardService.crupdate(board);
        try {
            if (result > 0)
                return new ResponseEntity<>("게시글 수정 완료", HttpStatus.CREATED);
            else
                return new ResponseEntity<>("게시글 수정 실패", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 게시글 읽기
    @GetMapping(value = "/crread/{no}")
    public ResponseEntity<?> crread(@PathVariable Integer no) throws Exception {
        try {
            Board board = boardService.crread(no);
            return new ResponseEntity<>(board, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 게시글 삭제
    @DeleteMapping(value = "/crread")
    public ResponseEntity<?> crdelete(@PathVariable Integer no) throws Exception {
        int result = boardService.crdelete(no);
        try {
            if (result > 0)
                return new ResponseEntity<>("게시글 삭제 완료", HttpStatus.CREATED);
            else
                return new ResponseEntity<>("게시글 삭제 실패", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
