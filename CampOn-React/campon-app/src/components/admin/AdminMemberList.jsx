import React from 'react'

const AdminMemberList = ({handleuserBtnn, handlesellBtnn, clickkUser, clickkSell}) => {
  
  return (
    <>
    <div className="w-100 text-center py-4 border-bottom">
        <h5>회원 리스트</h5>
      </div>
      <div className="container">
        <div className="tab">
          <div className="tabnav d-flex justify-content-center py-3 text-center border-bottom">
            <div className="tab_btn userBtnn" value="user" onClick={handleuserBtnn}><input type='button' value='일반 회원' style={{width : "100%", height:"100%", backgroundColor:`${clickkUser}`}}/></div>
            <div className="tab_btn sellBtnn" value="sell" onClick={handlesellBtnn}><input type='button' value='기업 회원' style={{width : "100%", height:"100%", backgroundColor:`${clickkSell}`}}/></div>
          </div>
          <div className="tabcontent">
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminMemberList