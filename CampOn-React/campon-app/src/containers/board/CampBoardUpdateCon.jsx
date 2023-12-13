import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { getCrread, postCrupdate, deleteCrdelete } from '../../apis/board';
import CampBoardUpdate from '../../components/board/CampBoardUpdate';
import UserFooter from '../../components/menu/UserFooter';
import CampOnFooter from '../../components/footer/CampOnFooter';
import BackHeader from '../../components/header/BackHeader';

const CampBoardUpdateCon = () => {
  const navigate = useNavigate();
  const { reviewNo } = useParams();
  const [reservation, setReservation] = useState({});
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewImgfile, setReviewImgfile] = useState(null);
  const [reviewCon, setReviewCon] = useState('');

  const handle = (e) => {
    switch (e.target.name) {
      case "reviewTitle":
        setReviewTitle(e.target.value);
        break;
      case "reviewImgfile":
        setReviewImgfile(e.target.files);
        break;
      case "reviewCon":
        setReviewCon(e.target.value);
        break;
      default:
        break;
    }
  };

  const fetchReservation = async () => {
    try {
      const response = await getCrread(reviewNo);
      if (response.status === 200) {
        setReservation(response.data);
        setReviewTitle(response.data.reviewTitle);
        setReviewCon(response.data.reviewCon);
        console.log(response.data)
      } else {
        alert('예약 정보를 찾을 수 없습니다');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    console.log("수정 버튼 클릭됨");
    const formData = new FormData();
    if (reviewImgfile) {
      formData.append("reviewImgfile", reviewImgfile[0]);
    }
    formData.append("reviewTitle", reviewTitle)
    formData.append("reviewCon", reviewCon)
    formData.append("reviewNo", reservation.reviewNo)
    const headers = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    try {
      const response = await postCrupdate(formData, headers);
      if (response.status === 200) {
        alert('게시글 수정완료');
        navigate('/api/board/index');  // 원하는 경로로 변경하세요.
      }
    } catch (error) {
      console.error(error);
    }
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

  useEffect(() => {
    fetchReservation();
  }, []);

  return (
    <>
      <BackHeader />
      <CampBoardUpdate
        onDelete={handleDelete}
        reservation={reservation}
        handleSubmit={handleSubmit}
        handle={handle}
      />
      <CampOnFooter />
      <UserFooter />
    </>
  );
};
export default CampBoardUpdateCon;