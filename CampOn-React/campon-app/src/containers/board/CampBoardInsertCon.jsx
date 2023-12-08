import React, { useState, useEffect } from 'react';
import { getReservation, postCrinsert } from '../../apis/board';
import CampBoardInsert from '../../components/board/CampBoardInsert';
import UserFooter from '../../components/menu/UserFooter';
import CampOnFooter from '../../components/footer/CampOnFooter';
import { useParams } from 'react-router-dom';
import BackHeader from '../../components/header/BackHeader';

const CampBoardInsertCon = () => {
  const { reservationNo } = useParams(); 
  const [formValues, setFormValues] = useState({
    reservationNo: reservationNo,
    campNo: '',
    cpdtNo: '',
    userNo: '',
    reviewTitle: '',
    reviewCon: '',
    reviewImgfile: null,
  });

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await getReservation(reservationNo);
        if (response.status === 200) {
          setFormValues({
            ...formValues,
            campNo: response.data.campNo,
            cpdtNo: response.data.cpdtNo,
            userNo: response.data.userNo,
            campName: response.data.campName,
            cpdtName: response.data.cpdtName,
          });
        } else {
          alert('예약 정보를 찾을 수 없습니다');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchReservation();
  }, [reservationNo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
  
    formData.append('board', JSON.stringify(formValues)); // 'board' 파트 추가
    
    Object.entries(formValues).forEach(([key, value]) => {
      if (value !== null && key !== 'reviewImgfile') { // 'reviewImgfile'은 별도로 처리
        formData.append(key, value);
      }
    });

    if (formValues.reviewImgfile) { // 'reviewImgfile' 파트 추가
      formData.append('reviewImgfile', formValues.reviewImgfile);
    }
  
    try {
      const response = await postCrinsert(formData);
  
      if (response.status === 201) {
        alert('게시글 등록 완료');
      }
      else {
        alert('게시글 등록 실패');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <BackHeader />
      <CampBoardInsert
        reservationNo={reservationNo} 
        onSubmit={handleSubmit} 
        formValues={formValues} 
        setFormValues={setFormValues}
      />
      <CampOnFooter />
      <UserFooter />
    </>
  );
};

export default CampBoardInsertCon;