import React from 'react'
import AdminCampAdd from '../../components/admin/AdminCampAdd'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const AdminCampAddCon = () => {
  return (
    <>
    <BackHeader />
    <AdminCampAdd/>
    <CampOnFooter />
    <UserFooter />
    </>
  )
}

export default AdminCampAddCon