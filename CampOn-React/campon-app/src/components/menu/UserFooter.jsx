import React from 'react'

const UserFooter = () => {
  return (
    <>
      <div class="menu">
      <ul class="main_menu">
        <li>
          <a href="/camp/index">
            <ul class="sub_menu">
              <li><i class="material-symbols-outlined">home</i></li>
              <li>홈</li>
            </ul>
          </a>
        </li>
        <li>
          <a href="/product/index">
            <ul class="sub_menu">
              <li><i class="material-symbols-outlined">store</i></li>
              <li>스토어</li>
            </ul>
          </a>
        </li>
        <li>
          <a href="/board/index">
            <ul class="sub_menu">
              <li><i class="material-symbols-outlined">dashboard</i></li>
              <li>게시판</li>
            </ul>
          </a>
        </li>
        <li>
          <a href="/user/mypage">
            <ul class="sub_menu">
              <li><i class="material-symbols-outlined">person</i></li>
              <li>마이</li>
            </ul>
          </a>
        </li>
      </ul>
    </div>
    </>
  )
}

export default UserFooter