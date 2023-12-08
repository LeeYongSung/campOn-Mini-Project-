import React from 'react'
import AdminProductAdd from '../../components/AdminProductAdd'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
<<<<<<< HEAD
import AdminFooter from '../../components/menu/AdminFooter'
const AdminProductAddCon = () => {
  return (
    <>
<BackHeader />
<AdminProductAdd/>
<CampOnFooter />
<AdminFooter />
    </>
    )
=======
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
>>>>>>> main
}

export default AdminProductAddCon