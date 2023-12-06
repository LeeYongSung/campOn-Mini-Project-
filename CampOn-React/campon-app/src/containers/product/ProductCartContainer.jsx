import React, { useContext, useEffect, useState } from 'react'
import BackCartHeader from '../../components/header/BackCartHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import ProductCart from '../../components/product/ProductCart'
import * as Products from '../../apis/product'
import { CategoryContext } from '../../apis/CategoryContext';

const ProductCartContainer = () => {

    const [ cartList, setCartList ] = useState([]);
    const { setProductNo } = useContext(CategoryContext);

    const getCartList = ( async () => {
        const response = await Products.cartList();
        const data = await response.data;
        console.log(data);
        setCartList(data);
    })

    const removeCart = ( async (cartNo) => {

      let ProductCart = confirm('상품을 삭제하겠습니까?');

      if(ProductCart) {
        const response = await Products.removeCart(cartNo);
        const data = await response.data;
        console.log(data);
        alert('삭제가 완료되었습니다.')
        getCartList();
      } 
    })

    const handleProductClick = ( (productNo) => {
      setProductNo(productNo);
    })

    useEffect(() => {
        getCartList();
    }, [])

  return (
    <>
        <BackCartHeader />

        <ProductCart cartList={cartList} removeCart={removeCart} onProductClick={handleProductClick} />

        <CampOnFooter />

        <UserFooter />
    </>
  )
}

export default ProductCartContainer