import React from 'react'
import AdminCampUpd from '../../components/admin/AdminCampUpd'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const AdminCampUpdCon = () => {
  return (
    <>
    <BackHeader />
    <AdminCampUpd/>
    <CampOnFooter />
    <UserFooter />
    </>
  )
}

export default AdminCampUpdCon