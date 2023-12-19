import React, { useState } from 'react'
import $ from 'jquery'

const CampSearch = ({onSearch}) => {
    const [keyword, setKeyword] = useState(''); //
    const [searchDate, setSearchDate] = useState(''); //
    const [regionNo, setRegionNo] = useState(0); //
    const [campTypeNos, setCampTypeNos] = useState(new Set);
    const [regionName, setRegionName] = useState('지역'); //

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

    const typeAdd = (e) => {
        if(!e.target.checked){
            campTypeNos.delete(e.target.value)
            setCampTypeNos(campTypeNos)
        }else{
            campTypeNos.add(e.target.value)
            setCampTypeNos(campTypeNos)
        }
    }

    // const onSubmit = () => {
    //     const formData = new FormData();
    //     formData.append('keyword', keyword);
    //     formData.append('searchDate', searchDate);
    //     formData.append('regionNo', regionNo);
    //     formData.append('campTypeNos', campTypeNos);

    //     console.log(formData)
    //     // onSearch(keyword, searchDate, regionNo, campTypeNos)

    //     const headers = {
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         }
    //     };

    //     onSearch(formData, headers)
    // }
    const onSubmit = () => {
        const formData = new FormData();
        formData.append('keyword', keyword);
        formData.append('searchDate', searchDate);
        formData.append('regionNo', regionNo);
        Array.from(campTypeNos).forEach(campTypeNo => {
            formData.append('campTypeNos', campTypeNo);
        });
    
        // console.log(formData)
        // onSearch(keyword, searchDate, regionNo, campTypeNos)
    
        // const headers = {
        //     headers : {
        //         'Content-Type' : 'application/json'
        //     }
        // };
    
        // onSearch(formData, headers)
        onSearch(keyword, searchDate, regionNo, campTypeNos)
    }


    // console.log("keyword : " + keyword)
    // console.log("searchDate : " + searchDate)
    // console.log("regionNo : " + regionNo)
    // console.log("campTypeNos : " + campTypeNos)

    
  return (
    <>
    <div className="container-sm search_box">
            <div className="form-floating my-2">
                <input type="text" id="keyword" name="keyword" className="form-control" placeholder="검색명" onChange={handleKeyword}/>
                <label htmlFor="keyword">검색명</label>
            </div>
            <div className="w-100 d-flex justify-content-between">
                <div className="form-floating w-100 me-1">
                    <input type="date" className="form-control" id="searchDate" name="searchDate" onChange={handleDate}/>
                </div>
                <div className="form-floating w-100 ms-1">
                    <input type="hidden" id="regionNo" name="regionNo" value="0"/>
                    <input type="button" className="form-control" id="region" value={regionName}/>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-between my-4">
                <span>캠핑종류</span>
                <input type="hidden" name="campTypeNos" />
                <input type="checkbox" id="autocamping" name="campTypeNos" className="form-control" value="1" onChange={typeAdd}/>
                <label htmlFor="autocamping"><span></span>오토캠핑</label>

                <input type="checkbox" id="glamping" name="campTypeNos" className="form-control" value="2" onChange={typeAdd}/>
                <label htmlFor="glamping"><span></span>글램핑</label>

                <input type="checkbox" id="caravan" name="campTypeNos" className="form-control" value="3" onChange={typeAdd}/>
                <label htmlFor="caravan"><span></span>카라반</label>

                <input type="checkbox" id="pension" name="campTypeNos" className="form-control" value="4" onChange={typeAdd}/>
                <label htmlFor="pension"><span></span>펜션</label>

                <input type="checkbox" id="campnik" name="campTypeNos" className="form-control" value="5" onChange={typeAdd}/>
                <label htmlFor="campnik"><span></span>캠프닉</label>
            </div>
            <div className="form-floating mb-3">
                <button type="text"  className="btn btn-outline-secondary btn-lg w-100 py-3 rounded-0" onClick={() => onSubmit()} >검색</button>
            </div>
    </div>
        <div className="regionBox none position-fixed">
            <div>
                <a href="javascript:;" className="reginon_close w-100 d-block text-center px-3 py-1 bg-danger">닫기</a>
            </div>
            <div>
                <button className="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="서울" onClick={regionClick} > 서울 </button>  
            </div>
            <div>
                <button className="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="인천" onClick={regionClick} > 인천 </button>
            </div>
            <div>
                <button className="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="경기도" onClick={regionClick} > 경기도 </button>
            </div>
            <div>
                <button className="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="강원도" onClick={regionClick} > 강원도 </button>
            </div>
            <div>
                <button className="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="전라도" onClick={regionClick} > 전라도 </button>
            </div>
            <div>
                <button className="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="충청도" onClick={regionClick} > 충청도 </button>
            </div>
            <div>
                <button className="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="경상도" onClick={regionClick} > 경상도 </button>
            </div>
            <div>
                <button className="w-100 region_btn w-100 py-3 text-center d-block border my-2" value="제주도" onClick={regionClick} > 제주도 </button>
            </div>
        </div>  
    </>
  )
}

export default CampSearch