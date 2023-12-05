import React from 'react';

const CampBoardRead = ({ review }) => (
  <div>
    <div className="w-100 d-flex justify-content-between py-3">
      <button type="button" onClick={() => window.history.back()} className="btn btn-warning ms-2">목록</button>
    </div>
    <div className="d-flex justify-content-between border-bottom border-top py-3">
      <div className="ps-2">
        <span>{review.reviewNo}</span>
      </div>
      <div>
        <span>{review.reviewTitle}</span>
      </div>
      <div className="pe-4">
        <span>{new Date(review.regDate).toLocaleDateString()}</span>
      </div>
    </div>
    <div className="container">
      <div className="d-flex justify-content-between border my-3 rounded py-3">
        <div className="ps-2">
          <div>
            <span>{review.campName}</span>
          </div>
          <div>
            <span>{review.cpdtName}</span>
          </div>
          <div>
            <span>{new Date(review.reservationStart).toLocaleDateString()}</span>~
            <span>{new Date(review.reservationEnd).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="pe-2">
          <span>{review.userId}</span>
        </div>
      </div>
    </div>
    <hr/>
    <div>
      <div>
        <span>{review.reviewCon}</span>
      </div>
      <div>
        {review.reviewImg && <img src={`/img?file=${review.reviewImg}`} className="w-100"/>}
      </div>
    </div>
  </div>
);

export default CampBoardRead;