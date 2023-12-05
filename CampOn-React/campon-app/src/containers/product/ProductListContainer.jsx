import React, { useEffect, useState, useContext } from 'react';
import ProductListCategory from '../../components/product/ProductListCategory';
import ProductListItem from '../../components/product/ProductListItem';
import BackCartHeader from '../../components/header/BackCartHeader';
import CampOnFooter from '../../components/footer/CampOnFooter';
import UserFooter from '../../components/menu/UserFooter';
import * as products from '../../apis/product';
import { CategoryContext } from '../../apis/CategoryContext';

const ProductListContainer = () => {

  const { category, setCategory } = useContext(CategoryContext);
  
  // const { productNo } = useState();
  const { setProductNo } = useContext(CategoryContext);


  const handleCategoryClick = async (category) => {
    // categoryData 변수를 제거하고, 직접 category를 전달합니다.
    const response = await products.category(category);
    const data = await response.data;
    console.log(data);
    setCategory(data);
  }

  const handleProductClick = async (productNo) => {
    setProductNo(productNo);
  }
  
  useEffect(() => {
    handleCategoryClick(category);
  }, []);

  console.log("리스트컨테이너 : " + category);

  return (
    <>
        <BackCartHeader />
        <ProductListCategory OnCategoryClick={handleCategoryClick} />
        <ProductListItem category={category} onProductClick={handleProductClick} />
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ProductListContainer