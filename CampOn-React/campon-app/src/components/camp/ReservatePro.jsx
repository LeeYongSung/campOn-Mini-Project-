import React from 'react'

const ReservatePro = ({camp, user, reserve}) => {
  return (
    <div>
        <form action="/camp/reservate" method="post" id="reservate_form">
            <div className="container w-100">
                <div className="container-sm reservate_box d-flex justify-content-between">
                    <div className="rounded">
                        <img src={camp.cpdiUrl} alt="캠핑상품이미지" className="w-100 px-2 rounded"/>
                    </div>
                    <div>
                        <p>{camp.campName}</p>
                        <p>{camp.cpdtName}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between py-3 border-top">
                    <div className="checkinBox">
                        <div className="text-center">체크인</div>
                        <div className="d-flex">
                            <div className="reservation_date">
                                <input type="date" id="reservationStart" name="reservationStart" readonly />
                            </div>
                            <div><span className="startDayofWeek">(금)</span></div>
                        </div>
                    </div>
                    <div className="daycount text-center pt-3">
                        <input type="hidden" id="reservationDate" name="reservationDate"/>
                        <span name="reservation_days" id="reservation_days"></span>
                    </div>
                    <div className="checkoutBox">
                        <div className="text-center">체크아웃</div>
                        <div className="d-flex">
                            <div className="reservation_date">
                                <input type="date" id="reservationEnd" name="reservationEnd" readonly />
                            </div>
                            <div><span className="endDayofWeek">(금)</span></div>
                        </div>
                    </div>
                </div>
                <div className="form-floating">
                    <input type="text" id="reservation_picker" name="reservation_picker" className="form-control text-center" readonly/>
                    <label for="reservation_picker">날짜를 선택해주세요.</label>
                </div>
                <div className="w-100 d-flex justify-content-start mt-3 border-bottom py-2">
                    <div><h6 className="pt-3">숙박인원</h6></div>
                    <div className="reservationNop_box d-flex form-floating ms-2">
                        <button className="minus form-control">-</button>
                        <input type="number" id="reservationNop" name="reservationNop" value="1" min="0" max="999" className="form-control"/>
                        <button className="plus form-control">+</button>
                     </div>
                </div>
                <div className="reservate_user_box d-flex justify-content-start border-bottom">
                    <div className="py-2">
                        <div><h6>예약자명 : </h6></div>
                        <div className="pt-3"><h6>연&nbsp;락&nbsp;처 : </h6></div>
                    </div>
                    <div className="py-2">
                        <div>
                            <p>{user.userName}</p>
                        </div>
                        <div className="pt-3">
                            <p >{user.userTel}</p>
                        </div>
                    </div>
                </div>
                <div className="w-100 py-3">
                    <div className="text-center">
                        <h5>결제수단</h5>
                    </div>
                    <div className="text-center border-bottom py-3 campPayment_type">
                        <input type="radio" id="card" name="campPaymentType" value="card"/>
                        <label for="card" className="me-5"><span></span>카드</label>

                        <input type="radio" id="bank" name="campPaymentType" value="bankbook"/>
                        <label for="bank"><span></span>무통장입금</label>
                    </div>
                </div>
                <div className="w-100 text-end">
                    <span>결제금액 : </span><span id="TotalPrice"></span>
                </div>
                <li><button type="button" className="btn btn-warning btn-lg w-100 py-3 my-3 pay">결제하기</button></li>
            </div>
        </form>
    </div>
  )
}

export default ReservatePro