import React from 'react';

const CampBoardInsert = ({ reservationNo, onSubmit, formValues, setFormValues }) => {
  const handleChange = (event) => {
    if (event.target.name === 'reviewImgfile') {
      setFormValues({
        ...formValues,
        reviewImgfile: event.target.files[0], // File 객체
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
      <h1>캠핑장 리뷰 등록</h1>
      <h4>캠핑장 리뷰를 등록하기 위한 페이지입니다.</h4>
      <form onSubmit={handleFormSubmit} id="form" enctype="multipart/form-data">
        <hr />
        <div>
          <p>{formValues.campName}</p>
          <p>{formValues.cpdtName}</p>
        </div>
        <hr />
        <table>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" name="reviewTitle" value={formValues.reviewTitle} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>파일</td>
            <td>
              <input type="file" name="reviewImgfile" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea name="reviewCon" cols="40" rows="5" placeholder="내용" value={formValues.reviewCon} onChange={handleChange} />
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

export default CampBoardInsert;