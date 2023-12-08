import React from 'react'
import AdminProductAdd from '../../components/AdminProductAdd'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const AdminProductAddCon = () => {
  return (
    <>
    <BackHeader />
    <AdminProductAdd />
    <CampOnFooter />
    <UserFooter />
    </>
  )
}

export default AdminProductAddCon