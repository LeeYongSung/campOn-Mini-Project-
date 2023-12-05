import React, { useEffect, useState } from 'react'
import BackCartHeader from '../../components/header/BackCartHeader'
import ProductDeposit from '../../components/product/ProductDeposit'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import * as products from '../../apis/product'

const ProductDepositCompContainer = () => {

    const [ order, setOrder ] = useState();
    const [ productList, setProductList ] = useState();
    const [ campList, setCampList ] = useState();
    const [ pmType, setPmType ] = useState();
    const [ userName, setUserName ] = useState();
    const [ paytotal, setPaytotal ] = useState();

    const getProductList = ( async () => {
        let orderNumber = "022204";
        const response = await products.deposit(orderNumber);
        const data = response.data;
        const order = response.data.order;
        const productList = response.data.order.productList;
        const campList = response.data.order.camp;
        const pmType = response.data.pmType;
        const userName = response.data.userName;
        const paytotal = response.data.paytotal;
        console.log(data);
        console.log(order);
        console.log(productList);
        console.log(campList);
        console.log(pmType);
        console.log(userName);
        console.log(paytotal);
        setOrder(order);
        setProductList(productList);
        setCampList(campList);
        setPmType(pmType);
        setUserName(userName);
        setPaytotal(paytotal);
    })

    useEffect( () => {
        getProductList();
    }, [])
  return (
    <>
        <BackCartHeader />
        <ProductDeposit order={order} productList={productList} campList={campList} pmType={pmType} userName={userName} paytotal={paytotal}/>
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ProductDepositCompContainer