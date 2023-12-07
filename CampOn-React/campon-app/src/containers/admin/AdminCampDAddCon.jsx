import React from 'react'
import AdminCampDAdd from '../../components/admin/AdminCampDAdd'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import SellerFooter from '../../components/menu/SellerFooter'

const AdminCampDAddCon = () => {
  return (
    <>
    <BackHeader />
      <AdminCampDAdd />
      <CampOnFooter />
      <SellerFooter />
    </>
  )
}

export default AdminCampDAddCon