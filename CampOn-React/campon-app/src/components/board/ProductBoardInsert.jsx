import React from 'react';

const ProductBoardInsert = ({ order, handleSubmit, handle }) => {
  return (
    <div>
      <h1>대여상품 리뷰 등록</h1>
      <h4>대여상품 리뷰를 등록하기 위한 페이지입니다.</h4>
      <input type="hidden" name="orderNo" value={order.orderNo} />
      <input type="hidden" name="userNo" value={order.userNo} />
      <input type="hidden" name="productNo" value={order.productNo} />
      <hr />
      <div>
        <p>{order.productName}</p>
        <p>{order.productCategory}</p>
      </div>
      <hr />
      <table>
        <tr>
          <td>제목</td>
          <td>
            <input type="text" name="prTitle" onChange={handle} />
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
            <textarea name="prCon" cols="40" rows="5" placeholder="내용" onChange={handle} />
          </td>
        </tr>
      </table>
      <div>
        <button type="button" onClick={() => window.history.back(-1)}>목록</button>
        <button type="submit" onClick={handleSubmit}>등록</button>
      </div>
    </div >
  );
};

export default ProductBoardInsert;