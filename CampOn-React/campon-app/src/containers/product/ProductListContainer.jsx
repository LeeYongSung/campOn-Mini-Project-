import React, { useEffect, useState, useContext, useRef } from 'react';
import ProductListCategory from '../../components/product/ProductListCategory';
import ProductListItem from '../../components/product/ProductListItem';
import BackCartHeader from '../../components/header/BackCartHeader';
import CampOnFooter from '../../components/footer/CampOnFooter';
import UserFooter from '../../components/menu/UserFooter';
import * as products from '../../apis/product';
import { CategoryContext } from '../../apis/CategoryContext';

const ProductListContainer = () => {

  const [ productNo ] = useState();

  const { category, setCategory } = useContext(CategoryContext);
  const { setProductNo } = useContext(CategoryContext);
  const prevCategoryRef = useRef();

  useEffect(() => {
    prevCategoryRef.current = category;
  });

  const prevCategory = prevCategoryRef.current;

  const handleCategoryClick = async (category) => {
    if (prevCategory !== category) {
      const response = await products.category(category);
      const data = await response.data;
      setCategory(data);
    }
  }

  const handleProductClick = async (productNo) => {
    setProductNo(productNo);
  }

  const addCart = ( async (productNo) => {
    let userNo = 2;
    let pNo = productNo;
    const response = await products.addProductsave(pNo, userNo);
    const data = response.data;
    if( data === 'SUCCESS') alert('장바구니에 등록되었습니다.');
    else alert('이미 장바구니에 등록된 상품 입니다.')
  })
  
  useEffect(() => {
    if (category !== prevCategoryRef.current) {
      handleCategoryClick(category);
    }
  }, [category]);

  // console.log("리스트컨테이너 : " + category);


  return (
    <>
        <BackCartHeader />
        <ProductListCategory OnCategoryClick={handleCategoryClick} />
        <ProductListItem category={category} onProductClick={handleProductClick} addCart={addCart} />
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ProductListContainer