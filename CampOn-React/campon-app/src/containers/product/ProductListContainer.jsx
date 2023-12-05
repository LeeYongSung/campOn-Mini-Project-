import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProductListCategory from '../../components/product/ProductListCategory';
import ProductListItem from '../../components/product/ProductListItem';
import BackCartHeader from '../../components/header/BackCartHeader';
import CampOnFooter from '../../components/footer/CampOnFooter';
import UserFooter from '../../components/menu/UserFooter';
import * as products from '../../apis/product';
import { CategoryContext } from '../../apis/CategoryContext';

const ProductListContainer = () => {

  const { category } = useContext(CategoryContext);

  console.log("리스트컨테이너 : " + category);

  return (
    <>
        <BackCartHeader />
        <ProductListCategory />
        <ProductListItem category={category} />
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ProductListContainer