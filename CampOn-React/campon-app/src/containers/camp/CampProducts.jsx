import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import CampList from '../components/CampList'
import { useParams } from 'react-router-dom'
import CampSearch from '../../components/camp/CampSearch'

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
        {/* <Header /> */}
        <CampSearch />
        <div class="w-100 my-3">
        <img src="/img/camp/wide_banner.jpg" alt="와이드배너" class="w-100"/>
        </div>
        <CampList campList={campList} />
        {/* <Footer /> */}
    </div>
  )
}

export default CampProducts