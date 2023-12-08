import React from 'react';

const CampBoardInsert = ({ reservation, handleSubmit , handle}) => {
  return (
    <div>
      <h1>캠핑장 리뷰 등록</h1>
      <h4>캠핑장 리뷰을 등록하기 위한 페이지입니다.</h4>
        <input type="hidden" name="reservationNo" value={reservation.reservationNo} />
        <input type="hidden" name="campNo" value={reservation.campNo} />
        <input type="hidden" name="cpdtNo" value={reservation.cpdtNo} />
        <input type="hidden" name="userNo" value={reservation.userNo} />
        <hr />
        <div>
          <p>{reservation.campName}</p>
          <p>{reservation.cpdtName}</p>
        </div>
        <hr />
        <table>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" name="reviewTitle" onChange={handle} />
            </td>
          </tr>
          <tr>
            <td>파일</td>
            <td>
              <input type="file" name="reviewImgfile" onChange={handle}/>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea name="reviewCon" cols="40" rows="5" placeholder="내용" onChange={handle}/>
            </td>
          </tr>
        </table>
        <div>
          <button type="button" onClick={() => window.history.back(-1)}>목록</button>
          <button type="submit" onClick={handleSubmit}>등록</button>
        </div>
    </div>
  );
};

export default CampBoardInsert;