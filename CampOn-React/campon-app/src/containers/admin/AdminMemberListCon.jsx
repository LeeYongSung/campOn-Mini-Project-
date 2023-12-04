import React, { useState } from 'react'
import AdminMemberList from '../../components/admin/AdminMemberList'
import AdminMemberListSell from '../../components/admin/AdminMemberListSell'
import AdminMemberListUser from '../../components/admin/AdminMemberListUser'
import { useEffect } from 'react'

const AdminMemberListCon = () => {
  const [tabBtn, setTabBtn] = useState('')
  const [tab, setTab] = useState('')

  const handleTabChange = (e)=>{
    setTabBtn(e.target.value)
   
  }


  useEffect(()=>{
     if (tabBtn.value === 'user'){
      setTab('true')
    }
    if (tabBtn.value === 'sell'){
      setTab('false')
    }

    console.log(tab, tabBtn)
  })

  return (
    <>
    <AdminMemberList/>
    <div className="w-100 text-center py-4 border-bottom">
    <h5>회원 리스트</h5>
  </div>
    <div className="container">
        <div className="tab">
            <div className="tabnav d-flex justify-content-center py-3 text-center border-bottom">
              <div className="tab_btn" value="user"><a value='user' onChange={handleTabChange}>일반 회원</a></div>
              <div className="tab_btn" value="sell"><a value='sell' onChange={handleTabChange}>기업 회원</a></div>
            </div>
            <div className="tabcontent">
            </div>
          </div>
    </div>
    {
      tab? <AdminMemberListUser/> : <AdminMemberListSell/>
    }
    </>
  )
}

export default AdminMemberListCon