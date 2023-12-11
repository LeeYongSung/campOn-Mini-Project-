import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import moment from 'moment'

const ReservatePro = ({camp, user, reserve}) => {
    const [reservationNop, setReservationNop] = useState(1)
    const [reservationStart, setReservationStart] = useState('')
    const [reservationEnd, setReservationEnd] = useState('')
    const [reservationDate, setReservationDate] = useState(0)
    const [pay, setPay] = useState('')

    const handleChangeStart = (e) => {
        setReservationStart(e.target.value)
    }

    const handleChangeEnd = (e) => {
        setReservationEnd(e.target.value)        
    }
    const handleChangePay = (e) => {
        setPay(e.target.value)
    }
    
    const increaseNop = () =>{
        setReservationNop(reservationNop + 1);
    }
    const decreaseNop = () => {
        if(reservationNop > 1){
            setReservationNop(reservationNop - 1);
        }
    }
    useEffect(() => {
        const start = new Date(reservationStart);
        const end = new Date(reservationEnd);
        let diff = (end.getTime() - start.getTime()); 
        diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
        if(diff < 1) {
            alert('1박 이상 예약 가능합니다.')
            return
        }
        setReservationDate(diff);
    })

    $(document).ready(function() {    
        const date = new Date(reservationStart)
        const weekday = ['일', '월', '화', '수', '목', '금', '토']
        const daycheck = weekday[date.getDay()];
        
        if(daycheck == null) $('.startDayofWeek').text('(요일)')
        else $('.startDayofWeek').text('(' + daycheck + ')')
    })
    $(document).ready(function() {    
        const date = new Date(reservationEnd)
        const weekday = ['일', '월', '화', '수', '목', '금', '토']
        const daycheck = weekday[date.getDay()];

        if(daycheck == null) $('.endDayofWeek').text('(요일)')
        else $('.endDayofWeek').text('(' + daycheck + ')')
    })
    $(document).ready(function(){
        if(reservationEnd == '') $('.reservation_picker').text('날짜를 선택해주세요.')
        else $('.reservation_picker').text(reservationStart + '~' + reservationEnd)

    })
    $(document).ready(function(){
        if(isNaN(reservationDate)) $('.reservation_days').text('0박')
        else $('.reservation_days').text(reservationDate + '박')
    })
    $(document).ready(function(){
        if(isNaN(reservationDate)) $('#TotalPrice').text('0원')
        else $('#TotalPrice').text(reservationDate*camp.cpdtPrice + '원')
    })
   
    // const onsubmit = () => {
    //     reserve(camp.campNo, camp.cpdtNo, user.userNo, reservationNop, reservationStart, reservationEnd, reservationDate, pay)
    // }

    const clickPay = () => {
        let payradio = pay;
        console.log(payradio)

        if(payradio == 'card') {
            requestPay();
        }

        if(payradio == 'bankbook') {
            reserve(camp.campNo, camp.cpdtNo, user.userNo, reservationNop, reservationStart, reservationEnd, reservationDate, pay)
        }

    }
    const requestPay = () => {
        var IMP = window.IMP;
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        var milliseconds = today.getMilliseconds();
        var makeMerchantUid = hours + minutes + seconds + milliseconds;
        let productName = camp.cpdtName;
        let price = reservationDate*camp.cpdtPrice;
        let name = user.userName;
        let tel = user.userTel;
        let email = user.userEmail;
        let address = user.userAddress;

        IMP.init('imp48458232'); 
        IMP.request_pay({
            pg : 'kcp',
            pay_method : 'card',
            merchant_uid : "IMP"+ makeMerchantUid,
            name : productName,
            amount : price,
            buyer_email : email,
            buyer_name : name,
            buyer_tel : tel,
            buyer_addr : address,
        }, function (rsp) {
            if (rsp.success) {
                reserve(camp.campNo, camp.cpdtNo, user.userNo, reservationNop, reservationStart, reservationEnd, reservationDate, pay)
            } else {
                console.log(rsp);
                alert('결제에 실패했습니다. 날짜 및 인원 선택이 완료됐는지 확인해 주세요.');
            }
        });
    }


  return (
    <div>
            <div className="container w-100">
                <div className="container-sm reservate_box d-flex justify-content-between py-4">
                    <div className="rounded reservate_img_box">
                        <img src={camp.cpdiUrl} alt="캠핑상품이미지" className="px-2 rounded"/>
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
                                <input type="date" id="reservationStart" name="reservationStart" onChange={handleChangeStart} />
                            </div>
                            <div><span className="startDayofWeek">(금)</span></div>
                        </div>
                    </div>
                    <div className="daycount text-center pt-3">
                        <input type="hidden" id="reservationDate" name="reservationDate"/>
                        <span className="reservation_days" name="reservation_days" id="reservation_days"></span>
                    </div>
                    <div className="checkoutBox">
                        <div className="text-center">체크아웃</div>
                        <div className="d-flex">
                            <div className="reservation_date">
                                <input type="date" id="reservationEnd" name="reservationEnd" onChange={handleChangeEnd} />
                            </div>
                            <div><span className="endDayofWeek">(금)</span></div>
                        </div>
                    </div>
                </div>
                <div className="form-floating">
                    <input type="text" id="reservation_picker" name="reservation_picker" className="form-control text-center" readOnly/>
                    <label className="reservation_picker"></label>
                </div>
                <div className="w-100 d-flex justify-content-start mt-3 border-bottom py-2">
                    <div><h6 className="pt-3">숙박인원</h6></div>
                    <div className="reservationNop_box d-flex form-floating ms-2">
                        <button className="minus form-control" onClick={decreaseNop}>-</button>
                        <input type="number" id="reservationNop" name="reservationNop" value={reservationNop} min="1" max="999" className="form-control"/>
                        <button className="plus form-control" onClick={increaseNop}>+</button>
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
                        <input type="radio" id="card" name="campPaymentType" value="card" onChange={handleChangePay}/>
                        <label for="card" className="me-5"><span></span>카드</label>

                        <input type="radio" id="bank" name="campPaymentType" value="bankbook" onChange={handleChangePay}/>
                        <label for="bank"><span></span>무통장입금</label>
                    </div>
                </div>
                <div className="w-100 text-end">
                    <span>결제금액 : </span><span id="TotalPrice"></span>
                </div>
                <li><button type="button" className="btn btn-warning btn-lg w-100 py-3 my-3 pay" onClick={clickPay} >결제하기</button></li>
            </div>
    </div>
  )
}

export default ReservatePro