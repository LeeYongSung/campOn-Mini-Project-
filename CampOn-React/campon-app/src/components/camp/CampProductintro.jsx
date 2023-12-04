import React from 'react'

const CampProductintro = ({productsimg,productsenvironment,productsreserve,productsfacility,productsproducts}) => {
  return (
    <div>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            {productsimg.map((img) => (
              <img src={`/img?file=${img.cpiUrl}`}/>
            ))}
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="py-2 ps-2">
        {productsenvironment.map((type) => (
              <span>{type.environmentTypeName}</span>
        ))}
      </div>
      <div className="pb-2 border-bottom ps-2">
          <h4>{productsproducts.campName}</h4>
      </div>
      <div className="border-bottom border-top">
          <div className="container-sm py-3">
              <div className="py-1"><h5>기본정보</h5></div>
              <div className="py-1 d-flex justify-content-between">
                  <div>주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소 : </div>
                  <div>
                      <span>{productsproducts.campAddress}</span>
                  </div>
              </div>
              <div className="py-1 d-flex justify-content-between">
                  <div>캠핑장번호 : </div>
                  <div>
                      <span>{productsproducts.campTel}</span>
                  </div>
              </div>
              <div className="py-1 d-flex justify-content-between">
                  <div>오&nbsp;&nbsp;&nbsp;픈&nbsp;&nbsp;&nbsp;일 : </div>
                  <div>
                      <span>{productsproducts.campOpen}</span>
                  </div>
              </div>
              <div className="py-1 d-flex justify-content-between">
                  <div>클&nbsp;로&nbsp;즈&nbsp;일 : </div>
                  <div>
                      <span>{productsproducts.campClose}</span>
                  </div>
              </div>
              <div className="py-1 d-flex justify-content-between">
                  <div>매&nbsp;너&nbsp;타&nbsp;임 : </div>
                  <div>
                      <span>{productsproducts.campCaution}</span>
                  </div>
              </div>
              <div className="w-100 text-center py-3 bg-warning mt-3"> 그동안 <span>{productsreserve}</span>명이 다녀갔습니다.</div>
          </div>
      </div>
      <div className="camp_info container-sm py-3 w-100 position-relative border-bottom">
          <div>
              <h5>캠핑장소개</h5>
          </div>
          <span>{productsproducts.campIntroduction}</span>
          <div className="position-absolute w-100 bottom-0 text-center"><a href="javascript:;" className="w-100 d-block" id="camp_info_more"/>더보기<span className="material-symbols-outlined expandmore">expand_more</span><span className="material-symbols-outlined expandless none">expand_less</span></div>
      </div>
      <div className="container-sm campfacility w-100 py-2 border-bottom">
        <div className="pt-2"><h5>캠핑장시설</h5></div>
          <div className="d-flex justify-content-around">
            {productsfacility.map((facility) => (
                  <ul className="text-center">
                      <li className="facilitytypeImg_box"><img src={facility.facilitytypeImg} alt="시설물사진"/></li>
                      <li className="facilitytypeName_box"><span>{facility.facilitytypeName}</span></li>
                  </ul>
            ))}
          </div>
      </div>
      <div className="container-sm w-100 py-2 border-bottom">
          <div className="pt-2"><h5>캠핑장 위치</h5></div>

          <input type="hidden" id="latitude" value={productsproducts.campLatitude}/>
          <input type="hidden" id="longitude" value={productsproducts.campLongitude}/>
          <div id="map" style={{width:"100%", height:"400px"}}>
              {/*api 지도 출력 부분*/}
          </div>
      </div>
      <div className="container-sm w-100 py-2 border-bottom">
          <div><h5>캠핑장배치도</h5></div>
          <div><img src={`/img?file=${productsproducts.campLayout}`} className="w-100"/></div>
      </div>
    </div>
  )
}

export default CampProductintro