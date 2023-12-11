import React, { useEffect, useState } from 'react'
import * as users from '../apis/user'
import { useNavigate } from 'react-router-dom'

const UserUpdate = ({sets}) => {
   
    const userId = sets.userId;
    const userName = sets.userName;
    const setUserName = sets.setUserName;
    const userEmail = sets.userEmail;
    const setUserEmail = sets.setUserEmail;
    const userTel = sets.userTel;
    const setUserTel = sets.setUserTel;
    const userAddress = sets.userAddress;
    const setUserAddress = sets.setUserAddress;
    const userPw = sets.userPw;
    const setUserPw = sets.setUserPw;
    const passwordCheck = sets.passwordCheck;
    const setPasswordCheck = sets.setPasswordCheck;
    const companyName = sets.companyName;
    const setCompanyName = sets.setCompanyName;
    const companyNumber = sets.companyNumber;
    const setCompanyNumber = sets.setCompanyNumber;
    const handlesetUserName = sets.handlesetUserName;
    const handlesetUserEmail = sets.handlesetUserEmail;
    const handlesetUserTel = sets.handlesetUserTel;
    const handlesetUserAddress = sets.handlesetUserAddress;
    const handlesetPassword = sets.handlesetPassword;
    const handlesetPasswordCheck = sets.handlesetPasswordCheck;
    const handlesetCompanyName = sets.handlesetCompanyName;
    const handlesetCompanyNumber = sets.handlesetCompanyNumber;
    const getUpd = sets.getUpd;
    const handleSubmit = sets.handleSubmit;
    const handleDel = sets.handleDel;


    return (
        <>
            <div className="container-sm" style={{marginBottom : '100px'}}>
                <div id="joinForm">
                    <h3>회원정보를 수정해주세요.</h3>
                    <form name="joinForm">
                        <div className="form-floating">
                            <input type="text" id="id" name="userId" placeholder="" className="form-control my-3" value={userId} readOnly/>
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