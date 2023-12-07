import React from 'react'
import AdminCampList from '../../components/admin/AdminCampList'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const AdminCampListCon = () => {
  return (
   <>
   <BackHeader />
   <AdminCampList/>
   <CampOnFooter />
   <UserFooter />
   </>
  )
}

export default AdminCampListCon