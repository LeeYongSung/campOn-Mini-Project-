import React, { useEffect, useState, useContext } from 'react'
import BackCartHeader from '../../components/header/BackCartHeader'
import ProductBanner from '../../components/product/ProductBanner'
import ProductMenu from '../../components/product/ProductMenu'
import MiddleAdvertisement from '../../components/product/MiddleAdvertisement'
import InformationUse from '../../components/product/InformationUse'
import FooterAdvertisement from '../../components/product/FooterAdvertisement'
import ProductReview from '../../components/product/ProductReview'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import Recommendedproducts from '../../components/product/Recommendedproducts'
import * as products from '../../apis/product'
import { CategoryContext } from '../../apis/CategoryContext'



const ProductIndexContainer = () => {
  // state
  const [ productReview, setProductReview ] = useState();
  const [ productHotList, setProductHotList ] = useState([]);
  const [ category ] = useState();
  const { setCategory } = useContext(CategoryContext);

  const getProductReview = async () => {
    const response = await products.Index();
    const proReview = await response.data.proReviewList;
    // console.log(proReview);
    setProductReview(proReview);
  };

  const getProductHotList = async () => {
    const response = await products.Index();
    const productHot = await response.data.productHotList;
    // console.log(productHot);
    setProductHotList(productHot);
  };

  const handleCategoryClick = async (category) => {
    const response = await products.category(category);
    const data = await response.data;
    // console.log(data);
    setCategory(data);
  };

  useEffect(() => {
    getProductReview();
    getProductHotList();
  }, []);

  return (
    <>
      {/* 뒤로가기 / 장바구니 버튼 있는 헤더 */}
      <BackCartHeader />

      {/* 프로덕트 상단 광고 배너 */}
      <ProductBanner />

      {/* 상품 메뉴 */}
      <ProductMenu onCategoryClick={handleCategoryClick} category={category} />

      {/* 추천 상품 */}
      <Recommendedproducts productHotList={productHotList}/>

      {/* 중단 광고 */}
      <MiddleAdvertisement />

      {/* 이용 안내 */}
      <InformationUse />

      {/* 하단 광고 */}
      <FooterAdvertisement />

      {/* 상품 후기 */}
      <ProductReview productReview={productReview}/>

      {/* 하단 푸터 */}
      <CampOnFooter />

      {/* 하단 메뉴 */}
      <UserFooter />
    </>
  )
}

export default ProductIndexContainer