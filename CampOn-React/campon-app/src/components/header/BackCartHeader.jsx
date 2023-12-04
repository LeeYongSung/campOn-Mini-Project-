import React from 'react'
import Linkscript from '../fragment/link';
const BackCartHeader = () => {
  return (
    <>
      <Linkscript />
      <header>
          <nav>
              <ul class="main_header">
                  <li><a href="#" onclick="history.back(); return false;"><i class="material-symbols-outlined">chevron_left</i></a></li>
                  <li><a href="#"><img src="/img/header_logo.png" alt="로고" /></a> </li>
                  <li><a href="/product/cart"><i class="material-symbols-outlined">shopping_cart</i></a></li>
              </ul>
          </nav>
      </header>
    </>
  )
}

export default BackCartHeader