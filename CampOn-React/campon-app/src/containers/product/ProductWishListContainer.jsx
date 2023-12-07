import React, { useContext, useEffect, useState } from 'react'
import BackCartHeader from '../../components/header/BackCartHeader'
import ProductWishList from '../../components/product/ProductWishList'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import * as products from '../../apis/product'
import { CategoryContext } from '../../apis/CategoryContext';

const ProductWishListContainer = () => {

    const [ wishList, setWishList ] = useState();
    const { setProductNo } = useContext(CategoryContext);

    const getWishList = ( async () => {
        const response = await products.wishList();
        const data = await response.data;
        console.log(data);
        setWishList(data);
    });

    const handleProductClick = ( (productNo) => {
      setProductNo(productNo);
    })

    const addCart = ( async (productNo) => {
      let userNo = 2;
      let pNo = productNo;
      const response = await products.addProductsave(pNo, userNo);
      const data = response.data;
      if( data === 'SUCCESS') alert('장바구니에 등록되었습니다.');
      else alert('이미 장바구니에 등록된 상품 입니다.')
    })

    const addCartAll = ( async () => {
      const response = await products.addCartAll();
      const data = response.data;
      console.log(data);
      if(data != 0) {
        alert(data + '개의 상품이 장바구니에 담겼습니다.')
      } else {
        alert('이미 장바구니에 있는 상품입니다.');
        let moveCart = window.confirm('장바구니로 이동하시겠습니까?');
        if(moveCart) {
          
        } else {

        }
      }
    })

    const removeWishList = ( async (prductSaveNo) => {
      console.log(prductSaveNo);
      let ProductWish = window.confirm('상품을 삭제하겠습니까?');

      if(ProductWish) {
        const response = await products.removeWishList(prductSaveNo);
        const data = await response.data;
        console.log(data);
        alert('삭제가 완료되었습니다.')
        getWishList();
      } 
    })

    useEffect( () => {
        getWishList();
    }, []); 

  return (
    <>
        <BackCartHeader />
        
        <ProductWishList wishList={wishList} onProductClick={handleProductClick} addCart={addCart} removeWishList={removeWishList} addCartAll={addCartAll}/>

        <CampOnFooter />

        <UserFooter />
    </>
  )
}

export default ProductWishListContainer