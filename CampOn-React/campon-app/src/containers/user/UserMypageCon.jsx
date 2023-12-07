import React from 'react'
import UserMypage from '../../components/UserMypage'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
const UserMypageCon = () => {
  return (
    <>
        <BackHeader />
        <UserMypage/>
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default UserMypageCon