import React from 'react';

const ProductBoardInsert = ({ orderNo, onSubmit, formValues, setFormValues }) => {
  const handleChange = (event) => {
    if (event.target.name === 'prImgfile') {
      setFormValues({
        ...formValues,
        prImgfile: event.target.files[0], // File 객체
      });
    } else {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value, // 문자열
      });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    // Board 객체 전송
    onSubmit(event);
  };

  return (
    <div>
      <h1>대여상품 리뷰 등록</h1>
      <h4>대여상품 리뷰를 등록하기 위한 페이지입니다.</h4>
      <form onSubmit={handleFormSubmit} id="form" enctype="multipart/form-data">
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
              <input type="file" name="prImgfile" onChange={handleChange} />
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
          <button type="submit">등록</button>
        </div>
      </form>
    </div>
  );
};

export default ProductBoardInsert;