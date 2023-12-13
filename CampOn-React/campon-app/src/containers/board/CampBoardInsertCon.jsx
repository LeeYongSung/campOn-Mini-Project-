import React, { useState, useEffect } from 'react';
import { getReservation, postCrinsert } from '../../apis/board';
import CampBoardInsert from '../../components/board/CampBoardInsert';
import UserFooter from '../../components/menu/UserFooter';
import CampOnFooter from '../../components/footer/CampOnFooter';
import BackHeader from '../../components/header/BackHeader';
import { useNavigate, useParams } from 'react-router-dom';

const CampBoardInsertCon = () => {
  const navigate = useNavigate();
  const { reservationNo } = useParams();
  const [reservation, setReservation] = useState({});
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewImgfile, setReviewImgfile] = useState(null);
  const [reviewCon, setReviewCon] = useState('');

  const handle = (e) => {
    switch (e.target.name) {
      case "reviewTitle": setReviewTitle(e.target.value)
        break;
      case "reviewImgfile": setReviewImgfile(e.target.files)
        break;
      case "reviewCon": setReviewCon(e.target.value)
        break;
    }
  }

  const fetchReservation = async () => {
    try {
      const response = await getReservation(reservationNo);
      if (response.status === 200) {
        setReservation(response.data);
        console.log(response.data)
      } else {
        alert('예약 정보를 찾을 수 없습니다');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    if (reviewImgfile) {
      formData.append("reviewImgfile", reviewImgfile[0]);
    }
    formData.append("reviewTitle", reviewTitle)
    formData.append("reviewCon", reviewCon)
    formData.append("reservationNo", reservation.reservationNo)
    formData.append("campNo", reservation.campNo)
    formData.append("cpdtNo", reservation.cpdtNo)
    formData.append("userNo", reservation.userNo)
    const headers = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    try {
      const response = await postCrinsert(formData, headers);
      if (response.status === 201) {
        alert('게시글 등록 완료');
        navigate('/api/camp/reservation')
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReservation();
  }, []);

  return (
    <>
      <BackHeader />
      <CampBoardInsert
        reservation={reservation}
        handleSubmit={handleSubmit}
        handle={handle}
      />
      <CampOnFooter />
      <UserFooter />
    </>
  );
};
export default CampBoardInsertCon;