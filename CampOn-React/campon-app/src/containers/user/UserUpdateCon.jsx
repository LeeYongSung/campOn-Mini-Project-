import React, { useContext, useEffect, useState } from 'react'
import UserUpdate from '../../components/UserUpdate'
import BackHeader from '../../components/header/BackHeader'
import UserFooter from '../../components/menu/UserFooter'
import SellerFooter from '../../components/menu/SellerFooter'
import { CategoryContext } from '../../apis/CategoryContext'
import { useNavigate } from 'react-router-dom'
import * as users from '../../apis/user'
//완
const UserUpdateCon = () => {
  const { isLogin, roles, logout} = useContext(CategoryContext)
  const [ userInfo, setUserInfo ] = useState()
  const navigate = useNavigate()


  // 회원 정보 조회 - /user/info
  const getUserInfo = async () => {
    // 비로그인 또는 USER 권한이 없으면 ➡ 로그인 페이지로 이동
    if( !isLogin && !roles.isUser && !roles.isSell) {
      console.log(`isLogin : ${isLogin}`);
      console.log(`roles.isUser : ${roles?.isUser}`);
      console.log(`roles.isSell : ${roles?.isSell}`);
      console.log(`roles.isAdmin : ${roles?.isAdmin}`);
      navigate("/user/login")
      alert(`재로그인해주세요 (관리자는 회원정보 수정이 불가합니다.) `)
      return
    }
    const response = await users.info()
    const data = response.data
    console.log(`userInfo`);
    // setUserId(userInfo?.userId)
    console.log(data);
    //null  authList  :   Array(1)  0  :   {authNo: 0, userId: 'user', auth: 'ROLE_USER'}  length  :   1  [[Prototype]]  :   Array(0)  companyName  :   null  companyNumber  :   null  regDate  :   null  updDate  :   null  userAddress  :   null  userEmail  :   "user@user.com"  userId  :   "user"  userName  :   "길동이"  userNo  :   2  userPw  :   null  userPwCheck  :   null  userTel  :   null
    setUserInfo(data)
  }


  const handleDel = async () => {
    let response 
    let data
    try {
      response = users.deletee(userInfo?.userId)
      console.log(response.data)
      alert('회원탈퇴 성공')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
    
    data = response.data
    const status = response.status
    console.log(`data : ${data}`);
    console.log(`status : ${status}`);

    if( status === 200 ) {
      console.log(`회원삭제 성공!`);
      alert(`회원삭제 성공!`)
      logout()
    }
    else {
      console.log(`회원삭제 실패!`);
      alert(`회원삭제 실패!`)
    }

  }


  useEffect(() => {
    if( !isLogin ) {
      return
    }
    getUserInfo()
    console.log(`roles는? 왜안찍혀${roles}`)
    console.dir(roles)
  }, [isLogin])



  return (
    <>
      <BackHeader />
      <UserUpdate handleDel={handleDel}  userInfo={userInfo} roles={roles}/>
      {
        // (userAuth === 'ROLE_USER' && <UserFooter />)
        (roles?.isUser && <UserFooter />)
      }
      {
        // (userAuth === 'ROLE_SELL' && <SellerFooter />)
        (roles?.isSell && <SellerFooter />)
      }
    </>
  )
}

export default UserUpdateCon