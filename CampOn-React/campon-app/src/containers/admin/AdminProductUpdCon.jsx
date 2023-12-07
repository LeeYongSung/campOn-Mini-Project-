import React from 'react'
import AdminProductUpd from '../../components/admin/AdminProductUpd'
import {useParams} from 'react-router-dom'

const AdminProductUpdCon = () => {
  const {productNo} = useParams()
  return (
    <>
    <AdminProductUpd productNo={productNo}/>
    </>
  )
}

export default AdminProductUpdCon