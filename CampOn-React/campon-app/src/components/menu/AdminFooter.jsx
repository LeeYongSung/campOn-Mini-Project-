import React from 'react'
import { Link } from 'react-router-dom'

const AdminFooter = () => {
  return (
   <>
   <div className="menu">
    <ul className="main_menu">
      <li>
        <Link to={`/admin/memberList`}>
          <ul className="sub_menu">
            <li><i className="material-symbols-outlined">person</i></li>
            <li>유저관리</li>
          </ul>
        </Link>
      </li>
      <li>
        <Link to={`/admin/adlist`}>
          <ul className="sub_menu">
            <li><i className="material-symbols-outlined">payment</i></li>
            <li>광고관리</li>
          </ul>
        </Link>
      </li>
      <li>
        <Link to={`/admin/campproductlist`}>
          <ul className="sub_menu">
            <li><i className="material-symbols-outlined">home</i></li>
            <li>캠핑장관리</li>
          </ul>
        </Link>
      </li>
      <li>
        <Link to={`/user/mypage`}>
          <ul className="sub_menu">
            <li><i className="material-symbols-outlined">manage_accounts</i></li>
            <li>마이페이지</li>
          </ul>
        </Link>
      </li>
    </ul>
  </div>
   </>
  )
}

export default AdminFooter