import React from 'react'
import ProductListCategory from '../../components/product/ProductListCategory'
import ProductListItem from '../../components/product/ProductListItem'
import BackCartHeader from '../../components/header/BackCartHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const ProductListContainer = () => {
  return (
    <>
        <BackCartHeader />
        <ProductListCategory />
        <ProductListItem />
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ProductListContainer