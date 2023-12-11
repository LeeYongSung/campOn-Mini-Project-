import React from 'react'
import { Link } from 'react-router-dom'

const OpenSearchHeader = () => {
  return (
    <>
      <header>
          <nav>
              <ul className="main_header">
                  <li><Link to={"/api/camp/schedule"}><i className="material-symbols-outlined">schedule</i></Link></li>
                  <li><Link to={"/"}><img src="/img/header_logo.png" alt="로고" /></Link> </li>
                  <li><Link to={"/api/camp/campproducts?keyword=&searchDate=&regionNo=0&campTypeNos=[]"} className="serch_btn"><i className="material-symbols-outlined">search</i></Link></li>
              </ul>
          </nav>
      </header>
    </>
  )
}

export default OpenSearchHeader