import React, { createContext, useEffect, useState } from 'react';
import * as users from './user'
import api from './api'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState();
  const [productNo, setProductNo] = useState();
    /*
        상태
        - 로그인 여부
        - 유저 정보
        - 권한 정보
        - 아이디 저장
    */
   /* -----------------------[State]-------------------------- */
    // 로그인 여부
    const [isLogin, setLogin] = useState(false);
    // 유저 정보
    const [userInfo, setUserInfo] = useState({})
    // 권한 정보
    const [roles, setRoles] = useState({isUser : false, isAdmin : false, isSell : false})
    // 아이디 저장
    const [remberUserId, setRemberUserId] = useState()
    /* -------------------------------------------------------- */
    // 페이지 이동
    const navigate = useNavigate()

    /* 
        💍✅ 로그인 체크
        - 쿠키에 jwt 가 있는지 확인
        - jwt 로 사용자 정보를 요청
    */
    const loginCheck = async () => {
        // 🍪 ➡ 💍 쿠키에서 jwt 토큰 가져오기
        const accessToken = Cookies.get("accessToken")
        console.log(`accessToken : ${accessToken}`);
        // accessToken (jwt) 이 없음
        if( !accessToken ) {
            console.log(`쿠키에 accessToken(jwt) 이 없음`);
            // 로그아웃 세팅
            logoutSetting()
            return
        }
        // accessToken (jwt) 이 있음
        // ➡ 💌 header 에 💍 jwt 담기
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
        console.log(`Bearer ${accessToken}`);
        // 👩‍💼 사용자 정보 요청
        let response
        let data
        try {
            response = await users.info()
            console.log(response)
            data = await response.data
            console.dir(data);
        } catch (error) {
            console.log(`error : ${error}`);
            console.log(`status : ${response.status}`);
            return;
        }
        // ❌ 인증 실패
        if( data == 'UNAUTHRIZED' || response.status == 401 ) {
            console.error(`accessToken (jwt) 이 만료되었거나 인증에 실패하였습니다.`);
            return
        }

        // ✅ 인증 성공
        console.log(`accessToken (jwt) 로큰으로 사용자 인증정보 요청 성공!`);
        // 로그인 세팅
        loginSetting(data, accessToken)
    }

    // 🔐 로그인 
    const login = async (username, password) => {
        console.log(`username : ${username}`);
        console.log(`password : ${password}`);
        try {
            const response = await users.login(username, password)
            const data = response.data
            const status = response.status
            const headers = response.headers
            const authroization = headers.authorization
            const accessToken = authroization.replace("Bearer ", "")  // 💍 JWT
            console.log(`data : ${data}`);
            console.log(`status : ${status}`);
            console.log(`headers : ${headers}`);
            console.log(`jwt : ${accessToken}`);
            // ✅ 로그인 성공
            if( status === 200 ) {
                // 💍 ➡ 🍪 쿠키에 accessToken(jwt) 저장
                Cookies.set("accessToken", accessToken)
                // 로그인 체크 ( /users/{userId}   <---  userData )
                loginCheck()
                // 여기
                alert(`로그인 성공`)
                // 메인 페이지로 이동
                navigate("/")
            }
        } catch (error) {
            alert(`아이디 또는 비밀번호가 일치하지 않습니다.`)
        }
    }

    // 🔓 로그아웃
    const logout = (force=false) => {
        if( force ) {
            // 로그아웃 세팅
            logoutSetting()
            // 페이지 이동 ➡ "/" (메인)
            navigate("/")
            return
        }        
        const check = window.confirm(`로그아웃하시겠습니까?`)
        // Swal.confirm("로그아웃하시겠습니까?", "로그아웃을 진행합니다.", "warning",
        //         (result) => {
        //             if( result.isConfirmed ) {
        //                 // 로그아웃 세팅
        //                 logoutSetting()

        //                 // 메인 페이지로 이동
        //                 navigate("/")
        //             }
        //         }
        //     )
        if( check ) {
            // 로그아웃 세팅
            logoutSetting()
            // 메인 페이지로 이동
            navigate("/")
        }

    }

    // 🔐 로그인 세팅
    // 👩‍💼 userData,  💍 accessToken (jwt)
    const loginSetting = (userData, accessToken) => {
        const { userNo, userId, authList } = userData
        const roleList = authList.map((auth) => auth.auth)
        console.log(`no : ${userNo}`);
        console.log(`userId : ${userId}`);
        console.log(`authList : ${authList}`);
        console.log(`roleList : ${roleList}`);
        // 🚀 axios 객체의 header(Authorization : `Bearer ${accessToken}`)
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        // 👩‍💼🔐 로그인 여부 : true
        setLogin(true)
        // 👩‍💼✅ 유저정보 세팅
        const updatedUserInfo = {userNo, userId, roleList}
        setUserInfo(updatedUserInfo)
        // 👮‍♀️✅ 권한정보 세팅
        const updatedRoles = { isUser : false, isAdmin : false, isSell: false }
        roleList.forEach( (role) => {
            if( role == 'ROLE_USER' ) updatedRoles.isUser = true
            if( role == 'ROLE_ADMIN' ) updatedRoles.isAdmin = true
            if( role == 'ROLE_SELL' ) updatedRoles.isSell = true
        })
        console.log(`updatedRoles : ${updatedRoles}`);
        console.dir(updatedRoles)
        setRoles(updatedRoles)
    }

    // 로그아웃 세팅
    const logoutSetting = () => {
        // 🚀❌ axios 헤더 초기화
        api.defaults.headers.common.Authorization = undefined;
        // 🍪❌ 쿠키 초기화
        Cookies.remove("accessToken")
        // 🔐❌ 로그인 여부 : false
        setLogin(false)
        // 👩‍💼❌ 유저 정보 초기화
        setUserInfo(null)
        // 👮‍♀️❌ 권한 정보 초기화
        setRoles(null)
    }

    useEffect( () => {
        // 로그인 체크
        loginCheck()
    }, [isLogin])

  return (
    <CategoryContext.Provider value={{ category, setCategory, productNo, setProductNo, isLogin, userInfo, roles, login, loginCheck, logout}}>
      {children}
    </CategoryContext.Provider>
  );
};