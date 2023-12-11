import React, { useState, useEffect } from 'react';
import CampBoardMain from '../../components/board/CampBoardMain';
import * as boardApi from '../../apis/board';
import { useLocation } from 'react-router-dom';
import UserFooter from '../../components/menu/UserFooter';
import CampOnFooter from '../../components/footer/CampOnFooter';
import BackHeader from '../../components/header/BackHeader';
import ReactPaginate from 'react-paginate';

const CampBoardMainCon = () => {
  const [currentTab, setCurrentTab] = useState('camp');
  const [newReviewList, setNewReviewList] = useState([]);
  const [crlist, setCrlist] = useState([]);
  const [newprlist, setNewprlist] = useState([]);
  const [prlist, setPrlist] = useState([]);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

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

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setCurrentPage(0); // 탭 변경 시 페이지 초기화
  };


  useEffect(() => {
    fetchData();
  }, [location]);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    currentTab === 'camp' ? crlist.slice(indexOfFirstItem, indexOfLastItem) : prlist.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((currentTab === 'camp' ? crlist.length : prlist.length) / itemsPerPage);

  return (
    <>
    <BackHeader />
    <CampBoardMain
      newReviewList={newReviewList}
      crlist={currentItems} // 수정된 부분
      newprlist={newprlist}
      prlist={currentItems} // 수정된 부분
      currentTab={currentTab}
      onTabChange={handleTabChange}
    />
     <ReactPaginate
        previousLabel={'이전'}
        nextLabel={'다음'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    <CampOnFooter />
    <UserFooter />
  </>
  );
};

export default CampBoardMainCon;