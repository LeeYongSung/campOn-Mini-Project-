import React, { useContext } from 'react'
import AdminCampList from '../../components/admin/AdminCampList'
import BackHeader from '../../components/header/BackHeader'
import SellerFooter from '../../components/menu/SellerFooter'
import AdminFooter from '../../components/menu/AdminFooter'
import CampOnFooter from '../../components/footer/CampOnFooter'
import { CategoryContext } from '../../apis/CategoryContext'

const AdminCampListCon = () => {
  // const userAuth = 'ROLE_ADMIN' 
  const {roles} = useContext(CategoryContext)
  return (
    <>
      <BackHeader />
      <AdminCampList />
      <CampOnFooter />
      {
        // (userAuth === 'ROLE_SELL' && <SellerFooter />)
        (roles.isSell && <SellerFooter />)
      }
      {
        // (userAuth === 'ROLE_ADMIN' && <AdminFooter />)
        (roles.isAdmin && <AdminFooter />)
      }
    </>
  )
}

export default AdminCampListCon