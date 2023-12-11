import React from 'react'
import * as camps from '../../apis/camp'
import { Link, useNavigate } from 'react-router-dom';

const BackPickHeader = ({no}) => {
  const navigate = useNavigate()

  const insert = async() => {
    try{
      console.log(no)
      const response = await camps.favoriteInsert(no)
      const check = window.confirm('찜 완료! 즐겨찾기 페이지로 이동하시겠습니까?')
      if(check) {navigate("/api/camp/favorites")}
  }catch(e){
      console.log(e)
  }
  }
  return (
    <>
      <header>
          <nav>
              <ul className="main_header">
                  <li><Link to="#" onClick={ (e) => { e.preventDefault(); navigate(-1); } } ><i className="material-symbols-outlined">chevron_left</i></Link></li>
                  <li><Link to="#" onClick={ (e) => { e.preventDefault(); navigate("/"); } } ><img src="/img/header_logo.png" alt="로고" /></Link> </li>
                  <li>
                    <Link to={""}><i className="material-symbols-outlined px-2">share</i></Link>
                    <Link to={""} ><i className="material-symbols-outlined" onClick={insert}>grade</i></Link>
                  </li>
              </ul>
          </nav>
      </header>
    </>
  )
}

export default BackPickHeader