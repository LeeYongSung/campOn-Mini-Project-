import React, { useEffect, useState } from 'react'
import * as admins from '../../apis/admin'
import AdminMemberSell from './AdminMemberSell'

const AdminMemberListSell = ({ sellList, deleteBtn }) => {
  const [moreList, setMoreList] = useState(sellList.map(() => false))
  const [more, setMore] = useState(false)
  const morebtn = (index) => {
    console.log(index)
    const updatedMoreList = [...moreList];
    updatedMoreList[index] = true;
    setMoreList(updatedMoreList);
    setMore(true)
  }
  const lessbtn = (index) => {
    console.log(index, '접기')
    const updatedMoreList = [...moreList];
    updatedMoreList[index] = false;
    setMoreList(updatedMoreList);
    setMore(false)
  }
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
      <div id="tab02">
      <div className="py-3">
          <h5>기업 회원 리스트</h5>
        </div>
        {sellList.map((user, index) => (
          <div className="container" key={user.userNo}>
            <div className="border rounded-top py-4 position-relative">
              <div className="d-flex justify-content-between py-1 mt-4">
                <div className="ps-2">
                  <span>{user.userId}</span>
                </div>
                <div className="pe-2">
                  <span>{user.userName}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="ps-2">
                  <span>이메일</span>
                </div>
                <div className="pe-2">
                  <span>{user.userEmail}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="ps-2">
                  <span>가입일자</span>
                </div>
                <div className="pe-2">
                  <span>{formatData(user.regDate)}</span>
                </div>
              </div>
              <div className="position-absolute top-0 end-0 pe-1 pt-1">
                <button className="delbtn btn btn-outline-danger" onClick={() => { deleteBtn(user.userId) }}>회원 삭제</button>
              </div>
              <div className="position-absolute bottom-0 end-0 pe-1 memberlist_more_box">
                {
                   moreList[index] ? <a className="commemberlist_less" onClick={() => lessbtn(index)}>접기<span className="material-symbols-outlined">expand_less</span></a> : <a className="commemberlist_more" onClick={() => morebtn(index)}>더보기<span className="material-symbols-outlined">expand_more</span></a>
                }
              </div>
            </div>
            {
              moreList[index] ? <AdminMemberSell user={user} /> : <></>
            }
          </div>

        ))}
      </div>
    </>
  )
}

export default AdminMemberListSell