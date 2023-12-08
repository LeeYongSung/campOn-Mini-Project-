import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPrread, postPrupdate, deletePrdelete } from '../../apis/board';
import ProductBoardUpdate from '../../components/board/ProductBoardUpdate';
import UserFooter from '../../components/menu/UserFooter';
import CampOnFooter from '../../components/footer/CampOnFooter';
import BackHeader from '../../components/header/BackHeader';

const ProductBoardUpdateCon = () => {
  const { prNo } = useParams();
  const [formValues, setFormValues] = useState({
    prNo: prNo,
    prTitle: '',
    prCon: '',
    prImgfile: null,
  });

  useEffect(() => {
    const fetchPr = async () => {
      try {
        const response = await getPrread(prNo);
        if (response.status === 200) {
          setFormValues({
            ...formValues,
            prTitle: response.data.prTitle,
            prCon: response.data.prCon,
            productName: response.data.productName,
            productCategory: response.data.productCategory,
          });
        } else {
          alert('리뷰 정보를 찾을 수 없습니다');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPr();
  }, [prNo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postPrupdate(formValues);
      if (response.status === 200) {
        alert('게시글 수정 완료');
      } else {
        alert('게시글 수정 실패');
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

  return (
    <>
      <BackHeader />
      <ProductBoardUpdate
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

export default ProductBoardUpdateCon;