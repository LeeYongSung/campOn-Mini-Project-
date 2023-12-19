import React, { useEffect, useState } from 'react'
import * as users from '../apis/user'
import { useNavigate } from 'react-router-dom'

const UserUpdate = ({ userInfo, handleDel, roles }) => {
    const navigate = useNavigate()
        const onUpdate = async (e) =>{
            e.preventDefault();
            const form = e.target;
            const userId = form.userId.value
            const userName = form.userName.value
            const userEmail = form.userEmail.value
            const userTel = form.userTel.value
            const userAddress = form.userAddress.value
            const userPw = form.userPw.value
            const userPwCheck = form.userPwCheck.value
            const companyName = form.companyName?.value || ''
            const companyNumber = form.companyNumber?.value || '0'
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
              if (userPw !== userPwCheck) {
                alert("비밀번호 확인이 일치하지 않습니다.");
                return false;
              }
          
              try {
                console.log(userInfo?.userId);
                console.log(`${userName, userEmail, userTel, userAddress, userPw, companyName, companyNumber}`)
                const response = await users.update(userInfo?.userId, userName, userEmail, userTel, userAddress, userPw, companyName, companyNumber)
                alert('회원정보 수정 성공')
                console.log(response.data)
                navigate('/')
              } catch (error) {
                console.log(error)
              }
        }





    return (
        <>
            <div className="container-sm" style={{ marginBottom: '100px' }}>
                <div id="joinForm">
                    <h3>회원정보를 수정해주세요.</h3>
                    <form className="joinForm" onSubmit={ (e) => onUpdate(e) }>
                    <div className="form-floating">
                        <input type="text" id="id" name="userId" className="form-control my-3" defaultValue={userInfo?.userId} readOnly />
                        <label htmlFor="id">아이디</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" id="name" name="userName" placeholder="이름" className="form-control my-3" defaultValue={userInfo?.userName} />
                        <label htmlFor="name">이름</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" id="userEmail" name="userEmail" placeholder="이메일" className="form-control my-3" defaultValue={userInfo?.userEmail} />
                        <label htmlFor="userEmail">이메일</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" id="userTel" name="userTel" placeholder="010-1234-1234 형식으로 입력해주세요." className="form-control my-3" defaultValue={userInfo?.userTel}  />
                        <label htmlFor="userTel">핸드폰번호</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" id="userAddress" name="userAddress" placeholder="주소" className="form-control my-3" defaultValue={userInfo?.userAddress} />
                        <label htmlFor="userAddress">주소</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" id="userPw" name="userPw" placeholder="8자 이상, 숫자와 영문 필수 포함" className="form-control my-3" required/>
                        <label htmlFor="password">비밀번호</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" id="userPwCheck" name="userPwCheck" placeholder="비밀번호를 동일하게 입력해주세요" className="form-control my-3"  required/>
                        <label htmlFor="passwordCheck">비밀번호 확인</label>
                    </div>
                    {
                        roles.isSell ? (
                            <div id="company">
                                <p>기업 정보를 입력하세요.</p>
                                <div className="form-floating">
                                    <input type="text" id="companyName" name="companyName" placeholder="업체명" className="form-control my-3" defaultValue={userInfo?.companyName} />
                                    <label htmlFor="companyName">업체명</label>
                                </div>
                                <div className="form-floating">
                                    <input type="text" id="companyNumber" name="companyNumber" placeholder="-없이 숫자로만 입력해주세요" className="form-control my-3" defaultValue={userInfo?.companyNumber}  />
                                    <label htmlFor="companyNumber">사업자번호</label>
                                </div>
                            </div>
                        ) : <></>
                    }

                    <input type="submit" value="회원정보 수정" className="btn btn-warning btn-lg w-100 my-3" />
                    </form>
                    <a onClick={handleDel} className="btn btn-danger btn-lg w-100 my-2">탈퇴하기</a>
                </div>
            </div>
        </>
    )
}

export default UserUpdate