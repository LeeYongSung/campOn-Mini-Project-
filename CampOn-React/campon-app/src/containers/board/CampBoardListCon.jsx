import React, { useState, useEffect, useContext } from 'react';
import CampBoardList from '../../components/board/CampBoardList';
import * as boardApi from '../../apis/board'
import { useLocation } from 'react-router-dom';
import UserFooter from '../../components/menu/UserFooter'
import CampOnFooter from '../../components/footer/CampOnFooter';
import BackHeader from '../../components/header/BackHeader';
import ReactPaginate from 'react-paginate'; 
import { CategoryContext } from '../../apis/CategoryContext';
import AdminFooter from '../../components/menu/AdminFooter';
import SellerFooter from '../../components/menu/SellerFooter';

const CampBoardListCon = () => {
  const { isLogin, userInfo, roles } = useContext(CategoryContext);
  const [currentTab, setCurrentTab] = useState('camp');
  const [crlist, setCrlist] = useState([]);
  const [prlist, setPrlist] = useState([]);
  const [newReviewList, setNewReviewList] = useState([]);
  const [newprlist, setNewprlist] = useState([]);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

  const fetchData = async () => {
    try {
      
      const response = await boardApi.getBoardlist();
      const data = response.data;
      console.log(data);
      setCrlist(data.crlist);
      setPrlist(data.prlist);
      setNewReviewList(data.newReviewList);
      setNewprlist(data.newprlist);
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

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setCurrentPage(0); // 탭 변경 시 페이지 초기화
  };

  useEffect(() => {

      fetchData();
  }, []);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    currentTab === 'camp' ? crlist.slice(indexOfFirstItem, indexOfLastItem) : prlist.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((currentTab === 'camp' ? crlist.length : prlist.length) / itemsPerPage);
  
  return (
    <>
      <BackHeader />
      <CampBoardList
        crlist={currentItems}
        prlist={currentItems}
        newReviewList={newReviewList}
        newprlist={newprlist}
        currentTab={currentTab}
        onTabChange={handleTabChange}
        onDeleteCr={handleDeleteCr}
        onDeletePr={handleDeletePr}
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
      { roles?.isUser && <UserFooter />}
      { roles?.isSell && <SellerFooter />}
      { roles?.isAdmin && <AdminFooter />}
    </>
  );
};

export default CampBoardListCon;