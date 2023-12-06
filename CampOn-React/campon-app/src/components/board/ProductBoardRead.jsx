import React from 'react';

const ProductBoardRead = ({ boardData }) => {
    const { reviewNo, reviewTitle, regDate, campName, cpdtName, reservationStart, reservationEnd, userId, reviewCon, reviewImg } = boardData;
    return (
        <div>
            <div className="d-flex justify-content-between border-bottom border-top py-3">
                <div className="ps-2">
                    <span>{reviewNo}</span>
                </div>
                <div>
                    <span>{reviewTitle}</span>
                </div>
                <div className="pe-4">
                    <span>{regDate}</span>
                </div>
            </div>
            <div className="container">
                <div className="d-flex justify-content-between border my-3 rounded py-3">
                    <div className="ps-2">
                        <div>
                            <span>{campName}</span>
                        </div>
                        <div>
                            <span>{cpdtName}</span>
                        </div>
                        <div>
                            <span>{reservationStart}</span>~
                            <span>{reservationEnd}</span>
                        </div>
                    </div>
                    <div className="pe-2">
                        <span>{userId}</span>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <span>{reviewCon}</span>
                </div>
                <div>
                    <img src={`/img?file=${reviewImg}`} className="w-100" />
                </div>
            </div>
        </div>
    );
}

export default ProductBoardRead