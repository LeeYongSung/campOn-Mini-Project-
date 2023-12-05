import React from 'react'
import Moment from 'moment'
import $ from 'jquery'
// npm install jquery 해주기

const CompleteReserve = ({complete}) => {

    const payType = `${complete.campPaymentType}`;
    const txt = '(신한)110-328-214257 예금주:이용성';
    if(payType == 'bankbook') {
        $('.payType_end').text(txt)
    }
    console.log(payType)

  return (
    <div>
        <div className="container border-bottom reservate_cmp">
            <div className="container-sm d-flex justify-content-between">
                <div className="reservateComImg pt-4">
                    <img src={complete.cpiUrl} className="py-2 px-2"/>
                </div>
                <div className="reservateCampName pt-5">
                    <div className="mt-1 pt-2 ps-1">
                        <h4>{complete.campName}</h4>
                    </div>
                    <div className="ps-1">
                        <p>{complete.cpdtName}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="container-sm">
                <div className="pt-2"><h5>예약자정보</h5></div>
                <div className="w-100 d-flex justify-content-between border-bottom py-2">
                    <div>
                        <h6>예약번호 : </h6>
                    </div>
                    <div>
                        <p>{complete.reservationNo}</p>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-between border-bottom py-2">
                    <div>
                        <h6>예약자명 : </h6>
                    </div>
                    <div>
                        <p>{complete.userName}</p>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-between border-bottom py-2">
                    <div>
                        <h6>숙박일수 : </h6>
                    </div>
                    <div>
                        <p>{complete.reservationDate}</p>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-between border-bottom py-2">
                    <div>
                        <h6>숙박기간 : </h6>
                    </div>
                    <div>
                        <span>{Moment(complete.reservationStart).format('YYYY-MM-DD')}</span> ~ <span>{Moment(complete.reservationEnd).format('YYYY-MM-DD')}</span>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-between border-bottom py-2">
                    <div>
                        <h6>결제방법 : </h6>
                    </div>
                    <div>
                        <p>{complete.campPaymentType}</p>
                    </div>
                </div>
                <div className="w-100 text-center py-4">
                    <h5 className="payType_end"></h5>
                </div>
            </div>
        </div>
        </div>
  )
}

export default CompleteReserve