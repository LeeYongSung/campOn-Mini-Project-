import React, { useState, useEffect } from 'react';
import { getOrder, postPrinsert } from '../../apis/board';
import ProductBoardInsert from '../../components/board/ProductBoardInsert';
import UserFooter from '../../components/menu/UserFooter';
import CampOnFooter from '../../components/footer/CampOnFooter';
import { useParams } from 'react-router-dom';
import BackHeader from '../../components/header/BackHeader';

const ProductBoardInsertCon = () => {
  const { orderNo } = useParams(); 
  const [formValues, setFormValues] = useState({
    orderNo: orderNo,
    productNo: '',
    userNo: '',
    prTitle: '',
    prCon: '',
    prImgfile: null,
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getOrder(orderNo);
        if (response.status === 200) {
          setFormValues({
            ...formValues, 
            productNo: response.data.productNo, 
            userNo: response.data.userNo,
          });
        } else {
          alert('주문 정보를 찾을 수 없습니다');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrder();
  }, [orderNo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
  
    formData.append('board', JSON.stringify(formValues)); // 'board' 파트 추가
    
    Object.entries(formValues).forEach(([key, value]) => {
      if (value !== null && key !== 'prImgfile') { // 'prImgfile'은 별도로 처리
        formData.append(key, value);
      }
    });

    if (formValues.prImgfile) { // 'prImgfile' 파트 추가
      formData.append('prImgfile', formValues.prImgfile);
    }
  
    try {
      const response = await postPrinsert(formData);
  
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
      <ProductBoardInsert
        orderNo={orderNo} 
        onSubmit={handleSubmit} 
        formValues={formValues} 
        setFormValues={setFormValues}
      />
      <CampOnFooter />
      <UserFooter />
    </>
  );
};

export default ProductBoardInsertCon;