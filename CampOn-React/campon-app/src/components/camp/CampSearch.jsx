import React, { useState } from 'react'
import $ from 'jquery'

const CampSearch = ({camptypeList}) => {
    const [keyword, setKeyword] = useState(''); //
    const [searchDate, setSearchDate] = useState(''); //
    const [regionNo, setRegionNo] = useState(0); //
    const [campTypeNos, setCampTypeNos] = useState(new Set);
    const [regionName, setRegionName] = useState('지역'); //
    const [checked, setChecked] = useState(false);

    $('#region').on('click', function() {
        $('.regionBox').fadeIn();
    })

    $('.reginon_close').on('click', function() {
        $('.regionBox').fadeOut();
    })
  
    const regionClick = (e) => {
        
        switch (e.target.value) {
            case '서울'     : setRegionNo(1); break;
            case '인천'     : setRegionNo(2); break;
            case '경기도'   : setRegionNo(3); break;
            case '강원도'   : setRegionNo(4); break;
            case '전라도'   : setRegionNo(5); break;
            case '충청도'   : setRegionNo(6); break;
            case '경상도'   : setRegionNo(7); break;
            case '제주도'   : setRegionNo(8); break;
        }
        setRegionName(e.target.value);
        
        $('.regionBox').fadeOut();
    }

    const handleKeyword = (e) => {
        setKeyword(e.target.value)
    }
    const handleDate = (e) => {
        setSearchDate(e.target.value)
    }

    // const checkHandled = (e) => {
    //     setChecked(!checked);
    //     handleType(e.target.value, checked);
    // }

    // const handleType = (value, checked) => {
    //     if (checked) {
    //         campTypeNos.add(value) 
    //         setCampTypeNos(campTypeNos)
    //       } else if (!checked) {
    //         campTypeNos.delete(value)
    //         setCampTypeNos(campTypeNos)
    //       }
    // }

    console.log("keyword : " + keyword)
    console.log("searchDate : " + searchDate)
    console.log("regionNo : " + regionNo)
    console.log("campTypeNos : " + campTypeNos)

    
    const search = () => {

    }

    
  return (
    <div class="container-sm search_box">
            <div class="form-floating my-2">
                <input type="text" id="keyword" name="keyword" class="form-control" placeholder="검색명" onChange={handleKeyword}/>
                <label for="keyword">검색명</label>
            </div>
            <div class="w-100 d-flex justify-content-between">
                <div class="form-floating w-100 me-1">
                    <input type="date" class="form-control" id="searchDate" name="searchDate" onChange={handleDate}/>
                </div>
                <div class="form-floating w-100 ms-1">
                    <input type="hidden" id="regionNo" name="regionNo" value="0"/>
                    <input type="button" class="form-control" id="region" value={regionName}/>
                </div>
            </div>
            <div class="w-100 d-flex justify-content-between my-4">
                <span>캠핑종류</span>
                <input type="hidden" name="campTypeNos" />
                {/* {camptypeList.map((camp) => (
                    <>
                    <input type="checkbox" id="autocamping" name="campTypeNos" checked={checked} class="form-control" value={camp.campTypeNo} onChange={checkHandled}/>
                    <label for="autocamping"><span></span>{camp.campTypeName}</label>
                    </>
                ))}  */}
                <input type="checkbox" id="autocamping" name="campTypeNos" checked={checked} class="form-control" value="1" />
                <label for="autocamping"><span></span>오토캠핑</label>

                <input type="checkbox" id="glamping" name="campTypeNos" checked={checked} class="form-control" value="2" />
                <label for="glamping"><span></span>글램핑</label>

                <input type="checkbox" id="caravan" name="campTypeNos" checked={checked} class="form-control" value="3" />
                <label for="caravan"><span></span>카라반</label>

                <input type="checkbox" id="pension" name="campTypeNos" checked={checked} class="form-control" value="4" />
                <label for="pension"><span></span>펜션</label>

                <input type="checkbox" id="campnik" name="campTypeNos" checked={checked} class="form-control" value="5" />
                <label for="campnik"><span></span>캠프닉</label>
            </div>
            <div class="form-floating mb-3">
                <button type="submit"  class="btn btn-outline-secondary btn-lg w-100 py-3 rounded-0" >검색</button>
            </div>
        <div class="regionBox none position-fixed">
        <div>
            <a href="javascript:;" class="reginon_close w-100 d-block text-center px-3 py-1 bg-danger">닫기</a>
        </div>
        <div>
            <button class="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="서울" onClick={regionClick} > 서울 </button>  
        </div>
        <div>
            <button class="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="인천" onClick={regionClick} > 인천 </button>
        </div>
        <div>
            <button class="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="경기도" onClick={regionClick} > 경기도 </button>
        </div>
        <div>
            <button class="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="강원도" onClick={regionClick} > 강원도 </button>
        </div>
        <div>
            <button class="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="전라도" onClick={regionClick} > 전라도 </button>
        </div>
        <div>
            <button class="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="충청도" onClick={regionClick} > 충청도 </button>
        </div>
        <div>
            <button class="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="경상도" onClick={regionClick} > 경상도 </button>
        </div>
        <div>
            <button class="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="제주도" onClick={regionClick} > 제주도 </button>
        </div>
    </div>
    </div>
  )
}

export default CampSearch