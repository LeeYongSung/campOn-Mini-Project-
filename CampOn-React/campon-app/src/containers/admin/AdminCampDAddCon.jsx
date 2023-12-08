import React from 'react'
import AdminCampDAdd from '../../components/admin/AdminCampDAdd'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const AdminCampDAddCon = () => {
  return (
    <>
      <BackHeader />
      <AdminCampDAdd />
      <CampOnFooter />
      <UserFooter />
    </>
  )
}

export default AdminCampDAddCon