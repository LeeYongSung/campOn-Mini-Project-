import React from 'react'
import AdminCampAdd from '../../components/admin/AdminCampAdd'
import BackHeader from '../../components/header/BackHeader'
import SellerFooter from '../../components/menu/SellerFooter'
import CampOnFooter from '../../components/footer/CampOnFooter'

const AdminCampAddCon = () => {
  return (
    <>
     <BackHeader />
    <AdminCampAdd/>
    <CampOnFooter />
    <SellerFooter />
    </>
  )
}

export default AdminCampAddCon