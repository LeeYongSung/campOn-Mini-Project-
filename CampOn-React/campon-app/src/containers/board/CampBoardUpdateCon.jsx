import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCrread, postCrupdate, deleteCrdelete } from '../../apis/board';
import CampBoardUpdate from '../../components/board/CampBoardUpdate';
import UserFooter from '../../components/menu/UserFooter';
import CampOnFooter from '../../components/footer/CampOnFooter';
import BackHeader from '../../components/header/BackHeader';

const CampBoardUpdateCon = () => {
  const { reviewNo } = useParams();
  const [formValues, setFormValues] = useState({
    reviewNo: reviewNo,
    reviewTitle: '',
    reviewCon: '',
    reviewImgfile: null,
  });

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await getCrread(reviewNo);
        if (response.status === 200) {
          setFormValues(prevFormValues => ({
            ...prevFormValues,
            reviewTitle: response.data.reviewTitle,
            reviewCon: response.data.reviewCon,
            campName: response.data.campName,
            cpdtName: response.data.cpdtName,
          }));
        } else {
          alert('리뷰 정보를 찾을 수 없습니다');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchReview();
  }, [reviewNo, setFormValues]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedFormValues = {
      ...formValues,
      reviewTitle: event.target.reviewTitle.value,
      reviewCon: event.target.reviewCon.value,
    };
    try {
      const response = await postCrupdate(updatedFormValues);
      if (response.status === 200) {
        alert('게시글 수정 완료');
      } else {
        alert('게시글 수정 실패');
      }
    } catch (error) {
      console.error(error);
    }
    setFormValues(updatedFormValues);
  };

  const handleDelete = async () => {
    if (window.confirm('리뷰를 삭제하시겠습니까?')) {
      try {
        const response = await deleteCrdelete(reviewNo);
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
  
  return (
    <>
      <BackHeader />
      <CampBoardUpdate
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      formValues={formValues}
      setFormValues={setFormValues}
    />
      <CampOnFooter />
      <UserFooter />
    </>
  );
};

export default CampBoardUpdateCon;