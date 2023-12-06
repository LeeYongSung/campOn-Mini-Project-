import React, { useEffect, useState } from 'react'
import BackCartHeader from '../../components/header/BackCartHeader'
import ProductWishList from '../../components/product/ProductWishList'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import * as products from '../../apis/product'

const ProductWishListContainer = () => {

    const [ wishList, setWishList ] = useState();

    const getWishList = ( async () => {
        const response = await products.cartList();
        const data = await response.data;
        console.log(data);
        setWishList(data);
    });

    useEffect( () => {
        getWishList();
    }, []); 

  return (
    <>
        <BackCartHeader />
        
        <ProductWishList wishList={wishList}/>

        <CampOnFooter />

        <UserFooter />
    </>
  )
}

export default ProductWishListContainer