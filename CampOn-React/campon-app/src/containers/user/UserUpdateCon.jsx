import React, { useEffect, useState } from 'react'
import UserUpdate from '../../components/UserUpdate'
import BackHeader from '../../components/header/BackHeader'
import UserFooter from '../../components/menu/UserFooter'
import SellerFooter from '../../components/menu/SellerFooter'
import { useNavigate } from 'react-router'
import * as users from '../../apis/user'
//완
const UserUpdateCon = () => {
  const userAuth = 'ROLE_USER' //하드코딩
  const userId = '1' //하드코딩
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userTel, setUserTel] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userPw, setUserPw] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyNumber, setCompanyNumber] = useState(0)
  const handlesetUserName = (event) => {
    setUserName(event.target.value);
  }
  const handlesetUserEmail = (event) => {
    setUserEmail(event.target.value);
  }
  const handlesetUserTel = (event) => {
    setUserTel(event.target.value);
  }
  const handlesetUserAddress = (event) => {
    setUserAddress(event.target.value);
  }
  const handlesetPassword = (event) => {
    setUserPw(event.target.value);
  }
  const handlesetPasswordCheck = (event) => {
    setPasswordCheck(event.target.value);
  }
  const handlesetCompanyName = (event) => {
    setCompanyName(event.target.value);
  }
  const handlesetCompanyNumber = (event) => {
    setCompanyNumber(event.target.value);
  }

  let user = {}
  const getUpd = async () => {
    try {
      const response = await users.getUpd(userId)
      user = await response.data
      console.log(user)
      setUserName(user.userName)
      setUserEmail(user.userEmail)
      setUserTel(user.userTel)
      setUserAddress(user.userAddress)
      setCompanyName(user.companyName)
      setCompanyNumber(user.companyNumber)

    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async () => {
    if (!/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,5}$/.test(userName)) {
      alert("이름은 1자에서 5자까지의 한글로 입력해주세요.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      alert("올바른 이메일 주소를 입력해주세요.");
      return;
    }
    if (!/^01[016789]\d{7,8}$/.test(userTel)) {
      alert("핸드폰 번호는 01012341234 형식으로 입력해주세요.");
      return false;
    }
    if (userPw.length < 8 || !/^(?=.*[0-9])(?=.*[a-zA-Z])/.test(userPw)) {
      alert("비밀번호는 8자 이상이어야 하며, 숫자와 영문자를 포함해야 합니다.");
      return false;
    }
    if (userPw !== passwordCheck) {
      alert("비밀번호 확인이 일치하지 않습니다.");
      return false;
    }

    try {
      console.log(userId);
      const response = await users.update(userId, userName, userEmail, userTel, userAddress, userPw, companyName, companyNumber)
      alert('회원정보 수정 성공')
      console.log(response.data)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  const handleDel = async () => {
    try {
      const response = users.deletee(userId)
      console.log(response.data)
      alert('회원탈퇴 성공')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const sets = {
    userId,
    userName, setUserName,
    userEmail, setUserEmail,
    userTel, setUserTel,
    userAddress, setUserAddress,
    userPw, setUserPw,
    passwordCheck, setPasswordCheck,
    companyName, setCompanyName,
    companyNumber, setCompanyNumber,
    handlesetUserName,
    handlesetUserEmail,
    handlesetUserTel,
    handlesetUserAddress,
    handlesetPassword,
    handlesetPasswordCheck,
    handlesetCompanyName,
    handlesetCompanyNumber,
    getUpd,
    handleSubmit,
    handleDel
};

  useEffect(() => {
    getUpd()
  }, [])



  return (
    <>
      <BackHeader />
      <UserUpdate sets={sets}/>
      {
        (userAuth === 'ROLE_USER' && <UserFooter />)
      }
      {
        (userAuth === 'ROLE_SELL' && <SellerFooter />)
      }
    </>
  )
}

export default UserUpdateCon