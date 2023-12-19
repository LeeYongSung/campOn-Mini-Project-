import React, { useContext, useEffect, useState } from 'react'
import UserMypage from '../../components/UserMypage'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import SellerFooter from '../../components/menu/SellerFooter'
import AdminFooter from '../../components/menu/AdminFooter'
import { CategoryContext} from '../../apis/CategoryContext'
import { useNavigate } from 'react-router-dom'
//완
const UserMypageCon = () => {

  const { userInfo, roles, logout, isLogin } = useContext(CategoryContext)

  const navigate = useNavigate()
  const logoutt = ()=>{
    logout()
    navigate('/user/login')
  }

  const sets = {
    logoutt
};

useEffect(()=>{
  if( !isLogin || !userInfo ) {
    alert(`로그인이 필요합니다.`)
    navigate("/user/login")
    return
  }
}, [userInfo])


  return (
    <>
    <BackHeader/>
        <UserMypage sets={sets} userInfo={userInfo} roles={roles}/>
        <CampOnFooter />

       {
        // (userAuth === 'ROLE_USER' &&  <UserFooter />)
        (roles?.isUser &&  <UserFooter />)
       } 
        {
        // (userAuth === 'ROLE_SELL' &&  <SellerFooter />)
        (roles?.isSell &&  <SellerFooter />)
       } 
       {
        // (userAuth === 'ROLE_ADMIN' &&  <AdminFooter />)
        (roles?.isAdmin &&  <AdminFooter />)
       } 
    </>
  )
}

export default UserMypageCon