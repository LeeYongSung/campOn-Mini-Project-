import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackHeader from '../../components/header/BackHeader';
import * as camps from '../../apis/camp'
import ReservatePro from '../../components/camp/ReservatePro';
import CampOnFooter from '../../components/footer/CampOnFooter';
import UserFooter from '../../components/menu/UserFooter'

const Reservate = () => {
    const {no} = useParams();
    const [camp, setCamp] = useState([]);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    
    const getReservate = async () => {
        const response = await camps.campReservate(no);
        const data = response.data;
        const {camp, user} = data;
        setCamp(camp);
        setUser(user);
    }
    
    useEffect( () => {
        getReservate()
    }, [])
    
    const reserve = async (campNo, cpdtNo, userNo, reservationNop, reservationStart, reservationEnd, reservationDate, campPaymentType) => {
        try{
            const response = await camps.campReservatePay(campNo, cpdtNo, userNo, reservationNop, reservationStart, reservationEnd, reservationDate, campPaymentType)
            alert('예약 완료')
            navigate('/api/camp/complete')
        }catch(e){
            console.log(e)
        }
    }

  return (
    <div>
        <BackHeader />
        <ReservatePro camp={camp} user={user} reserve={reserve} />
        <CampOnFooter />
        <UserFooter />
    </div>
  )
}

export default Reservate