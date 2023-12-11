package com.camp.campon.dto;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class Ad {
    int adNo;
    int campNo;
    String adImg;
    MultipartFile adImgFile;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date adStart;
    //String adStart;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date adEnd;
   // String adEnd;
    int adCheck;
    Date regDate;
    Date updDate;
    String campName;

}
