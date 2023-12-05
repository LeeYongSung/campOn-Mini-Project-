import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'
import $ from 'jquery'

const ReserveList = ({reserve, onDelete}) => {
    $('.reservation_more_btn').each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            $(this).closest('.reservation_box').next('.reservation_detail_box').slideDown(1000);

            $(this).closest('.reservation_box').next('.reservation_detail_box').find('.reservation_less').show(1500);
        });
    });

    $('.reservation_less_btn').each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            $(this).closest('.reservation_detail_box').slideUp(1000);

            $(this).closest('.reservation_detail_box').find('.reservation_less').hide(1500);
        });
    });
    
  return (
    <div>
        <div class="w-100 text-center py-3">
        <h4>캠핑장 예약 현황</h4>
        </div>
        {reserve.map((reservation) => (
            <div>
            <div className="reservation_box w-100 d-flex justify-content-between position-relative py-3 mt-3">
                <div className="reservationImg">
                    <img src={reservation.cpiUrl} alt="예약이미지" className="py-2 ms-3 px-2"/>
                </div>
                <div className="reservationTitle">
                    <div className="mt-4"><h5>{reservation.campName}</h5></div>
                    <div><p>{reservation.cpdtName}</p></div>
                    <div className="d-flex justify-content-between pt-3">
                        <div>
                            <h6>예약번호</h6>
                        </div>
                        <div>
                            <p className="pe-5">{reservation.reservationNo}</p>
                        </div>
                    </div>
                    <div>
                        <Link to={`/api/board/crinsert?reservationNo=${reservation.reservationNo}`}>리뷰쓰러가기</Link>
                    </div>
                </div>
                <div className="reservation_cancle">
                    <Link onClick={() => onDelete(reservation.reservationNo)} >
                        <span className="material-symbols-outlined">close</span>
                    </Link>
                </div>
                <div className="reservation_more">
                    <a href="javascript:;" className="reservation_more_btn">상세보기<span className="material-symbols-outlined">expand_more</span></a>
                </div>
            </div>
            <div className="w-100 container-sm pb-5 pt-3 border-bottom position-relative mb-3 reservation_detail_box none">
                <div><h5>예약자정보</h5></div>
                <div className="w-100 d-flex justify-content-between reservationCon my-2 border-bottom">
                    <div><h6>예약번호</h6></div>
                    <div><span>{reservation.reservationNo}</span></div>
                </div>
                <div className="w-100 d-flex justify-content-between reservationCon my-2 border-bottom">
                    <div><h6>예약자명</h6></div>
                    <div><span>{reservation.userName}</span></div>
                </div>
                <div className="w-100 d-flex justify-content-between reservationCon my-2 border-bottom">
                    <div><h6>예약인원</h6></div>
                    <div><span>{reservation.reservationNop}</span></div>
                </div>
                <div className="w-100 d-flex justify-content-between reservationCon my-2 border-bottom">
                    <div><h6>숙박일수</h6></div>
                    <div><span>{reservation.reservationDate}</span></div>
                </div>
                <div className="w-100 d-flex justify-content-between reservationCon my-2 border-bottom">
                    <div><h6>숙박기간</h6></div>
                    <div><span>{Moment(reservation.reservationStart).format('YYYY-MM-DD')} ~ {Moment(reservation.reservationEnd).format('YYYY-MM-DD')}</span></div>
                </div>
                <div className="w-100 d-flex justify-content-between reservationCon my-2 border-bottom">
                    <div><h6>캠핑장연락처</h6></div>
                    <div><span>{reservation.campTel}</span><Link to="#" className="border ms-2 bg-secondary">바로걸기</Link></div>
                </div>
                <div className="reservation_less none">
                    <a href="javascript:;" className="reservation_less_btn">접기<span className="material-symbols-outlined">expand_less</span></a>
                </div>
            </div>
            </div>
        ))}
    </div>
  )
}

export default ReserveList