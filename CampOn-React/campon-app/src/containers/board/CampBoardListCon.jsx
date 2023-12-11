import React, { useState, useEffect } from 'react';
import CampBoardList from '../../components/board/CampBoardList';
import * as boardApi from '../../apis/board'
import { useLocation } from 'react-router-dom';
import UserFooter from '../../components/menu/UserFooter'
import CampOnFooter from '../../components/footer/CampOnFooter';
import BackHeader from '../../components/header/BackHeader';

const CampBoardMainCon = () => {
  const [currentTab, setCurrentTab] = useState('camp');
  const [crlist, setCrlist] = useState([]);
  const [prlist, setPrlist] = useState([]);
  const location = useLocation();

  const fetchData = async () => {
    try {
      const response = await boardApi.getBoardlist();
      const data = response.data;
      console.log(data);
      setCrlist(data.crlist);
      setPrlist(data.prlist);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteCr = async (reviewNo) => {
    if (window.confirm('리뷰를 삭제하시겠습니까?')) {
      try {
        const response = await boardApi.deleteCrdelete(reviewNo);
        if (response.status === 200) {
          alert('게시글 삭제 완료');
          window.history.back(-1);
        } else {
          alert('게시글 삭제 실패');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeletePr = async (prNo) => {
    if (window.confirm('리뷰를 삭제하시겠습니까?')) {
      try {
        const response = await boardApi.deletePrdelete(prNo);
        if (response.status === 200) {
          alert('게시글 삭제 완료');
          window.history.back(-1);
        } else {
          alert('게시글 삭제 실패');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };


  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <>
      <BackHeader />
      <CampBoardList
        crlist={crlist}
        prlist={prlist}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        onDeleteCr={handleDeleteCr} 
        onDeletePr={handleDeletePr} 
      />
      <CampOnFooter />
      <UserFooter />
    </>
  );
};

export default CampBoardMainCon;