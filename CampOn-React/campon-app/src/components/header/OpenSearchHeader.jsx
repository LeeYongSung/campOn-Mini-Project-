import React from 'react'

const OpenSearchHeader = () => {
  return (
    <>
      <header>
          <nav>
              <ul className="main_header">
                  <li><a href="/camp/schedule"><i className="material-symbols-outlined">schedule</i></a></li>
                  <li><a href="/"><img src="/img/header_logo.png" alt="로고" /></a> </li>
                  <li><a href="/camp/campproducts?keyword=&searchDate=&regionNo=0&campTypeNos=" className="serch_btn"><i className="material-symbols-outlined">search</i></a></li>
              </ul>
          </nav>
      </header>
    </>
  )
}

export default OpenSearchHeader