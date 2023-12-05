import React, { useEffect, useState } from 'react'
import BackCartHeader from '../../components/header/BackCartHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import ProductCart from '../../components/product/ProductCart'
import * as Products from '../../apis/product'

const ProductCartContainer = () => {

    const [ cartList, setCartList ] = useState([]);

    const getCartList = ( async () => {
        const response = await Products.cartList();
        const data = await response.data;
        console.log(data);
        setCartList(data);
    })

    useEffect(() => {
        getCartList();
    }, [])

  return (
    <>
        <BackCartHeader />

        <ProductCart cartList={cartList} />

        <CampOnFooter />

        <UserFooter />
    </>
  )
}

export default ProductCartContainer