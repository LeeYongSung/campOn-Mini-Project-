import React, { useState, useEffect } from 'react';
import { getOrder, postPrinsert } from '../../apis/board';
import ProductBoardInsert from '../../components/board/ProductBoardInsert';
import UserFooter from '../../components/menu/UserFooter';
import CampOnFooter from '../../components/footer/CampOnFooter';
import { useParams } from 'react-router-dom';
import BackHeader from '../../components/header/BackHeader';

const ProductBoardInsertCon = () => {
  const { orderNo } = useParams();
  const [order, setOrder] = useState({});
  const [prTitle, setPrTitle] = useState('');
  const [prImgfile, setPrImgfile] = useState(null);
  const [prCon, setPrCon] = useState('');

  const handle = (e) => {
    switch (e.target.name) {
      case "prTitle": setPrTitle(e.target.value)
        break;
      case "prImgfile": setPrImgfile(e.target.files)
        break;
      case "prCon": setPrCon(e.target.value)
        break;
    }
  }

  const fetchOrder = async () => {
    try {
      const response = await getOrder(orderNo);
      if (response.status === 200) {
        setOrder(response.data);
        console.log(response.data)
      } else {
        alert('주문 정보를 찾을 수 없습니다');
      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleSubmit = async () => {
    const formData = new FormData();
    if (prImgfile) {
      formData.append("prImgfile", prImgfile[0]);
    }
    formData.append("orderNo", order.orderNo)
    formData.append("userNo", order.userNo)
    formData.append("productNo", order.productNo)
    formData.append("prTitle", prTitle)
    formData.append("prCon", prCon)
    const headers = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    
    try {
      const response = await postPrinsert(formData, headers);
      if (response.status === 201) {
        alert('게시글 등록 완료');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      <BackHeader />
      <ProductBoardInsert
        order={order}
        handleSubmit={handleSubmit}
        handle={handle}
      />
      <CampOnFooter />
      <UserFooter />
    </>
  );
};

export default ProductBoardInsertCon;