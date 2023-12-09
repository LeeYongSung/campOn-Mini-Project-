import React from 'react';
import { Link } from 'react-router-dom';

const CampBoardUpdate = ({ reservation, reviewTitle, reviewCon, onDelete, handleSubmit, handle }) => {

  return (
    <div>
      <h1>캠핑장 리뷰 수정</h1>
      <h4>캠핑장 리뷰을 수정하기 위한 페이지입니다.</h4>
      <hr />
      <div>
          <p>{reservation.campName}</p>
          <p>{reservation.cpdtName}</p>
        </div>
      <table>
        <tbody>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" name="reviewTitle" value={reviewTitle} onChange={handle} />
            </td>
          </tr>
          <tr>
            <td>파일</td>
            <td>
              <input type="file" name="reviewImgfile" onChange={handle} />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea name="reviewCon" cols="40" rows="5" placeholder="내용" value={reviewCon} onChange={handle} />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to="/api/board/index" className='btn'>목록</Link>
        <button type="button" onClick={handleSubmit}>수정</button>
        <button type="button" onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
};

export default CampBoardUpdate;
