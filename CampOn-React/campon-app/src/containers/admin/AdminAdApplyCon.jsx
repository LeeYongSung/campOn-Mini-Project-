import React from 'react'
import AdminAdApply from '../../components/admin/AdminAdApply'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import SellerFooter from '../../components/menu/SellerFooter'
import { useParams } from 'react-router'
const AdminAdApplyCon = () => {
  const {campNo} = useParams()
  return (
    <>
     <BackHeader />
    <AdminAdApply campNo={campNo}/>
    <CampOnFooter />
<SellerFooter />
    </>
  )
}

export default AdminAdApplyCon