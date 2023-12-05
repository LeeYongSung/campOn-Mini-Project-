import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import { Link } from 'react-router-dom'
import CompleteReserve from '../../components/camp/CompleteReserve'
import UserFooter from '../../components/menu/UserFooter'

const Complete = () => {
    const [complete, setComplete] = useState('');

    const getComplete = async () => {
        const response = await camps.complete();
        const data = await response.data;
        setComplete(data);
    }

    useEffect(() => {
        getComplete();
    }, [])

  return (
    <div>
        <BackHeader />
        <CompleteReserve complete={complete}/>
        <div className="w-100 d-flex justify-content-center py-3 reservecomplete_btnBox">
            <Link to="/api/camp/index" className="btn btn-warning btn-lg me-2">홈으로</Link>
            <Link to={`/api/camp/reservation?userNo=${complete.userNo}`} className="btn btn-success btn-lg ms-2">예약조회</Link>
        </div>
        <CampOnFooter />
        <UserFooter />
    </div>
  )
}

export default Complete