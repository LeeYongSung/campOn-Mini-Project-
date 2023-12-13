import React from 'react';
import { Link } from 'react-router-dom';

const CampBoardUpdate = ({ reservation, reviewTitle, reviewCon, onDelete, handleSubmit, handle }) => {

  return (
    <div  className="container-sm">
      <div className="w-100 text-center my-3">
        <h5>캠핑장 리뷰 수정</h5>
      </div>
      <hr />

      <div>
      <p>캠핑장명 : {reservation.campName}</p>
        <p>캠핑상품명 : {reservation.cpdtName}</p>
        </div>
      <table  className='w-100' >
        <tbody>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" name="reviewTitle" value={reviewTitle} onChange={handle}  className="form-control" />
            </td>
          </tr>
          <tr>
            <td>파일</td>
            <td>
              <input type="file" name="reviewImgfile" onChange={handle}  className="form-control" />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea name="reviewCon" cols="40" rows="5" placeholder="내용" value={reviewCon} onChange={handle}  className="form-control" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="w-100 d-flex justify-content-between py-3">
        <Link to="/api/board/index" className='btn btn-info px-5'>목록</Link>
        <button className="btn btn-success px-5" type="button" onClick={handleSubmit}>수정</button>
        <button className="btn btn-danger px-5" type="button" onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
};

export default CampBoardUpdate;
