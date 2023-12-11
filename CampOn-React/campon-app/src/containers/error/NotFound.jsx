import React from 'react'
import HeadAd from '../../components/camp/HeadAd'
import CampOnFooter from '../../components/footer/CampOnFooter'
import OpenSearchHeader from '../../components/header/OpenSearchHeader'
import UserFooter from '../../components/menu/UserFooter'

// TODO : 404 페이지 꾸미기
const NotFound = () => {
  return (
      <>
        <OpenSearchHeader />
        <HeadAd />
        {/* FIXME: 여기 꾸며줘 
        */}
        <div className=''>
            <h1>404 Page</h1>
        </div>
        <CampOnFooter />
        <UserFooter />
      </>
  )
}

export default NotFound