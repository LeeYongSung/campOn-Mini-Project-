package com.camp.campon.apis;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
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

        String filePath = "";
        InputStream fis = null;
        if( file.contains("img/")) {
            // 프로젝트 내의 이미지
            filePath = "static/" + file;

            // 클래스 패스 상의 리소스로부터 InputStream 얻기
            Resource resource = new ClassPathResource(filePath);
            fis = resource.getInputStream();
        }

        if( file.contains(":/") ) {
            // 파일 시스템 이미지 (window)
            File fileObj = new File(file);
            fis = new FileInputStream(fileObj);
        }

        ServletOutputStream sos =  response.getOutputStream();
        FileCopyUtils.copy(fis, sos);

    }
}
