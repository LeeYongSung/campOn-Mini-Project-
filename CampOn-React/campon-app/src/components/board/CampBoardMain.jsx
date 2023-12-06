import React from 'react';

const CampBoardMain = ({ newReviewList, crlist, newprlist, currentTab, onTabChange, prlist }) => {

  // 실시간 캠핑 리뷰
  const renderCampNewReviews = (list) => {
    return list != null && list.map((item) => (
      <div className="container my-2" key={item.reviewNo}>
        <a href={`/api/board/crread/${item.reviewNo}`} className="d-flex justify-content-between border-bottom">
          <div className="review_imgbox py-2 px-2">
            <img src={`/img?file=${item.reviewImg}`} className="rounded" alt="review" />
          </div>
          <div className="review_conbox pt-2">
            <div>
              <div>
                <p>{item.reviewTitle}</p>
              </div>
              <div>
                <span>{new Date(item.regDate).toLocaleDateString()}</span>
              </div>
              <div>
                <span>{item.cpdtName}</span>
              </div>
              <div>
                <span>{item.campName}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    ));
  };

  // 캠핑 리뷰
  const renderCampReviews = (list) => {
    return list != null && list.map((item) => (
      <tr key={item.reviewNo} className="hoverr">
        <td className="tdd">{item.reviewNo}</td>
        <td className="tdd"><a href={`/api/board/crread/${item.reviewNo}`}>{item.reviewTitle}</a></td>
        <td className="tdd">{item.userId}</td>
        <td className="tdd">{new Date(item.regDate).toLocaleDateString()}</td>
      </tr>
    ));
  };

  // 실시간 상품 리뷰
  const renderProductNewReviews = (list) => {
    return list != null && list.map((item) => (
      <div className="container my-2" key={item.prNo}>
        <a href={`/api/board/prread/${item.prNo}`} className="d-flex justify-content-between border-bottom">
          <div className="review_imgbox py-2 px-2">
            <img src={`/img?file=${item.prImg}`} className="rounded" alt="review" />
          </div>
          <div className="review_conbox pt-2">
            <div>
              <div>
                <p>{item.prTitle}</p>
              </div>
              <div>
                <span>{new Date(item.regDate).toLocaleDateString()}</span>
              </div>
              <div>
                <span>{item.productName}</span>
              </div>
              <div>
                <span>{item.userId}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    ));
  };

  // 상품 리뷰 
  const renderProductReviews = (list) => {
    return list != null && list.map((item) => (
      <tr key={item.prNo} className="hoverr">
        <td className="tdd">{item.prNo}</td>
        <td className="tdd"><a href={`/api/board/prread/${item.prNo}`}>{item.prTitle}</a></td>
        <td className="tdd">{item.userId}</td>
        <td className="tdd">{new Date(item.regDate).toLocaleDateString()}</td>
      </tr>
    ));
  };



  return (
    // 캠핑&스토어 스위칭
    <div>
      <div className="tabnav d-flex justify-content-center py-3 text-center border-bottom">
        <div className={`tab_btn campbtn ${currentTab === 'camp' ? 'point' : ''}`} onClick={() => onTabChange('camp')}><a href="#camp">캠핑</a></div>
        <div className={`tab_btn storebtn ${currentTab === 'store' ? 'point' : ''}`} onClick={() => onTabChange('store')}><a href="#store">스토어</a></div>
      </div>

      {/* 캠핑 리뷰 리스트 출력 */}
      {currentTab === 'camp' &&
        <div className="camp" id="camp">
          <div>
            <div className="review mb-5">
              <h5 className="m-3">실시간 캠핑 리뷰</h5>
              {renderCampNewReviews(newReviewList)}
            </div>
          </div>
          <h5 className="m-3">캠핑 리뷰 리스트</h5>
          <table className="crlist boardd">
            <thead>
              <tr className="theadd">
                <th className="num tdd" width="100">번호</th>
                <th className="title tdd" width="200">제목</th>
                <th className="writer tdd" width="100">작성자</th>
                <th className="date tdd" width="100">작성일</th>
              </tr>
            </thead>
            <tbody id="cr-data">
              {renderCampReviews(crlist)}
            </tbody>
          </table>
        </div>
      }

      {/* 상품 리뷰 리스트 출력 */}
      {currentTab === 'store' &&
        <div className="store" id="store">
          <div>
            <div className="review mb-5">
              <h5 className="m-3">실시간 상품 리뷰</h5>
              {renderProductNewReviews(newprlist)}
            </div>
          </div>
          <h5 className="m-3">상품 리뷰 리스트</h5>
          <table className="boardd">
            <thead className="theadd">
              <tr>
                <th className="tdd" width="100">번호</th>
                <th className="tdd" width="200">제목</th>
                <th className="tdd" width="100">작성자</th>
                <th className="tdd" width="100">작성일</th>
              </tr>
            </thead>
            <tbody id="pr-data">
              {renderProductReviews(prlist)}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default CampBoardMain;