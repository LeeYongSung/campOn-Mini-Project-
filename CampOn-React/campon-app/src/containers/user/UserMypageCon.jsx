import React, { useState } from 'react'
import UserMypage from '../../components/UserMypage'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import SellerFooter from '../../components/menu/SellerFooter'
import AdminFooter from '../../components/menu/AdminFooter'
import { useNavigate } from 'react-router'
//완
const UserMypageCon = () => {
  const [userId, setUserId] = useState('testId') //하드코딩
  const [userAuth, setUserAuth] = useState('ROLE_USER')//하드코딩
  const nav = useNavigate()
  const logout = ()=>{
      nav('/user/login')
  }

  const sets = {
    userId,setUserId,
    userAuth,setUserAuth,
    logout
};
  return (
    <>
    <BackHeader/>
        <UserMypage sets={sets}/>
        <CampOnFooter />

       {
        (userAuth === 'ROLE_USER' &&  <UserFooter />)
       } 
        {
        (userAuth === 'ROLE_SELL' &&  <SellerFooter />)
       } 
       {
        (userAuth === 'ROLE_ADMIN' &&  <AdminFooter />)
       } 
    </>
  )
}

export default UserMypageCon