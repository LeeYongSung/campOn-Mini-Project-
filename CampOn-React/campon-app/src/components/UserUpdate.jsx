import React, { useEffect, useState } from 'react'
import * as users from '../apis/user'
import { useNavigate } from 'react-router-dom'

const UserUpdate = () => {

    const navigate = useNavigate()
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

    const handleSubmit = async () => {
        try {
            console.log(userId);
            const response = await users.update(userId, userName, userEmail, userTel, userAddress, userPw, companyName, companyNumber)
            alert('회원정보 수정 성공')
            console.log(response.data)
            //  navigate('')
        } catch (error) {
            console.log(error)
        }
    }
    const handleDel = async () => {
        try {
            const response = await users.deletee(userId)
            alert('회원탈퇴 성공')
            console.log(response.data)
            //  navigate('')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
    
    }, [])


    return (
        <>
            <div className="container-sm">
                <div id="joinForm">
                    <h3>회원정보를 수정해주세요.</h3>
                    <form name="joinForm">
                        <div className="form-floating">
                            <input type="text" id="id" name="userId" placeholder="" className="form-control my-3" value={userId} onChange={handlesetId} />
                            <label htmlFor="id">아이디</label>
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
                        <input type="button" onClick={handleSubmit} value="회원정보 수정" className="btn btn-warning btn-lg w-100 my-3" />
                    </form>
                    <a onClick={ handleDel } className="btn btn-danger btn-lg w-100 my-2">탈퇴하기</a>
                </div>
            </div>
        </>
    )
}

export default UserUpdate