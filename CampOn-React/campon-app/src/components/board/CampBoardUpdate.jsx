import React from 'react';

const CampBoardUpdate = ({ review, onSubmit, onDelete, formValues, setFormValues }) => {
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormValues({
      ...formValues,
      reviewImgfile: event.target.files[0],
    });
  };

  return (
    <div>
      <h1>캠핑장 리뷰 수정</h1>
      <h4>캠핑장 리뷰을 수정하기 위한 페이지입니다.</h4>
      <form onSubmit={onSubmit} id="form" enctype="multipart/form-data">
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
              <input type="file" name="reviewImgfile" onChange={handleFileChange} />
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
          <button type="submit">수정</button>
          <button type="button" onClick={onDelete}>삭제</button>
        </div>
      </form>
    </div>
  );
};

export default CampBoardUpdate;