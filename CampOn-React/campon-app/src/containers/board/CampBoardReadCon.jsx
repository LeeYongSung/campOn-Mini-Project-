import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as boardApi from '../../apis/board'
import CampBoardRead from '../../components/board/CampBoardRead';
import UserFooter from '../../components/menu/UserFooter'
import CampOnFooter from '../../components/footer/CampOnFooter';
import OpenSearchHeader from '../../components/header/OpenSearchHeader';

const CampBoardReadCon = () => {
  const { reviewNo } = useParams();
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState([]);

  const getCrread = async () => {
    try {
      const response = await boardApi.getCrread(reviewNo);
      const data = response.data;
      ; console.log(data);
      setBoardData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCrread();
  }, []);

  return (
    <>
      <OpenSearchHeader />
      <CampBoardRead
        boardData={boardData}
        navigate={navigate}
      />
      <CampOnFooter />
      <UserFooter />
    </>
  )
};

export default CampBoardReadCon;