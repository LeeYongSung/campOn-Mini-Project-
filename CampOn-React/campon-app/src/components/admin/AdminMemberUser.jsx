import React from 'react'

const AdminMemberUser = ({user}) => {
  return (
    <>
      <div className={`w-100 border-bottom border-start border-end rounded-bottom mb-2 commemberlist_detail`}>
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
                  <span>{user.userTel}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="ps-2">
                  <span>수정일자</span>
                </div>
                <div className="pe-2">
                  <span>{user.updDate}</span>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default AdminMemberUser