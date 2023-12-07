import React from 'react'
import { Link } from 'react-router-dom'

const UserFooter = () => {
  return (
    <>
      <div className="menu">
      <ul className="main_menu">
        <li>
          <Link to={"/api/camp/index"}>
            <ul className="sub_menu">
              <li><i className="material-symbols-outlined">home</i></li>
              <li>홈</li>
            </ul>
          </Link>
        </li>
        <li>
          <Link to={"/product"}>
            <ul className="sub_menu">
              <li><i className="material-symbols-outlined">store</i></li>
              <li>스토어</li>
            </ul>
          </Link>
        </li>
        <li>
          <Link to={"/api/board/index"}>
            <ul className="sub_menu">
              <li><i className="material-symbols-outlined">dashboard</i></li>
              <li>게시판</li>
            </ul>
          </Link>
        </li>
        <li>
          <Link to={"/user/mypage"}>
            <ul className="sub_menu">
              <li><i className="material-symbols-outlined">person</i></li>
              <li>마이</li>
            </ul>
          </Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default UserFooter