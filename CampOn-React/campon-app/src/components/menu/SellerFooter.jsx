import React from 'react'
import { Link } from 'react-router-dom'

const SellerFooter = () => {
  return (
    <>
      <div className="menu">
        <ul className="main_menu">
          <li>

            <Link to={`/admin/campproductlist`}>
              <ul className="sub_menu">
                <li><i className="material-symbols-outlined">camping</i></li>
                <li>캠핑장 관리</li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to={`/board/boardlist`}>
              <ul className="sub_menu">
                <li><i className="material-symbols-outlined">rate_review</i></li>
                <li>캠핑장 후기</li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to={`/admin/adlistseller`}>
              <ul className="sub_menu">
                <li><i className="material-symbols-outlined">ad_group</i></li>
                <li>광고 관리</li>
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

export default SellerFooter