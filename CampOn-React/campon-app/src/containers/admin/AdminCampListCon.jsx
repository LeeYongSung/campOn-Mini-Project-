import React from 'react'
import AdminCampList from '../../components/admin/AdminCampList'
import BackHeader from '../../components/header/BackHeader'
import SellerFooter from '../../components/menu/SellerFooter'
import AdminFooter from '../../components/menu/AdminFooter'
import CampOnFooter from '../../components/footer/CampOnFooter'

const AdminCampListCon = () => {
  const userAuth = 'ROLE_ADMIN' //하드코딩
  return (
    <>
      <BackHeader />
      <AdminCampList />
      <CampOnFooter />
      {
        (userAuth === 'ROLE_SELL' && <SellerFooter />)
      }
      {
        (userAuth === 'ROLE_ADMIN' && <AdminFooter />)
      }
    </>
  )
}

export default AdminCampListCon