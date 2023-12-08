import React, { useContext, useEffect, useState } from 'react'
import BackCartHeader from '../../components/header/BackCartHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import ProductCart from '../../components/product/ProductCart'
import * as Products from '../../apis/product'
import { CategoryContext } from '../../apis/CategoryContext';
import { useNavigate } from 'react-router-dom';

const ProductCartContainer = () => {

    const [ cartList, setCartList ] = useState([]);
    const { setProductNo } = useContext(CategoryContext);

    const navigate = useNavigate();

    const productCheckout = (cartLength) => {
      console.log(cartLength);
      if (cartLength === 0) {
        alert('대여 상품이 없습니다.');
      } else {
        navigate("/product/payment");
      }
    }

    const getCartList = ( async () => {
        const response = await Products.cartList();
        const data = await response.data;
        console.log(data);
        setCartList(data);
    })

    const removeCart = ( async (cartNo) => {

      let ProductCart = window.confirm('상품을 삭제하겠습니까?');

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

        <ProductCart cartList={cartList} removeCart={removeCart} 
                     onProductClick={handleProductClick} productCheckout={productCheckout} />

        <CampOnFooter />

        <UserFooter />
    </>
  )
}

export default ProductCartContainer