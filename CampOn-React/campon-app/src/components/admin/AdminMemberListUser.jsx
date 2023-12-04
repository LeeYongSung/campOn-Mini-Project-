import React from 'react'

const AdminMemberListUser = () => {
  return (
    <>
      <div id="tab01">
        <div className="py-3">
          <h5>일반 회원 리스트</h5>
        </div>
          <div className="border rounded-top py-4 position-relative mt-2">
            <div>
              <div className="d-flex justify-content-between py-2 mt-4">
                <div className="ps-3">
                  <span>아이디</span>
                </div>
                <div className="pe-3">
                  <span  text="{member.userId}"></span>
                </div>
              </div>
              <div className="d-flex justify-content-between py-2 ">
                <div className="ps-3">
                  <span>이메일</span>
                </div>
                <div className="pe-3">
                  <span  text="{member.userEmail}"></span>
                </div>
              </div>
              <div className="d-flex justify-content-between py-2 mb-3">
                <div className="ps-3">
                  <span>가입일자</span>
                </div>
                <div className="pe-3">
                  <span  text="{ #dates.format(member.regDate, 'yyyy-MM-dd')}"></span>
                </div>
              </div>
              <div className="position-absolute top-0 end-0 pe-1 pt-1">
                <a className="delbtn btn btn-outline-danger"  href="|/admin/memberDelete?userId={member.userId}|">회원 삭제</a>
              </div>
              <div className="position-absolute bottom-0 end-0 pe-1 memberlist_more_box">
                <a className="memberlist_more">더보기<span className="material-symbols-outlined">expand_more</span></a>
                <a className="memberlist_less none">접기<span className="material-symbols-outlined">expand_less</span></a>
              </div>
            </div>
          </div>
          <div className="w-100 border-bottom border-start border-end rounded-bottom mb-2 memberlist_detail none">
            <div className="py-3">
              <div className="d-flex justify-content-between py-1">
                <div className="ps-2">
                  <span>회원유형</span>
                </div>
                <div className="pe-2">
                  <span>일반 회원</span>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="ps-2">
                  <span>연락처</span>
                </div>
                <div className="pe-2">
                  <span  text="{member.userTel}"></span>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="ps-2">
                  <span>수정일자</span>
                </div>
                <div className="pe-2">
                  <span  text="{ #dates.format(member.updDate, 'yyyy-MM-dd')}"></span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default AdminMemberListUser