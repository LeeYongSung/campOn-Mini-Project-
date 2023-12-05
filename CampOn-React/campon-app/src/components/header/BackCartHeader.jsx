import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const BackCartHeader = () => {
  let navigate = useNavigate();

  return (
    <>
      <header>
          <nav>
              <ul className="main_header">
                  <li><Link to="#" onClick={ (e) => { e.preventDefault(); navigate(-1); } } ><i className="material-symbols-outlined">chevron_left</i></Link></li>
                  <li><Link to="#"><img src="/img/header_logo.png" alt="로고" /></Link> </li>
                  <li><Link to={"/product/cart"}><i className="material-symbols-outlined">shopping_cart</i></Link></li>
              </ul>
          </nav>
      </header>
    </>
  )
}

export default BackCartHeader