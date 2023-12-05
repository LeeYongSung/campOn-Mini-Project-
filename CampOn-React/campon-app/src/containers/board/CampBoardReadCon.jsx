import React, { useEffect, useState } from 'react';
import * as boardApi from '../../apis/board'
import CampBoardRead from '../../components/board/CampBoardRead';

const CampBoardReadCon = ({ reviewNo }) => {
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      const data = await boardApi.getCrread(reviewNo);
      setReview(data);
    };
    fetchReview();
  }, [reviewNo]);

  return review ? <CampBoardRead review={review}/> : <div>Loading...</div>;
};

export default CampBoardReadCon;