import React from 'react'
import UserUpdate from '../../components/UserUpdate'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const UserUpdateCon = () => {
  return (
    <>
    <BackHeader />
    <UserUpdate/>
    <CampOnFooter />
    <UserFooter />
    </>
  )
}

export default UserUpdateCon