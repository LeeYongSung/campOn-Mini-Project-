import React from 'react';

const CampBoardMain = ({ auth, userCrList, campReviewList, prList, userPrList, currentTab, onTabChange }) => {
  
  const renderRows = (list) => {
    return list.map((item) => (
      <tr key={item.reviewNo} className="hoverr">
        <td className="tdd">{item.reviewNo}</td>
        <td className="tdd"><a href={`/board/crread?reviewNo=${item.reviewNo}`}>{item.reviewTitle}</a></td>
        <td className="tdd">{item.userId}</td>
        <td className="tdd">{new Date(item.regDate).toLocaleDateString()}</td>
        <td className="tdd">
          <a href={`/board/crupdate?reviewNo=${item.reviewNo}`}>수정</a>
          <a href={`/board/crdelete?reviewNo=${item.reviewNo}`} onClick={() => { if(!window.confirm('게시글을 삭제하시겠습니까?')) return false; }}>삭제</a>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <div className="tabnav d-flex justify-content-center py-3 text-center border-bottom">
        <div className={`tab_btn campbtn ${currentTab === 'camp' ? 'point' : ''}`} onClick={() => onTabChange('camp')}><a href="#camp">캠핑</a></div>
        <div className={`tab_btn storebtn ${currentTab === 'store' ? 'point' : ''}`} onClick={() => onTabChange('store')}><a href="#store">스토어</a></div>
      </div>
      
      {currentTab === 'camp' && 
        <div className="camp" id="camp">
          <h5 className="m-3">캠핑 리뷰 리스트</h5>
          <table className="crlist boardd">
            <thead>
              <tr className="theadd">
                <th className="num tdd" width="60">번호</th>
                <th className="title tdd" width="300">제목</th>
                <th className="writer tdd" width="100">작성자</th>
                <th className="date tdd" width="200">작성일</th>
                <th className="etc tdd" width="120">비고</th>
              </tr>
            </thead>
            <tbody id="cr-data">
              {auth === 'ROLE_USER' && renderRows(userCrList)}
              {auth === 'ROLE_SELL' && renderRows(campReviewList)}
              {auth === 'ROLE_ADMIN' && renderRows(campReviewList)}
              {/* {renderRows(campReviewList)} */}
            </tbody>
          </table>
        </div>
      }

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
              {auth === 'ROLE_USER' && renderRows(userPrList)}
              {auth === 'ROLE_ADMIN' && renderRows(prList)}
              {/* {renderRows(prList)} */}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default CampBoardMain;