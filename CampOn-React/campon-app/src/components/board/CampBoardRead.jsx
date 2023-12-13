import React from 'react';

const CampBoardRead = ({ boardData, navigate, format }) => {
    const { reviewNo, reviewTitle, regDate, campName, cpdtName, reservationStart, reservationEnd, userId, reviewCon, reviewImg } = boardData;
    return (
        <div>
            <div className="w-100 d-flex justify-content-between py-3">
                <button type="button" onClick={() => navigate(-1)} className="btn btn-warning ms-2">목록</button>
            </div>
            <div className="d-flex justify-content-between border-bottom border-top py-3">
                <div className="ps-2">
                    <span>{reviewNo}</span>
                </div>
                <div>
                    <span>{reviewTitle}</span>
                </div>
                <div className="pe-4">
                    <span>{format.formatDate(regDate)}</span>
                </div>
            </div>
            <div className="container">
                <div className="d-flex justify-content-between border my-3 rounded py-3">
                    <div className="ps-2">
                        <h4>이용한 캠핑장 정보</h4>
                        <div>
                            <span>{campName}</span>
                        </div>
                        <div>
                            <span>{cpdtName}</span>
                        </div>
                        <div>
                            <span>{format.formatDate(reservationStart)}</span>~
                            <span>{format.formatDate(reservationEnd)}</span>
                        </div>
                    </div>
                    <div className="pe-2">
                        <span>예약자 : {userId}</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className='p-2'>
                <h5>리뷰내용</h5>
                <div>
                    <span>{reviewCon}</span>
                </div>
                <div className='w-70 m-5'>
                    <img src={`/api/img?file=${reviewImg}`} className="w-100 reviewImg" />
                </div>
            </div>
        </div>
    );
}

export default CampBoardRead