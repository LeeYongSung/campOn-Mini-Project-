import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import CampSearch from '../../components/camp/CampSearch'
import CampList from '../../components/camp/CampList'

const CampProducts = () => {
    const [campList, setCampList] = useState([])

    const getCampList = async () => {
        const response = await camps.campproducts();
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