import React, { useContext, useEffect, useState } from 'react'
import BackCartHeader from '../../components/header/BackCartHeader'
import ProductDetail from '../../components/product/ProductDetail'
import ProductDetailReview from '../../components/product/ProductDetailReview'
import ProductInformation from '../../components/product/ProductInformation'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import * as products from '../../apis/product';
import { CategoryContext } from '../../apis/CategoryContext';

const ProductDetailContainer = () => {

    
    const contextValue = useContext(CategoryContext);
    const productNo = contextValue.productNo;
    // console.log(contextValue.productNo);

    const [ product, setProduct ] = useState();
    const [ productReview, setProductReview ] = useState();
    const [ reviewCount, serReviewCount ] = useState();
    const [ moreState, setMoreState ] = useState(false);
    const [ rentInfo, setRentInfo] = useState(false)
    const [ productInfo, setProductInfo] = useState(false)
    // console.log(rentInfo);

    const getPrdocut = async () => {
        const response = await products.productDetaile(productNo);
        const product = response.data.product;
        const productReview = response.data.proReviewList;
        const reviewCount = response.data.reviewCount;
        // console.log(product);
        // console.log(productReview);
        // console.log(reviewCount);
        setProduct(product);
        setProductReview(productReview);
        serReviewCount(reviewCount)
    }

    const addProductsave = ( async (productNo) => {
      console.log(productNo);
      const response = await products.wishListAdd(productNo);
      const data = await response.data;
      // console.log(data);
      if(data === 'SUCCESS') alert('찜에 등록되었습니다.')
      else alert('이미 찜에 등록된 상품입니다.')
    })

    const moreBtn = () => {
      // console.log('들어옴');
      // console.log(moreState);
      setMoreState(true);
    }
    const rentInfoClick = () => {
      console.log('들어옴')
      setRentInfo(true);
    }
    const productInfoClick = () => {
      console.log('들어옴')
      setProductInfo(true);
    }

    useEffect(() => {
        getPrdocut();
    }, [productNo])

  return (
    <>
        <BackCartHeader />
        <ProductDetail product={product} reviewCount={reviewCount} addProductsave={addProductsave} moreBtn={moreBtn} moreState={moreState}/>
        <ProductDetailReview productReview={productReview} />
        <ProductInformation rentInfo={rentInfo} rentInfoClick={rentInfoClick} productInfoClick={productInfoClick} productInfo={productInfo} />
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ProductDetailContainer