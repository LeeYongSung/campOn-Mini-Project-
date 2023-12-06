import React, { useState, useEffect } from 'react';
import CampBoardMain from '../../components/board/CampBoardMain';
import * as boardApi from '../../apis/board'

const CampBoardMainCon = () => {
  const [currentTab, setCurrentTab] = useState('camp');
  const [newReviewList, setNewReviewList] = useState([]);
  const [crlist, setCrlist] = useState([]);
  const [newprlist, setNewprlist] = useState([]);
  const [prlist, setPrlist] = useState([]);

  const fetchData = async () => {
    try {
      const response = await boardApi.getBoardlist();
      const data = response.data;
      console.log(data);
      setNewReviewList(data.newReviewList);
      setCrlist(data.crlist);
      setNewprlist(data.newprlist);
      setPrlist(data.prlist);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CampBoardMain
    newReviewList={newReviewList}
    crlist={crlist}
    newprlist={newprlist}
    prlist={prlist}
    currentTab={currentTab}
    onTabChange={setCurrentTab}
    />
  );
};

export default CampBoardMainCon;