import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPrread, postPrupdate, deletePrdelete } from '../../apis/board';
import ProductBoardUpdate from '../../components/board/ProductBoardUpdate';
import UserFooter from '../../components/menu/UserFooter';
import CampOnFooter from '../../components/footer/CampOnFooter';
import BackHeader from '../../components/header/BackHeader';

const ProductBoardUpdateCon = () => {
  const navigate = useNavigate();
  const { prNo } = useParams();
  const [reservation, setReservation] = useState({});
  const [prTitle, setPrTitle] = useState('');
  const [prImgfile, setPrImgfile] = useState(null);
  const [prCon, setPrcon] = useState('');

  const handle = (e) => {
    switch (e.target.name) {
      case "prTitle":
        setPrTitle(e.target.value);
        break;
      case "prImgfile":
        setPrImgfile(e.target.files);
        break;
      case "prCon":
        setPrcon(e.target.value);
        break;
      default:
        break;
    }
  };

  const fetchReservation = async () => {
    try {
      const response = await getPrread(prNo);
      if (response.status === 200) {
        setReservation(response.data);
        setPrTitle(response.data.prTitle);
        setPrcon(response.data.prCon);
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
    if (prImgfile) {
      formData.append("prImgfile", prImgfile[0]);
    }
    formData.append("prTitle", prTitle)
    formData.append("prCon", prCon)
    formData.append("prNo", reservation.prNo)
    const headers = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    try {
      const response = await postPrupdate(formData, headers);
      if (response.status === 201) {
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
        const response = await deletePrdelete(prNo);
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
      <ProductBoardUpdate
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

export default ProductBoardUpdateCon;