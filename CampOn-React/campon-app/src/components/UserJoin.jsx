import React, { useEffect, useState } from 'react'
import * as users from '../apis/user'
import { useNavigate } from 'react-router-dom'
const UserJoin = () => {
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
    console.log('들어와?/')

    let handleUserBtnClick = () => {
        setAuth('ROLE_USER')
        // console.log('auth는', auth)
        const typeButtons = document.querySelectorAll('.typeBtn');
        const typeBtn = document.getElementById('typeBtn');
        const authSell = document.getElementById('authSell');
        const authUser = document.getElementById('authUser');
        const company = document.getElementById('company');
        let joinForm = document.getElementById('joinForm')
        console.log('여기는?/')
        console.log(joinForm); // 확인용 로그
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
        console.log(joinForm); // 확인용 로그
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


    const handleSubmit = async () => {
        console.log('auth는', auth)
        console.log(auth, userId, userName, userEmail, userTel, userAddress, userPw, companyName, companyNumber)
        try {
            const response = await users.join(auth, userId, userName, userEmail, userTel, userAddress, userPw, companyName, companyNumber)
            alert('회원가입 성공')
            console.log(response.data)
            navigate('')
        } catch (error) {
            console.log(auth, userId, userName, userEmail, userTel, userAddress, userPw, companyName, companyNumber)
            console.log(error)
        }
    }

    useEffect(() => {
    //    handleUserBtnClick()
    //    handleSellBtnClick()
        // joincloseClick()
        // handleSubmit()
    }, [])



    return (
        <>
            <h1>auth : {auth}</h1>
            <div className="container" id="typeBtn">
                <div className="w-100 text-center py-5">
                    <h3>회원가입</h3>
                </div>
                <div className="w-100 text-left">
                    <span className="text-body-tertiary">회원유형을 선택해 주세요</span>
                </div>
                <button className="typeBtn btn btn-outline-secondary w-100 py-5 my-2" id="userBtn" onClick={handleUserBtnClick}>일반 회원</button>
                <button className="typeBtn btn btn-outline-secondary w-100 py-5 my-2" id="sellBtn" onClick={handleSellBtnClick}>기업 회원</button>
                <div className="text-body-tertiary mb-5">
                    <span className="company_join_info">※ 기업 회원의 경우 별도의 승인이 필요하여 원활한 승인을 위해 가입 신청 후 CampOn 이메일로 사업자 등록증을 송부하여 주시기 바랍니다. </span>
                </div>
            </div>

            <div className="container-sm">
                <div id="joinForm" className="none">
                    <div className="text-end w-100 mt-2">
                        <button className="btn btn-danger join_close" id='join_close' onClick={joincloseClick}>닫기</button>
                    </div>
                    <div className="text-center w-100 my-5">
                        <h4>회원정보를 입력해주세요.</h4>
                    </div>
                    <form name="joinForm">
                        <input type="hidden" id="authUser" name="auth" value='ROLE_USER' readOnly />
                        <input type="hidden" id="authSell" name="auth" value="ROLE_SELL" readOnly />

                        <div className="form-floating">
                            <input type="text" id="id" name="userId" placeholder="" className="form-control my-3" value={userId} onChange={handlesetId} />
                            <label htmlFor="id">아이디는 영문과 숫자 조합만 가능합니다.</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" id="name" name="userName" placeholder="이름" className="form-control my-3" value={userName} onChange={handlesetUserName} />
                            <label htmlFor="name">이름</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" id="userEmail" name="userEmail" placeholder="이메일" className="form-control my-3" value={userEmail} onChange={handlesetUserEmail} />
                            <label htmlFor="userEmail">이메일</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" id="userTel" name="userTel" placeholder="010-1234-1234 형식으로 입력해주세요." className="form-control my-3" value={userTel} onChange={handlesetUserTel} />
                            <label htmlFor="userTel">핸드폰번호</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" id="userAddress" name="userAddress" placeholder="주소" className="form-control my-3" value={userAddress} onChange={handlesetUserAddress} />
                            <label htmlFor="address">주소</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" id="password" name="userPw" placeholder="8자 이상, 숫자와 영문 필수 포함" className="form-control my-3" value={userPw} onChange={handlesetPassword} />
                            <label htmlFor="password">비밀번호</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" id="passwordCheck" name="userPwCheck" placeholder="비밀번호를 동일하게 입력해주세요" className="form-control my-3" value={passwordCheck} onChange={handlesetPasswordCheck} />
                            <label htmlFor="passwordCheck">비밀번호 확인</label>
                        </div>

                        <div id="company">
                            <p>기업 정보를 입력하세요.</p>
                            <div className="form-floating">
                                <input type="text" id="companyName" name="companyName" placeholder="업체명" className="form-control my-3" value={companyName} onChange={handlesetCompanyName} />
                                <label htmlFor="companyName">업체명</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" id="companyNumber" name="companyNumber" placeholder="-없이 숫자로만 입력해주세요" className="form-control my-3" value={companyNumber} onChange={handlesetCompanyNumber} />
                                <label htmlFor="companyNumber">사업자번호</label>
                            </div>
                        </div>
                        <input type="button" className="btn btn-warning w-100 py-3 my-2" onClick={handleSubmit} value="회원가입" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserJoin