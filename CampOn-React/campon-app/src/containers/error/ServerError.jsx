import React from 'react'
import OpenSearchHeader from '../../components/header/OpenSearchHeader'
import HeadAd from '../../components/camp/HeadAd'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

// TODO : 500 페이지 꾸미기
const ServerError = () => {
  return (

      <>
        <OpenSearchHeader />
        <HeadAd />
        {/* FIXME: 여기 꾸며줘 
        */}
        <div className=''>
            <h1>500 Page</h1>
        </div>
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ServerError