import React from 'react';
import { Link } from 'react-router-dom';

const ProductBoardUpdate = ({ reservation, prTitle, prCon, onDelete, handle, handleSubmit }) => {
  return (
    <div  className="container-sm">
      <div className="w-100 text-center my-3">
        <h5>대여상품 리뷰 수정</h5>
      </div>
        <hr />
        <div>
          <p>대여상품명 : {reservation.productName}</p>
          <p>카테고리 : {reservation.productCategory}</p>
        </div>
        <hr />
        <table className='w-100' >
          <tr>
            <td>제목</td>
            <td>
              <input type="text" name="prTitle" value={prTitle} onChange={handle} className="form-control" />
            </td>
          </tr>
          <tr>
            <td>파일</td>
            <td>
              <input type="file" name="prImgfile" onChange={handle}  className="form-control"/>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea name="prCon" cols="40" rows="5" placeholder="내용" value={prCon} onChange={handle} className="form-control" />
            </td>
          </tr>
        </table>
        <div>
        <div className="w-100 d-flex justify-content-between py-3">
        <Link to="/api/board/index" className='btn btn-info px-5'>목록</Link>
          <button type="submit"  className="btn btn-success px-5" onClick={handleSubmit}>수정</button>
          <button type="button" className="btn btn-danger px-5"  onClick={onDelete}>삭제</button>
        </div>
        </div>
    </div>
  );
};

export default ProductBoardUpdate;