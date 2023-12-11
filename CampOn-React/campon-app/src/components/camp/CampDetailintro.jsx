import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CampDetailintro = ({detailimg, detail}) => {
  return (
    <form>
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            {detailimg.map((img) => (
                <SwiperSlide><img src={img.cpdiUrl}/></SwiperSlide>
            ))}
        </Swiper>
        <div className="w-100 campdetail_productBox pt-2">
            <ul>
                <li className="w-100 text-center">
                    <span>{detail.campName}</span>
                </li>
                <li className="w-100 text-center fs-4">
                    <span>{detail.cpdtName}</span>
                </li>
            </ul>
        </div>
        <div className="container-sm w-100 campdetail_basic py-3 border-bottom">
            <div className="container-sm border d-flex justify-content-around text-center py-3">
                <ul>
                    <li className="pb-1">
                        <span>유형</span>
                    </li>
                    <li>
                        <span>{detail.campTypeName}</span>
                    </li>
                </ul>
                <ul>
                    <li className="pb-1">
                        <span>크기</span>
                    </li>
                    <li>
                        <span>{detail.cpdtSize}</span>
                    </li>
                </ul>
                <ul>
                    <li className="pb-1">
                        <span>인원</span>
                    </li>
                    <li>
                        <span>{detail.cpdtNop}</span>
                    </li>
                </ul>
                <ul>
                    <li className="pb-1">
                        <span>가격</span>
                    </li>
                    <li>
                        <span>{detail.cpdtPrice}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w-100 py-3 border-bottom">
            <div className="container-sm">
                <div>
                    <h5>캠핑장 상품 소개</h5>
                </div>
                <div className="campdetail_introduction">
                    <span>{detail.cpdtIntroduction}</span>
                </div>
            </div>
        </div>
        <div className="w-100 my-3">
            <Link to={`/api/camp/reservate/${detail.cpdtNo}`}>
            <buton type="button" className="btn btn-lg w-100 reservate_btn" onclick="reservate()">
                예약하기
            </buton>
            </Link>
        </div>
    </form>
  )
}

export default CampDetailintro