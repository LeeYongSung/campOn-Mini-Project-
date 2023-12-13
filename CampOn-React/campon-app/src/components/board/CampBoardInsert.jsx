import React from 'react';

const CampBoardInsert = ({ reservation, handleSubmit, handle }) => {
  return (
    <div className="container-sm">
      <div className="w-100 text-center my-3">
        <h5>캠핑장 리뷰 등록</h5>
      </div>
      <input type="hidden" name="reservationNo" value={reservation.reservationNo} />
      <input type="hidden" name="campNo" value={reservation.campNo} />
      <input type="hidden" name="cpdtNo" value={reservation.cpdtNo} />
      <input type="hidden" name="userNo" value={reservation.userNo} />
      <hr />
      <div>
        <p>캠핑장명 : {reservation.campName}</p>
        <p>캠핑상품명 : {reservation.cpdtName}</p>
      </div>
      <hr />
      <table className='w-100'>
        <tr>
          <td>제목</td>
          <td>
            <input type="text" name="reviewTitle" onChange={handle} className="form-control" />
          </td>
        </tr>
        <tr>
          <td>파일</td>
          <td>
            <input type="file" name="reviewImgfile" onChange={handle} className="form-control" />
          </td>
        </tr>
        <tr>
          <td>내용</td>
          <td>
            <textarea name="reviewCon" cols="40" rows="5" placeholder="내용" className="form-control" onChange={handle} />
          </td>
        </tr>
      </table>
      <div className="w-100 d-flex justify-content-between py-3">
        <button className="btn btn-info px-5" type="button" onClick={() => window.history.back(-1)}>목록</button>
        <button className="btn btn-success px-5" type="submit" onClick={handleSubmit}>등록</button>
      </div>
    </div>
  );
};

export default CampBoardInsert;