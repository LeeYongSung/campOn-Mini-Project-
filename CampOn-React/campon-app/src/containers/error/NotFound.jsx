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
            <div>
              <img src="/img/error(404).png" alt="404페이지" />
            </div>
            <div className='text-center py-3 border-bottom my-3'>
              <h4>길을 잃은 당신➰</h4>
              <span>404페이지에서는 캠프온 캠핑장의 안이 보이지 않네요!😥</span><br/>
              <span>다시 메인으로 돌아가 캠프온 최고의 플랫폼을 둘러보세요😚</span>
            </div>
            <div className='d-flex justify-content-center my-2'>
              <button type='button' className='btn btn-lg btn-outline-success mx-2'>메인으로</button>
              <button type='button' className='btn btn-lg btn-outline-warning mx-2'>뒤로가기</button>
            </div>
        </div>
        <CampOnFooter />
        <UserFooter />
      </>
  )
}

export default NotFound