package com.camp.campon.apis;

import java.io.FileInputStream;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class HomeApiController {
    @GetMapping(value="/img", params="file")
    public void img(@RequestParam("file") String file, HttpServletResponse response) throws Exception  {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); 
        headers.add("Content-Disposition", "inline;"); 
        String filePath = file;
        FileInputStream fis = new FileInputStream(filePath);
        ServletOutputStream sos =  response.getOutputStream();
        FileCopyUtils.copy(fis, sos);
    }
}
