import React from 'react'
import UserJoin from '../../components/UserJoin'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const UserJoinCon = () => {
  return (
    <>
      <BackHeader />
      <UserJoin/>
      <CampOnFooter />
      <UserFooter />
    </>
  )
}

export default UserJoinCon