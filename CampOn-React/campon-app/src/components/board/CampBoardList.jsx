import React from 'react';
import { Link } from 'react-router-dom';

const CampBoardList = ({ onDeleteCr, onDeletePr, crlist, currentTab, onTabChange, prlist, newReviewList, newprlist  }) => {

  // 캠핑 리뷰
  const renderCampReviews = (list) => {
    return list != null && list.map((item) => (
      <tr key={item.reviewNo} className="hoverr">
        <td className="tdd">{item.reviewNo}</td>
        <td className="tdd"><Link to={`/api/board/crread/${item.reviewNo}`}>{item.reviewTitle}</Link></td>
        <td className="tdd">{item.userId}</td>
        <td className="tdd">{new Date(item.regDate).toLocaleDateString().replace(/\.+$/, '')}</td>
        <td className="tdd">
        <Link to={`/api/board/crupdate/${item.reviewNo}`} className='updatebtn'>수정</Link>
        <button type="button" onClick={() => onDeleteCr(item.reviewNo)} className='deletebtn'>삭제</button>
        </td>
      </tr>
    ));
  };

  // 상품 리뷰 
  const renderProductReviews = (list) => {
    return list != null && list.map((item) => (
      <tr key={item.prNo} className="hoverr">
        <td className="tdd">{item.prNo}</td>
        <td className="tdd"><Link to={`/api/board/prread/${item.prNo}`}>{item.prTitle}</Link></td>
        <td className="tdd">{item.userId}</td>
        <td className="tdd">{new Date(item.regDate).toLocaleDateString().replace(/\.+$/, '')}</td>
        <td className="tdd">
        <Link to={`/api/board/prupdate/${item.prNo}`} className='updatebtn'>수정</Link>
        <button type="button" onClick={() => onDeletePr(item.prNo)} className='deletebtn'>삭제</button>
        </td>
      </tr>
    ));
  };



  return (
    // 캠핑&스토어 스위칭
    <div>
      <div className="tabnav d-flex justify-content-center py-3 text-center border-bottom">
        <div className={`tab_btn campbtn ${currentTab === 'camp' ? 'point' : ''}`} onClick={() => onTabChange('camp')}><Link to="#camp">캠핑</Link></div>
        <div className={`tab_btn storebtn ${currentTab === 'store' ? 'point' : ''}`} onClick={() => onTabChange('store')}><Link to="#store">스토어</Link></div>
      </div>

      {/* 캠핑 리뷰 리스트 출력 */}
      {currentTab === 'camp' &&
        <div className="camp" id="camp">
          <h5 className="m-3">캠핑 리뷰 리스트</h5>
          <table className="crlist boardd">
            <thead className="theadd">
              <tr>
                <th className="tdd" width="60">번호</th>
                <th className="tdd" width="200">제목</th>
                <th className="tdd" width="100">작성자</th>
                <th className="tdd" width="150">작성일</th>
                <th className="tdd" width="120">비고</th>
              </tr>
            </thead>
            <tbody id="cr-data">
              {/* {renderCampReviews(crlist)} */}
              {renderCampReviews(newReviewList)}
            </tbody>
          </table>
        </div>
      }

      {/* 상품 리뷰 리스트 출력 */}
      {currentTab === 'store' &&
        <div className="store" id="store">
          <h5 className="m-3">상품 리뷰 리스트</h5>
          <table className="boardd">
            <thead className="theadd">
              <tr>
                <th className="tdd" width="60">번호</th>
                <th className="tdd" width="300">제목</th>
                <th className="tdd" width="100">작성자</th>
                <th className="tdd" width="200">작성일</th>
                <th className="tdd" width="120">비고</th>
              </tr>
            </thead>
            <tbody id="pr-data">
              {/* {renderProductReviews(prlist)} */}
              {renderProductReviews(prlist)}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default CampBoardList;