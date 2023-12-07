import React, { useEffect } from 'react'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import $ from 'jquery'

const CampProductintro = ({productsimg,productsenvironment,productsreserve,productsfacility,productsproducts}) => {
    $('#camp_info_more').on('click', function(){
        $('.camp_info').css('height', 'auto')
    })

    const Kakao = ((campLatitude, campLongitude) => {
        if(window.kakao){
        const lat = campLatitude     // 위도
        const lon = campLongitude    // 경도
        console.log("위도 : " + lat);
        console.log("경도 : " + lon);
            
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
            
        // 지도를 생성한다
        const map = new window.kakao.maps.Map(container, options); 
            
        // 지도 타입 변경 컨트롤을 생성한다
        const mapTypeControl = new window.kakao.maps.MapTypeControl();
            
        // 지도 상단 우측에 타입 변경 컨트롤을 추가한다
        map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT)
            
        // 지도에 확대/축소 컨트롤을 생성한다
        const zoomControl = new window.kakao.maps.ZoomControl();
            
        // 지도의 우측에 확대/축소 컨트롤을 추가한다
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)
            
        // 지도에 마커를 생성하고 표시한다
        const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(lat, lon), // 마커의 좌표
            map: map                                    // 마커를 표시할 지도 객체
        });
                
        // 지도 클릭 이벤트를 등록한다 (좌클릭 : click, 우클릭 : rightclick, 더블클릭 : dblclick)
        window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
            console.log('지도에서 클릭한 위치의 좌표는 ' + mouseEvent.latLng.toString() + ' 입니다.');
                    
            let position = document.getElementById('position')            
            // 위도,경도 정보
            let latlng = mouseEvent.latLng
            let lat = latlng.getLat()       // 위도
            let lng = latlng.getLng()       // 경도
            let msg = `위도 : ${lat}, 경도 : ${lng}`
                   
            position.innerHTML = msg
        });	
                    
                    
        // 커스텀 오버레이를 생성하고 지도에 표시한다
        const campName = "[[${productsproducts.campName}]]"
        const customOverlay = new window.kakao.maps.CustomOverlay({
            map: map,
            content: `<div class="my-place">${campName}</div>`, 
            position: new window.kakao.maps.LatLng(lat, lon), // 커스텀 오버레이를 표시할 좌표
            xAnchor: 0.5, // 컨텐츠의 x 위치
            yAnchor: 0 // 컨텐츠의 y 위치
        });
                        
                        
        //로드뷰를 표시할 div
        var roadviewContainer = document.getElementById('roadview'); 
                        
        var roadviewClient = new window.kakao.maps.RoadviewClient()
        var roadview = new window.kakao.maps.Roadview(roadviewContainer)
        var position = new window.kakao.maps.LatLng(lat, lon)
                            
        // 로드뷰 파노라마 ID 변화 이벤트를 등록한다
        window.kakao.maps.event.addListener(roadview, 'panoid_changed', function() {
            console.log(roadview.getPanoId());
        });
                                
        roadviewClient.getNearestPanoId(position, 50, function(panoId) {
            roadview.setPanoId(panoId, position);
        });
        }else{
            console.log('안되뮤ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ')
        }
    })


    useEffect(() => {
        console.log(productsproducts)
        console.log(productsproducts.campLatitude)
        Kakao(productsproducts.campLatitude, productsproducts.campLongitude);
        }, [])
            
    return (
        <div>
            <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    {productsimg.map((img) => (
                        <SwiperSlide><img src={img.cpiUrl} /></SwiperSlide>
                    ))}
            </Swiper>

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
                <div className="position-absolute w-100 bottom-0 text-center"><a href="javascript:;" className="w-100 d-block" id="camp_info_more">더보기<span className="material-symbols-outlined expandmore">expand_more</span><span className="material-symbols-outlined expandless none">expand_less</span></a></div>
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

                <input type="text" id="latitude" value={productsproducts.campLatitude}/>
                <input type="text" id="longitude" value={productsproducts.campLongitude}/>
                <div id="map" style={{width:"100%", height:"400px"}}>
                    {/*api 지도 출력 부분*/}
                </div>
            </div>
            <div className="container-sm w-100 py-2 border-bottom">
                <div><h5>캠핑장배치도</h5></div>
                <div><img src={productsproducts.campLayout} className="w-100"/></div>
            </div>
        </div>
    )
}

export default CampProductintro