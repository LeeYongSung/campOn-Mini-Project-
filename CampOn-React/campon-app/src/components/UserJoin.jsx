import React, { useEffect, useState } from 'react'

const UserJoin = () => {

    const [rollsell, setRollsell] = useState('ROLE_SELL')
    const [rolluser, setRolluser] = useState('ROLE_USER')

    useEffect(()=>{
        document.addEventListener("DOMContentLoaded", function() {
            var typeBtns = document.querySelectorAll(".typeBtn");
            var joinForm = document.getElementById("joinForm");
            var typeBtn = document.getElementById("typeBtn");
            var authSell = document.getElementById("authSell");
            var authUser = document.getElementById("authUser");
            var company = document.getElementById("company");
        
            typeBtns.forEach(function(btn) {
                btn.addEventListener("click", function() {
                    joinForm.style.display = "block";
                    typeBtn.style.display = "none";
        
                    if (this.id === "userBtn") {
                        authSell.disabled = true;
                        company.style.display = "none";
                    } else {
                        authUser.disabled = true;
                    }
                });
            });
        
            var joinCloseBtn = document.querySelector('.join_close');
            joinCloseBtn.addEventListener("click", function() {
                joinForm.style.display = "none";
                typeBtn.style.display = "block";
            });
        });
    }, [])
   


    return (
    <>
            <div class="container" id="typeBtn">
                <div class="w-100 text-center py-5">
                    <h3>회원가입</h3>
                </div>
                <div class="w-100 text-left">
                    <span class="text-body-tertiary">회원유형을 선택해 주세요</span>
                </div>
                <button class="typeBtn btn btn-outline-secondary w-100 py-5 my-2" id="userBtn">일반 회원</button>
                <button class="typeBtn btn btn-outline-secondary w-100 py-5 my-2" id="sellBtn">기업 회원</button>
                <div class="text-body-tertiary mb-5">
                    <span class="company_join_info">※ 기업 회원의 경우 별도의 승인이 필요하여 원활한 승인을 위해 가입 신청 후 CampOn 이메일로 사업자 등록증을 송부하여 주시기 바랍니다. </span>
                </div>
            </div>

            <div class="container-sm">
                <div id="joinForm" class="none">
                    <div class="text-end w-100 mt-2">
                        <button class="btn btn-danger join_close">닫기</button>
                    </div>
                    <div class="text-center w-100 my-5">
                        <h4>회원정보를 입력해주세요.</h4>
                    </div>
                    <form name="joinForm" action="/user/join" method="POST">
                        <input type="hidden" id="authUser" name="auth" value='ROLE_SELL' onChange={handleRoleChange}/>
                            <input type="hidden" id="authSell" name="auth" value="ROLE_SELL"/>

                                <div class="form-floating">
                                    <input type="text" id="id" name="userId" placeholder="" class="form-control my-3" />
                                    <label for="id">아이디는 영문과 숫자 조합만 가능합니다.</label>
                                </div>
                                <div class="form-floating">
                                    <input type="text" id="name" name="userName" placeholder="이름" class="form-control my-3" />
                                    <label for="name">이름</label>
                                </div>
                                <div class="form-floating">
                                    <input type="text" id="userEmail" name="userEmail" placeholder="이메일" class="form-control my-3" />
                                    <label for="userEmail">이메일</label>
                                </div>
                                <div class="form-floating">
                                    <input type="text" id="userTel" name="userTel" placeholder="010-1234-1234 형식으로 입력해주세요." class="form-control my-3" />
                                    <label for="userTel">핸드폰번호</label>
                                </div>
                                <div class="form-floating">
                                    <input type="text" id="userAddress" name="userAddress" placeholder="주소" class="form-control my-3" />
                                    <label for="address">주소</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" id="password" name="userPw" placeholder="8자 이상, 숫자와 영문 필수 포함" class="form-control my-3" />
                                    <label for="password">비밀번호</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" id="passwordCheck" name="userPwCheck" placeholder="비밀번호를 동일하게 입력해주세요" class="form-control my-3" />
                                    <label for="passwordCheck">비밀번호 확인</label>
                                </div>

                                <div id="company">
                                    <p>기업 정보를 입력하세요.</p>
                                    <div class="form-floating">
                                        <input type="text" id="companyName" name="companyName" placeholder="업체명" class="form-control my-3" />
                                        <label for="companyName">업체명</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="text" id="companyNumber" name="companyNumber" placeholder="-없이 숫자로만 입력해주세요" value="0" class="form-control my-3" />
                                        <label for="companyNumber">사업자번호</label>
                                    </div>
                                </div>
                                <input type="submit" class="btn btn-warning w-100 py-3 my-2" value="회원가입"/>
                                </form>
                            </div>
                        </div>
                    </>
                    )
}

                    export default UserJoin