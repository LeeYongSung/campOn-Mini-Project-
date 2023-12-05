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
    console.log(contextValue.productNo);

    const [ product, setProduct ] = useState();
    const [ productReview, setProductReview ] = useState();
    const [ reviewCount, serReviewCount ] = useState();

    const getPrdocut = async () => {
        const response = await products.productDetaile(productNo);
        const product = response.data.product;
        const productReview = response.data.proReviewList;
        const reviewCount = response.data.reviewCount;
        console.log(product);
        console.log(productReview);
        console.log(reviewCount);
        setProduct(product);
        setProductReview(productReview);
        serReviewCount(reviewCount)

    }

    useEffect(() => {
        getPrdocut();
    }, [productNo])

  return (
    <>
        <BackCartHeader />
        <ProductDetail product={product} reviewCount={reviewCount} />
        <ProductDetailReview productReview={productReview} />
        <ProductInformation />
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ProductDetailContainer