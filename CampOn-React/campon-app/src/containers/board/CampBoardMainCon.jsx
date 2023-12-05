import React, { useState, useEffect } from 'react';
import CampBoardMain from '../../components/board/CampBoardMain';
import * as boardApi from '../../apis/board'

const CampBoardMainCon = ({ auth }) => {
  const [currentTab, setCurrentTab] = useState('camp');
  const [campReviewList, setCampReviewList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await boardApi.getNewReviewList();
        console.log(response.data);
        setCampReviewList(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <CampBoardMain
      // 권한
      auth={auth}
      // 캠핑 리뷰
      campReviewList={campReviewList}
      //
      currentTab={currentTab}
      onTabChange={setCurrentTab}
    />
  );
};

export default CampBoardMainCon;