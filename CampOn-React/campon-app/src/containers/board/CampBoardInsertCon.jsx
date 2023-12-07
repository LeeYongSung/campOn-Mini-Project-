import React, { useState, useEffect } from 'react';
import { getReservation, postCrinsert } from '../../apis/board';
import CampBoardInsert from '../../components/board/CampBoardInsert';
import UserFooter from '../../components/menu/UserFooter';
import CampOnFooter from '../../components/footer/CampOnFooter';
import OpenSearchHeader from '../../components/header/OpenSearchHeader';
import { useParams } from 'react-router-dom';

const CampBoardInsertCon = () => {
  const { reservationNo } = useParams(); // useParams를 사용하여 reservationNo 추출
  const [formValues, setFormValues] = useState({
    reservationNo: reservationNo, // reservationNo 초기값 설정
    campNo: '',
    cpdtNo: '',
    userNo: '',
    reviewTitle: '',
    reviewCon: '',
    reviewImgfile: null, // reviewImgfile 초기값 설정
  });

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await getReservation(reservationNo); // reservationNo를 이용하여 예약 정보 요청
        if (response.status === 200) {
          setFormValues({
            ...formValues, // 기존 formValues 유지
            campNo: response.data.campNo, // 서버 응답 데이터로 업데이트
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
    fetchReservation(); // useEffect 콜백 함수에서 예약 정보 요청
  }, [reservationNo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // FormData 객체 생성
    const formData = new FormData();
  
    // formValues의 각 요소를 FormData에 추가
    Object.entries(formValues).forEach(([key, value]) => {
      if (value !== null) { // reviewImgfile 키의 값이 null이 아닌 경우 파일 객체 추가
        formData.append(key, value);
      }
    });
  
    try {
      // 서버에 게시글 등록 요청
      const response = await postCrinsert(formData);
  
      // 요청 성공 시
      if (response.status === 201) {
        alert('게시글 등록 완료');
      }
      // 요청 실패 시
      else {
        alert('게시글 등록 실패');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <OpenSearchHeader />
      <CampBoardInsert
        reservationNo={reservationNo} // reservationNo props 전달
        onSubmit={handleSubmit} // handleSubmit 함수 props 전달
        formValues={formValues} // formValues props 전달
        setFormValues={setFormValues} // setFormValues 함수 props 전달
      />
      <CampOnFooter />
      <UserFooter />
    </>
  );
};

export default CampBoardInsertCon;