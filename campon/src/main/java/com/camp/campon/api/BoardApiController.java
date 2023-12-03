package com.camp.campon.api;

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
import org.springframework.web.bind.annotation.RequestBody;


@Slf4j
@RestController
@RequestMapping("/board")
public class BoardApiController {

    @Autowired
    private BoardService boardService;
    
    @Autowired
    private UserService userService;

    @PostMapping(value="/boardinsert")
    public ResponseEntity<?> create(@RequestBody Board board) {
        int result = boardService.crinsert(board);
        if (result > 0)
        try {
            return new ResponseEntity<>(body:"게시글 등록완료", HttpStatus.CREATED);
            else
            return new ResponseEntity<>(body:"게시글 등록", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity
        }
        
        return entity;
    }
    
    
}
