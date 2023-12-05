import React, { useEffect, useState } from 'react'
import BackCartHeader from '../../components/header/BackCartHeader'
import ProductDeposit from '../../components/product/ProductDeposit'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import * as products from '../../apis/product'

const ProductDepositCompContainer = () => {
    const [ productList, setProductList ] = useState();

    const getProductList = ( async () => {
        let orderNumber = "3";
        const response = await products.deposit(orderNumber);
        const data = response.data;
        console.log(data);
        setProductList(data);
    })

    useEffect( () => {
        getProductList();
    })
  return (
    <>
        <BackCartHeader />
        <ProductDeposit />
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ProductDepositCompContainer