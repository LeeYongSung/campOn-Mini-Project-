import React, { useContext, useEffect, useState } from 'react'
import * as user from '../../apis/user'
import UserLogin from '../../components/UserLogin';
import CampOnFooter from '../../components/footer/CampOnFooter';
import UserFooter from '../../components/menu/UserFooter';
import BackHeader from '../../components/header/BackHeader';
import { CategoryContext } from '../../apis/CategoryContext';
//(아이디저장, 자동로그인 기능 추가 예정)
const UserLoginCon = () => {
    const { login } = useContext(CategoryContext)
       const [rememberId, setRememberId] = useState('');
       const [userId, setUserId] = useState('');
       const onLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const username = form.userId.value
        const password = form.userPw.value
        login( username, password )
    }

       
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
           onLogin,
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