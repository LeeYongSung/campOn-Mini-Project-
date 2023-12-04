import React from 'react'
import { Link } from 'react-router-dom'

const CampDetailintro = ({detailimg, detail}) => {
  return (
    <form>
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                {detailimg.map((img) => (
                    <img src={`/img?file=${img.cpdiUrl}`}/>
                ))}
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="w-100 campdetail_productBox pt-2">
            <ul>
                <li class="w-100 text-center">
                    <span>{detail.campName}</span>
                </li>
                <li class="w-100 text-center fs-4">
                    <span>{detail.cpdtName}</span>
                </li>
            </ul>
        </div>
        <div class="container-sm w-100 campdetail_basic py-3 border-bottom">
            <div class="container-sm border d-flex justify-content-around text-center py-3">
                <ul>
                    <li class="pb-1">
                        <span>유형</span>
                    </li>
                    <li>
                        <span>{detail.campTypeName}</span>
                    </li>
                </ul>
                <ul>
                    <li class="pb-1">
                        <span>크기</span>
                    </li>
                    <li>
                        <span>{detail.cpdtSize}</span>
                    </li>
                </ul>
                <ul>
                    <li class="pb-1">
                        <span>인원</span>
                    </li>
                    <li>
                        <span>{detail.cpdtNop}</span>
                    </li>
                </ul>
                <ul>
                    <li class="pb-1">
                        <span>가격</span>
                    </li>
                    <li>
                        <span>{detail.cpdtPrice}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-100 py-3 border-bottom">
            <div class="container-sm">
                <div>
                    <h5>캠핑장 상품 소개</h5>
                </div>
                <div class="campdetail_introduction">
                    <span>{detail.cpdtIntroduction}</span>
                </div>
            </div>
        </div>
        <div class="w-100 my-3">
            <Link to={`/api/camp/reservate/${detail.cpdtNo}`}>
            <buton type="button" class="btn btn-lg w-100 reservate_btn" onclick="reservate()">
                예약하기
            </buton>
            </Link>
        </div>
    </form>
  )
}

export default CampDetailintro