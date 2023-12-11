import React, { useEffect, useState } from 'react'
import * as user from '../../apis/user'
import UserLogin from '../../components/UserLogin';
import CampOnFooter from '../../components/footer/CampOnFooter';
import UserFooter from '../../components/menu/UserFooter';
import BackHeader from '../../components/header/BackHeader';
//(로그인, 아이디저장, 자동로그인 기능 추가 예정)
const UserLoginCon = () => {
       // {"rememberId":false,"userId":""}
       const [rememberId, setRememberId] = useState('');
       const [userId, setUserId] = useState('');
       const getLogin = async () => {
           const response = await response.data;
           console.log(response, 'response는?');
           setRememberId(response.rememberId)
           setUserId(response.userId)
       }
       
       // const [userId, setUserId] = useState('')
       const [userPw, setUserPw] = useState('')
       const handleUserId = (e) => {
           setUserId(e.target.value)
       }
       const handleUserPw = (e) => {
           setUserPw(e.target.value)
       }
   
       const sets = {
           rememberId, setRememberId,
           userId, setUserId,
           getLogin,
           userPw, setUserPw,
           handleUserId,
           handleUserPw
       };
    return (
        <>
        <BackHeader/>
            <UserLogin sets={sets}/>
            {/* <UserLogin rememberId={rememberId} userId={userId} /> */}
            <CampOnFooter />
        <UserFooter />
        </>
    )
}

export default UserLoginCon