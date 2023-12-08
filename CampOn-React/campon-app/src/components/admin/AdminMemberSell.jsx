import React from 'react'

const AdminMemberSell = ({user, active}) => {
  const formatData = (inputDate) =>{
    const date = new Date(inputDate);
    //포맷 형식 지정하기
    const year = date.getFullYear()
    const month = String(date.getMonth()+1).padStart(2,'0');
    const day= String(date.getDate()).padStart(2,'0');
    const hours= String(date.getHours()).padStart(2,'0');
    const minutes= String(date.getMinutes()).padStart(2,'0');
    const seconds= String(date.getSeconds()).padStart(2,'0');
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
}

  return (
    <>
     <div className={`w-100 border-bottom border-start border-end rounded-bottom mb-2 commemberlist_detail ${active}`}>
              <div className="py-3">
                <div className="d-flex justify-content-between py-1">
                  <div className="ps-2">
                    <span>회원유형</span>
                  </div>
                  <div className="pe-2">
                    <span>기업 회원</span>
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
                    <span>{formatData(user.updDate)}</span>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default AdminMemberSell