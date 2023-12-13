import React from 'react';

const ProductBoardRead = ({ boardData, navigate }) => {
  const { prNo, prTitle, regDate, productName, productCategory, startDate, endDate, userId, prCon, prImg } = boardData;

  return (
    <div>
      <div className="w-100 d-flex justify-content-between py-3">
        <button type="button" onClick={() => navigate(-1, { state: { boardData } })} className="btn btn-warning ms-2">목록</button>
      </div>
      <div className="d-flex justify-content-between border-bottom border-top py-3">
        <div className="ps-2">
            <span>{prNo}</span>
        </div>
        <div>
            <span>{prTitle}</span>
        </div>
        <div className="pe-4">
            <span>{new Date(regDate).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between border my-3 rounded py-3">
          <div className="ps-2">
            <div>
              <p>{productName}</p>
            </div>
            <div>
              <p>{productCategory}</p>
            </div>
            <div>
              대여 기간 : <span>{new Date(startDate).toLocaleDateString()}</span>
              ~
              <span>{new Date(endDate).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="pe-2">
            <p>{userId}</p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <p>{prCon}</p>
        </div>
        <div className='w-70 m-5'>
          <img src={`/img?file=${prImg}`} alt="review" className='w-100 reviewImg' />
        </div>
      </div>
    </div>
  );
};

export default ProductBoardRead;