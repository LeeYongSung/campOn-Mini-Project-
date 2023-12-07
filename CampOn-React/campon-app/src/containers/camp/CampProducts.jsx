import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import CampList from '../../components/camp/CampList'
import { useParams } from 'react-router-dom'
import CampSearch from '../../components/camp/CampSearch'
import CampOnFooter from '../../components/footer/CampOnFooter'
import BackHeader from '../../components/header/BackHeader'
import UserFooter from '../../components/menu/UserFooter'
import CampList from '../../components/camp/CampList'

const CampProducts = () => {
    const {campTypeNo} = useParams()
    const [campList, setCampList] = useState([])

    const getCampList = async () => {
        console.log(campTypeNo)
        const response = await camps.campproducts(campTypeNo);
        const data = await response.data;
        setCampList(data);
    }

    useEffect(() => {
        getCampList();
    }, [])
  return (
    <div>
        <BackHeader />
        <CampSearch />
        <div class="w-100 my-3">
        <img src="/img/camp/wide_banner.jpg" alt="와이드배너" class="w-100"/>
        </div>
        <CampList campList={campList} />
        <CampOnFooter />
        <UserFooter />
    </div>
  )
}

export default CampProducts