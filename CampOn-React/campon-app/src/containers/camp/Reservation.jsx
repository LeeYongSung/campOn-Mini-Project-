import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import BackHeader from '../../components/header/BackHeader'
import ReserveList from '../../components/camp/ReserveList'
import CartList from '../../components/camp/CartList'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const Reservation = () => {
    const [productList, setProductList] = useState([]);
    const [reservationList, setReservationList] = useState([]);
    const navigate = useNavigate()

    const getList = async () => {
        const response = await camps.campReservation();
        const data = response.data;
        const {productList, reservationList} = data;
        setProductList(productList);
        setReservationList(reservationList);
    }

    useEffect( () => {
        getList();
    }, [])

    const onDelete = async (no) => {
      const response = await camps.reservationdelete(no);
      alert('삭제완료')
      // navigate('/api/camp/reservation')
      getList();
    }

  return (
    <div>
        <BackHeader />
        <div className="w-100"><img src="/img/camp/wide_banner.jpg" alt="와이드배너" className="w-100"/></div>
        <ReserveList reserve={reservationList} onDelete={onDelete} />
        <CartList product={productList} />
        <div className="w-100 text-center py-4"><Link to="/api/camp/index" className="btn btn-lg campproduct_home_btn px-4">홈으로</Link></div>
        <div className="w-100"><img src="/img/camp/wide_banner.jpg" alt="와이드배너" className="w-100"/></div>
        <CampOnFooter />
        <UserFooter />
    </div>
  )
}

export default Reservation