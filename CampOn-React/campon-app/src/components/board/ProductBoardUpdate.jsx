import React from 'react';
import { Link } from 'react-router-dom';

const ProductBoardUpdate = ({ reservation, prTitle, prCon, onDelete, handle, handleSubmit }) => {
  return (
    <div>
      <h1>대여상품 리뷰 수정</h1>
      <h4>대여상품 리뷰을 수정하기 위한 페이지입니다.</h4>
        <hr />
        <div>
          <p>{reservation.productName}</p>
          <p>{reservation.productCategory}</p>
        </div>
        <hr />
        <table>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" name="prTitle" value={prTitle} onChange={handle} />
            </td>
          </tr>
          <tr>
            <td>파일</td>
            <td>
              <input type="file" name="prImgfile" onChange={handle} />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea name="prCon" cols="40" rows="5" placeholder="내용" value={prCon} onChange={handle} />
            </td>
          </tr>
        </table>
        <div>
        <Link to="/api/board/index" className='btn' >목록</Link>
          <button type="submit" onClick={handleSubmit}>수정</button>
          <button type="button" onClick={onDelete}>삭제</button>
        </div>
    </div>
  );
};

export default ProductBoardUpdate;