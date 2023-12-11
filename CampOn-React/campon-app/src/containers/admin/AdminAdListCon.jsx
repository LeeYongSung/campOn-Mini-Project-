import React from 'react'
import AdminAdList from '../../components/admin/AdminAdList'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import AdminFooter from '../../components/menu/AdminFooter'

const AdminAdListCon = () => {
  return (
    <>
     <BackHeader />
    <AdminAdList/>
    <CampOnFooter />
<AdminFooter />
    </>
  )
}

export default AdminAdListCon