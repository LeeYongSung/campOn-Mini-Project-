import React, { useEffect, useState } from 'react'
import UserJoin from '../../components/UserJoin'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import * as users from '../../apis/user'
import { useNavigate } from 'react-router-dom'
//완
const UserJoinCon = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useState('')
  const [userId, setUserId] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userTel, setUserTel] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userPw, setUserPw] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyNumber, setCompanyNumber] = useState(0)
  const handlesetId = (event) => {
      setUserId(event.target.value);
  }
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
  const typeButtons = document.querySelectorAll('.typeBtn');
  const typeBtn = document.getElementById('typeBtn');
  const authSell = document.getElementById('authSell');
  const authUser = document.getElementById('authUser');
  const company = document.getElementById('company');
  let handleUserBtnClick = () => {
      setAuth('ROLE_USER')
      const typeButtons = document.querySelectorAll('.typeBtn');
      const typeBtn = document.getElementById('typeBtn');
      const authSell = document.getElementById('authSell');
      const authUser = document.getElementById('authUser');
      const company = document.getElementById('company');
      let joinForm = document.getElementById('joinForm')
      if (!joinForm) {
          console.error("joinForm is null or undefined");
          return;
      }
      joinForm.style.display = 'block';
      console.log('돼?')
      typeBtn.style.display = 'none';
      authSell.disabled = true;
      company.style.display = 'none';
  }

  let handleSellBtnClick = () => {
      setAuth('ROLE_SELL')
      console.log('auth는', auth)
      const typeButtons = document.querySelectorAll('.typeBtn');
      const typeBtn = document.getElementById('typeBtn');
      const authSell = document.getElementById('authSell');
      const authUser = document.getElementById('authUser');
      const company = document.getElementById('company');
      let joinForm = document.getElementById('joinForm')
      if (!joinForm) {
          console.error("joinForm is null or undefined");
          return;
      }
      joinForm.style.display = 'block';
      typeBtn.style.display = 'none';
      authUser.disabled = true;
      company.style.display = 'block';
  }

  let joincloseClick = () => {
      const typeButtons = document.querySelectorAll('.typeBtn');
      const typeBtn = document.getElementById('typeBtn');
      const authSell = document.getElementById('authSell');
      const authUser = document.getElementById('authUser');
      const company = document.getElementById('company');
      let joinForm = document.getElementById('joinForm')
      const joincloseBtn = document.getElementById('join_close');
      joinForm.style.display = 'none';
      typeBtn.style.display = 'block';
  }


  const [userIdList, setUserIdList] = useState([])
  const idid = async ()=>{
      const response = await users.getjoin()
      setUserIdList(await response.data)
      console.log(userIdList)
  }
  const handleSubmit = async () => {
      if (!/^[a-zA-Z0-9]+$/.test(userId)) {
          alert("아이디는 영문과 숫자 조합만 가능합니다.");
          return;
      }
      for (let i = 0; i < userIdList.length; i++) {
          if (userId == userIdList[i]) {
              alert("아이디 중복. 다른 아이디를 입력해주세요")
              return
          }
      }
      // if (!/^[가-힣]{1,5}$/.test(userName)) {
      if (!/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,5}$/.test(userName)) {
          alert("이름은 1자에서 5자까지의 한글로 입력해주세요.");
          return ;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
          alert("올바른 이메일 주소를 입력해주세요.");
          return ;
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

      console.log('auth는', auth)
      console.log(auth, userId, userName, userEmail, userTel, userAddress, userPw, companyName, companyNumber)
      try {
          const response = await users.join(auth, userId, userName, userEmail, userTel, userAddress, userPw, companyName, companyNumber)
          alert('회원가입 성공')
          console.log(response.data)
          navigate('/')
      } catch (error) {
          console.log(auth, userId, userName, userEmail, userTel, userAddress, userPw, companyName, companyNumber)
          console.log(error)
      }
  }

  const sets = {
    auth, setAuth,
    userId, setUserId,
    userName, setUserName,
    userEmail, setUserEmail,
    userTel, setUserTel,
    userAddress, setUserAddress,
    userPw, setUserPw,
    passwordCheck, setPasswordCheck,
    companyName, setCompanyName,
    companyNumber, setCompanyNumber,
    handlesetId,
    handlesetUserName,
    handlesetUserEmail,
    handlesetUserTel,
    handlesetUserAddress,
    handlesetPassword,
    handlesetPasswordCheck,
    handlesetCompanyName,
    handlesetCompanyNumber,
    typeButtons,
    typeBtn,
    authSell,
    authUser,
    company,
    handleUserBtnClick,
    handleSellBtnClick,
    joincloseClick,
    userIdList, setUserIdList,
    idid,
    handleSubmit
  };

  useEffect(() => {
      idid()
  }, [])


  return (
    <>
    <BackHeader/>
    <UserJoin sets={sets}/>
    <CampOnFooter />
    <UserFooter />
    </>
  )
}

export default UserJoinCon