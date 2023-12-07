import React from 'react'
import AdminProductUpd from '../../components/admin/AdminProductUpd'
import {useParams} from 'react-router-dom'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const AdminProductUpdCon = () => {
  const {productNo} = useParams()
  return (
    <>
    <BackHeader />
    <AdminProductUpd productNo={productNo}/>
    <CampOnFooter />
    <UserFooter />
    </>
  )
}

export default AdminProductUpdCon