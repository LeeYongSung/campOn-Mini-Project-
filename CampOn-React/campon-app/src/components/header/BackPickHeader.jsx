import React from 'react'
import { Link } from 'react-router-dom';

const BackPickHeader = () => {
  return (
    <>
      <header>
          <nav>
              <ul className="main_header">
                  <li><Link to="#" onClick={ (e) => { e.preventDefault(); navigate(-1); } } ><i className="material-symbols-outlined">chevron_left</i></Link></li>
                  <li><Link to="#" onClick={ (e) => { e.preventDefault(); navigate("/"); } } ><img src="/img/header_logo.png" alt="로고" /></Link> </li>
                  <li>
                    <Link to={""}><i className="material-symbols-outlined px-2">share</i></Link>
                    <Link to={""}><i className="material-symbols-outlined">grade</i></Link>
                  </li>
              </ul>
          </nav>
      </header>
    </>
  )
}

export default BackPickHeader