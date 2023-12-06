import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as boardApi from '../../apis/board'
import CampBoardRead from '../../components/board/CampBoardRead';

const CampBoardReadCon = () => {
    const { reviewNo } = useParams();
    const [boardData, setBoardData] = useState([]);

    const getCrread = async () => {
        try {
          const response = await boardApi.getCrread(reviewNo);
          const data = response.data;
;          console.log(data);
          setBoardData(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
      getCrread();
    }, []);

  return <CampBoardRead
    boardData={boardData}
  />;
};

export default CampBoardReadCon;