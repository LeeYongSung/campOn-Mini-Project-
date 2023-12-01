import React from 'react'

const UserLogin = ({ rememberId, userId }) => {


    return (
        <>
            <div className="login_banner">
                <div className="login_banner_back"></div>
                <div className="login_banner_txt">
                    <h4>캠핑온에 오신걸 환영합니다.</h4>
                </div>
            </div>

            <div className="container-sm">
                <form action="/loginPro" method="POST">
                    {/* 이렇게 하는거 맞을까..? */}
                    {/* <input type="hidden" name={`${_csrf.parameterName}`} value={`${_csrf.token}`} /> */}
                    <div className="form-floating my-3">
                        <input type="text" id="userId" name="userId" placeholder="아이디" value={userId} className="form-control" />
                        <label for="userId">아이디</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" id="userPw" name="userPw" placeholder="비밀번호" className="form-control" />
                        <label for="userPw">비밀번호</label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="form-check text-start my-3">
                            {(rememberId) ? <input type="checkbox" name="remember-id" id="remember-id" checked /> : <input type="checkbox" name="remember-id" id="remember-id" />}
                            {/* <th:block th:if="${rememberId}">  
                        <input type="checkbox" name="remember-id" id="remember-id" checked/>
                    </th:block>
                    <th:block th:if="${!rememberId}">  
                        <input type="checkbox" name="remember-id" id="remember-id" />
                    </th:block> */}
                            <label for="remember-id"><span></span>아이디 저장</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input type="checkbox" name="remember-me" id="remember-me" />
                            <label for="remember-me"><span></span>자동 로그인</label>
                        </div>
                    </div>
                    <input type="submit" value="로그인" className="btn btn-warning w-100 py-3" />
                    <div className="w-100 text-center py-3">
                        <a href="/user/join" className="w-100 text-center">회원가입하기</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserLogin