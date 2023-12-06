import React, { useEffect, useState } from 'react'
import ProductPayment from '../../components/product/ProductPayment'
import BackCartHeader from '../../components/header/BackCartHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import * as products from '../../apis/product'

const ProductPaymentContainer = () => {

    const [ cartList, setCartList ] = useState();
    const [ reservationList, setReserVationList ] = useState();

    const getPayList = ( async () => {
        const response = await products.payment();
        const cartList = await response.data.cartList;
        const reserVationList = await response.data.reservationList;
        // console.log("cartList : " + cartList);
        // console.log("reserVationList : " + reserVationList);
        setCartList(cartList);
        setReserVationList(reserVationList);
    });

    useEffect( () => {
        getPayList();
    }, []);

  return (
    <>
        <BackCartHeader />
        <ProductPayment cartList={cartList} campList={reservationList} />
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ProductPaymentContainer