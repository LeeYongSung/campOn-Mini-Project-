import React from 'react';

const ProductBoardUpdate = ({ pr, onSubmit, onDelete, formValues, setFormValues }) => {
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormValues({
      ...formValues,
      prImgfile: event.target.files[0],
    });
  };

  return (
    <div>
      <h1>대여상품 리뷰 수정</h1>
      <h4>대여상품 리뷰을 수정하기 위한 페이지입니다.</h4>
      <form onSubmit={onSubmit} id="form" enctype="multipart/form-data">
        <hr />
        <div>
          <p>{formValues.productName}</p>
          <p>{formValues.productCategory}</p>
        </div>
        <hr />
        <table>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" name="prTitle" value={formValues.prTitle} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>파일</td>
            <td>
              <input type="file" name="prImgfile" onChange={handleFileChange} />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea name="prCon" cols="40" rows="5" placeholder="내용" value={formValues.prCon} onChange={handleChange} />
            </td>
          </tr>
        </table>
        <div>
          <button type="button" onClick={() => window.history.back(-1)}>목록</button>
          <button type="submit">수정</button>
          <button type="button" onClick={onDelete}>삭제</button>
        </div>
      </form>
    </div>
  );
};

export default ProductBoardUpdate;