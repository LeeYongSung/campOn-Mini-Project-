import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import * as admins from '../../apis/admin'
import { useEffect } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk'

const AdminCampAdd = () => {
    const navigate = useNavigate();
    const userNo = 3; //하드코딩
    const [campName, setcampName] = useState('')
    const [file, setfile] = useState(null)
    const [campAddress, setcampAddress] = useState('')
    const [placeName, setplaceName] = useState('')
    const [regionNo, setregionNo] = useState('')
    const [environmentTypeNo, setenvironmentTypeNo] = useState('')
    const [campTel, setcampTel] = useState('')
    // const [facilityTypeNo, setfacilityTypeNo] = useState('')
    const [facilityTypeNoList, setfacilityTypeNoList] = useState([])
    const [campOpen, setcampOpen] = useState('')
    const [campClose, setcampClose] = useState('')
    const [campIntroduction, setcampIntroduction] = useState('')
    const [layoutFile, setlayoutFile] = useState(null)
    const [campCaution, setcampCaution] = useState('')

    const [loading, error] = useKakaoLoader({
        appkey: "66c31d7d2fe00c73f61774f2c881769e",
        libraries: ["clusterer", "drawing", "services"],
    })

    // 카카오 맵 start
    let map;
    const [state, setState] = useState({

        center: { lat: 37.49676871972202, lng: 127.02474726969814 },
        isPanto: true,
        
      });

    const [searchAddress, SetSearchAddress] = useState();

    
    const SearchMap = () => {
        const geocoder = new window.kakao.maps.services.Geocoder();
        
        let callback = function(result, status) {                       
            if (status === window.kakao.maps.services.Status.OK) {
                const newSearch = result[0]                             
                console.log(newSearch.x)
                console.log(newSearch.y)
                setState({
                    center: { lat: newSearch.y, lng: newSearch.x }
                })
            }
        };
        geocoder.addressSearch(`${searchAddress}`, callback);
    }
    
    const handleSearchAddress = (e) => {
        SetSearchAddress(e.target.value)
    }

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        map = new window.kakao.maps.Map(container, options);
    }, []); 

    useEffect(() => {
        if (!map) return;
    
        const newCenter = new window.kakao.maps.LatLng(state.center.lat, state.center.lng);
    
        map.setCenter(newCenter);
    }, [state.center, map]);
    // 카카오 맵 end

    const handleset = function (e) {
        switch (e.target.name) {
            case "campName": setcampName(e.target.value);
                break;
            case "file": setfile(e.target.files);
                break;
            case "campAddress": setcampAddress(e.target.value)
                break;
            case "placeName": setplaceName(e.target.value)
                break;
            case "regionNo": setregionNo(e.target.value)
                break;
            case "environmentTypeNo": setenvironmentTypeNo(e.target.value)
                break;
            case "campOpen": setcampOpen(e.target.value)
                break;
            case "campClose": setcampClose(e.target.value)
                break;
            case "campTel": setcampTel(e.target.value)
                break;
            case "campCaution": setcampCaution(e.target.value)
                break;
            case "campIntroduction": setcampIntroduction(e.target.value)
                break;
            case "layoutFile": setlayoutFile(e.target.files)
                break;
        }
    }


    const handlefac = (e) => {
        // const updateFacList = 
        //     e.target.checked ? [...facilityTypeNoList, value] : facilityTypeNoList.filter((facility)=>{facility !== e.target.value}) 
        setfacilityTypeNoList(e.target.checked ? [...facilityTypeNoList, e.target.value] : facilityTypeNoList.filter((facility) => facility !== e.target.value))
        //이렇게 하면 안됨 setfacilityTypeNoList(e.target.checked ? [...facilityTypeNoList, e.target.value] : facilityTypeNoList.filter((facility)=>{facility !== e.target.value}))
    }

    //등록 버튼
    const formSubmit = async () => {
        console.log(state.center.lat);
        console.log(state.center.lng);
        const formData = new FormData();
        console.log(campAddress)
        console.log(campTel)
        console.log(placeName)
        console.log(regionNo)
        formData.append("campName", campName)
        if (file) {
            for (let i = 0; i < file.length; i++) {
                formData.append(`file[${i}]`, file[i])
            }
        }
        formData.append("campAddress", campAddress)
        formData.append("campTel", campTel)
        formData.append("placeName", placeName)
        formData.append("regionNo", regionNo)
        formData.append("environmentTypeNo", environmentTypeNo)
        formData.append("campOpen", campOpen)
        formData.append("campClose", campClose)
        formData.append("campIntroduction", campIntroduction)
        formData.append("campCaution", campCaution)
        formData.append("userNo", userNo)
        formData.append("facilityTypeNoList", facilityTypeNoList)
        formData.append("campLatitude", state.center.lat)
        formData.append("campLongitude", state.center.lng)
        if (layoutFile) {
            for (let i = 0; i < layoutFile.length; i++) {
                formData.append(`layoutFile`, layoutFile[i])
            }
        }
        const headers = {
            headers: { "Content-Type": "multipart/form-data" }
        }
        let camp = {
            campName: campName,
            file: file,
            campAddress: campAddress,
            placeName: placeName,
            regionNo: regionNo,
            environmentTypeNo: environmentTypeNo,
            campTel: campTel,
            campOpen: campOpen,
            campClose: campClose,
            campIntroduction: campIntroduction, 
            userNo: userNo, 
            facilityTypeNoList : facilityTypeNoList, 
            campCaution : campCaution,
            campLatitude : state.center.lat,
            campLongitude : state.center.lng
        };
        console.log(camp, 'camp는?')
        try {
            const response = await admins.campAdd(formData, headers)
            alert('캠핑장 등록 완료');
            console.log(response.data);
            navigate('/admin/campproductlist')
        } catch (error) {
            console.log(error)
        }

    }
      
    return (
        <>
            <div className="container-sm">
                <div className="w-100 text-center my-3">
                    <h5>캠핑장 등록</h5>
                </div>
                <input type="hidden" name="userNo" id="userNo" value={userNo} />
                <div className="form-floating my-2">
                    <input type="text" id="campName" name="campName" className="form-control" onChange={handleset} />
                    <label htmlFor="campName">캠핑장명</label>
                </div>
                <div className="form-floating">
                    <input type="file" id="file" name="file" className="form-control" multiple onChange={handleset} />
                    <label htmlFor="file">캠핑장이미지</label>
                </div>
                <div className="campadd_box d-flex justify-content-around w-100 my-1">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="form-floating my-2">
                    <input type="text" id="campAddress" name="campAddress" className="form-control" onChange={handleset} />
                    <label htmlFor="campAddress">캠핑장주소</label>
                </div>
                <div className="form-floating">
                    <input type="text" id="placeName" name="placeName" className="form-control" onChange={handleset} />
                    <label htmlFor="placeName">장소명을 입력해 주세요</label>
                </div>
                <div className="form-floating my-2 d-flex">
                    <input type="text" name="campLocation" id="campLocation" className="form-control" onChange={handleSearchAddress} />
                    <label htmlFor="campLocation">지도검색을 위한 주소를 입력해주세요</label>
                    <button type="button" onClick={SearchMap}>검색</button>
                </div>

                {/* <input type="hidden" id="campLatitude" name="campLatitude" placeholder="위도(latitude)" value={campLatitude} />
                <input type="hidden" id="campLongitude" name="campLongitude" placeholder="경도(longitude)" value={campLongitude} /> */}
                {/* api 지도 출력 부분 */}
                <div id="map" style={{ width: "100%", height: "600px" }}>
                    {/* <Map
                        center={{ lat: 33.5563, lng: 126.79581 }}
                        style={{ width: "100%", height: "360px" }}
                    >
                        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                            <div style={{ color: "#000" }}>Hello World!</div>
                        </MapMarker>
                    </Map> */}

                    <Map // 지도를 표시할 Container
                        center={state.center}
                        isPanto={state.isPanto}
                        style={{
                            // 지도의 크기
                            width: "100%",
                            height: "450px",
                        }}
                        level={3} // 지도의 확대 레벨
                    ></Map>
                </div>

                <input type="hidden" id="campLatitude" name="campLatitude" placeholder="위도(latitude)" />
                <input type="hidden" id="campLongitude" name="campLongitude" placeholder="경도(longitude)" />
                {/* <div id="map" style={{ width: "100%", height: "600px" }}> */}

                {/* 지도 표시 */}
                <Map id="map" center={state.center} style={{ width: "100%", height: "600px", }} level={3}>
                    {/* 마커표시 */}
                    <MapMarker position={{ lat: state.center.lat, lng: state.center.lng, }} />
                </Map>
                
                {/* </div> */}
                <div className="form-floating my-2">
                    <input type="text" id="campTel" name="campTel" className="form-control" onChange={handleset} />
                    <label htmlFor="campTel">캠핑장 연락처</label>
                </div>
                <div className="form-floating my-2">
                    <input type="file" id="layoutFile" name="layoutFile" className="form-control" onChange={handleset} />
                    <label htmlFor="layoutFile">캠핑장 배치도</label>
                </div>
                <div className="form-floating my-2">
                    <input type="text" id="campCaution" name="campCaution" className="form-control" onChange={handleset} />
                    <label htmlFor="campCaution">매너타임</label>
                </div>
                <div className="w-100 my-2 d-flex justify-content-between">
                    <div>
                        <span>지역</span>
                    </div>
                    <div>
                        <input type="radio" id="seoul" name="regionNo" value="1" onChange={handleset} />
                        <label htmlFor="seoul"><span></span>서울</label>
                        <input type="radio" id="inchon" name="regionNo" value="2" onChange={handleset} />
                        <label htmlFor="inchon"><span></span>인천</label>
                        <input type="radio" id="gyunggi" name="regionNo" value="3" onChange={handleset} />
                        <label htmlFor="gyunggi"><span></span>경기도</label>
                        <input type="radio" id="gangwon" name="regionNo" value="4" onChange={handleset} />
                        <label htmlFor="gangwon"><span></span>강원도</label>
                        <input type="radio" id="junra" name="regionNo" value="5" onChange={handleset} />
                        <label htmlFor="junra"><span></span>전라도</label>
                        <input type="radio" id="choung" name="regionNo" value="6" onChange={handleset} />
                        <label htmlFor="choung"><span></span>충청도</label>
                        <input type="radio" id="gyung" name="regionNo" value="7" onChange={handleset} />
                        <label htmlFor="gyung"><span></span>경상도</label>
                        <input type="radio" id="jeju" name="regionNo" value="8" onChange={handleset} />
                        <label htmlFor="jeju"><span></span>제주도</label>
                    </div>
                </div>
                <div className="w-100 my-2">
                    <span>환경</span>
                    <input type="radio" id="mountain" name="environmentTypeNo" value="1" onChange={handleset} />
                    <label htmlFor="mountain"><span></span>산</label>
                    <input type="radio" id="ocean" name="environmentTypeNo" value="2" onChange={handleset} />
                    <label htmlFor="ocean"><span></span>바다</label>
                    <input type="radio" id="Valley" name="environmentTypeNo" value="3" onChange={handleset} />
                    <label htmlFor="Valley"><span></span>계곡/강/호수</label>
                    <input type="radio" id="champaign" name="environmentTypeNo" value="4" onChange={handleset} />
                    <label htmlFor="champaign"><span></span>평야</label>
                    <input type="radio" id="downtown" name="environmentTypeNo" value="5" onChange={handleset} />
                    <label htmlFor="downtown"><span></span>도심</label>
                </div>
                <div className="w-100 my-2">
                    <label htmlFor="facillity">기본시설</label>
                    <input type="checkbox" id="1" name="facilityTypeNo" value="1" onChange={handlefac} />
                    <label htmlFor="1"><span></span>화장실</label>
                    <input type="checkbox" id="2" name="facilityTypeNo" value="2" onChange={handlefac} />
                    <label htmlFor="2"><span></span>샤워실</label>
                    <input type="checkbox" id="3" name="facilityTypeNo" value="3" onChange={handlefac} />
                    <label htmlFor="3"><span></span>개수대</label>
                    <input type="checkbox" id="4" name="facilityTypeNo" value="4" onChange={handlefac} />
                    <label htmlFor="4"><span></span>매정</label>
                    <input type="checkbox" id="5" name="facilityTypeNo" value="5" onChange={handlefac} />
                    <label htmlFor="5"><span></span>바베큐장</label>
                    <input type="checkbox" id="6" name="facilityTypeNo" value="6" onChange={handlefac} />
                    <label htmlFor="6"><span></span>전기차충전소</label>
                    <input type="checkbox" id="7" name="facilityTypeNo" value="7" onChange={handlefac} />
                    <label htmlFor="7"><span></span>주차장</label>
                </div>
                <div className="form-floating py-2">
                    <input type="date" className="form-control" id="campOpen" name="campOpen" onChange={handleset} />
                    <label htmlFor="campOpen">오픈날짜</label>
                </div>
                <div className="form-floating py-2">
                    <input type="date" className="form-control" id="campClose" name="campClose" onChange={handleset} />
                    <label htmlFor="campClose">클로즈날짜</label>
                </div>
                <div className="form-floating py-2">
                    <textarea name="campIntroduction" id="campIntroduction" className="form-control" onChange={handleset}>

                    </textarea>
                    <label htmlFor="campIntroduction">캠핑장 소개</label>
                </div>
                <div>
                    <input type="button" value="캠핑장등록" className="btn btn-warning btn-lg w-100 my-3 py-3" onClick={formSubmit} />
                </div>
            </div >
        </>
    )
}

export default AdminCampAdd