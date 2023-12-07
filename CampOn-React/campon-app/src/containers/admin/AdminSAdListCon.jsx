import React from 'react'
import AdminSAdList from '../../components/admin/AdminSAdList'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import SellerFooter from '../../components/menu/SellerFooter'

const AdminSAdListCon = () => {
  return (
    <>
     <BackHeader />
    <AdminSAdList/>
    <CampOnFooter />
<SellerFooter />
    </>
  )
}

export default AdminSAdListCon