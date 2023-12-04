import React from 'react'
import { Link, useParams } from 'react-router-dom'

const CampBoardRead = () => {

  return (
    <div>
      <div className="w-100 d-flex justify-content-between py-3">
        <button type="button" onClick={() => history.back(-1)} className="btn btn-warning ms-2">목록</button>
      </div>
      <div className="d-flex justify-content-between border-bottom border-top py-3">
        <div className="ps-2">
          <span>{crread.reviewNo}</span>
        </div>
        <div>
          <span>{crread.reviewTitle}</span>
        </div>
        <div className="pe-4">
          <span>{new Date(crread.regDate).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between border my-3 rounded py-3">
          <div className="ps-2">
            <div>
              <span>{crread.campName}</span>
            </div>
            <div>
              <span>{crread.cpdtName}</span>
            </div>
            <div>
              <span>{new Date(crread.reservationStart).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
              ~
              <span>{new Date(crread.reservationEnd).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
            </div>
          </div>
          <div className="pe-2">
            <span>{crread.userId}</span>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <span>{crread.reviewCon}</span>
        </div>
        <div>
          <img src={`/img?file=${crread.reviewImg}`} className="w-100" />
        </div>
      </div>
    </div>
  );

  export default CampBoardRead