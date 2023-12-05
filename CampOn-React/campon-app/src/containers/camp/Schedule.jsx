import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import OpenSchedule from '../../components/camp/OpenSchedule'
import UserFooter from '../../components/menu/UserFooter'

const Schedule = () => {
    const [camp, setCamp] = useState([])
    const [startDate, setStartDate] = useState('')

    const getSchedule = async () => {
        const response = await camps.campSchedule();
        const data = response.data;
        const {campschedule, startDate} = data;
        setCamp(campschedule)
        setStartDate(startDate)
    }

    useEffect( () => {
        getSchedule();
    },[])

  return (
    <div>
        <BackHeader />
        <OpenSchedule camp={camp} startDate={startDate} />
        <CampOnFooter />
        <UserFooter />
    </div>
  )
}

export default Schedule