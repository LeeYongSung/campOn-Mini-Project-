import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as boardApi from '../../apis/board'
import CampBoardRead from '../../components/board/CampBoardRead';
import UserFooter from '../../components/menu/UserFooter'
import CampOnFooter from '../../components/footer/CampOnFooter';
import BackHeader from '../../components/header/BackHeader';
import * as format from '../../apis/format'

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
      <BackHeader />
      <CampBoardRead
        boardData={boardData}
        navigate={navigate}
        format={format}
      />
      <CampOnFooter />
      <UserFooter />
    </>
  )
};

export default CampBoardReadCon;