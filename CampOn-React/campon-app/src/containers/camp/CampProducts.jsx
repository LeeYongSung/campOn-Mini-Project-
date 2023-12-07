import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import CampList from '../../components/camp/CampList'
import { useParams } from 'react-router-dom'
import CampSearch from '../../components/camp/CampSearch'
import CampOnFooter from '../../components/footer/CampOnFooter'
import BackHeader from '../../components/header/BackHeader'
import UserFooter from '../../components/menu/UserFooter'

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
      
    const onSearch = async (formData, headers) => {
      // const camp = {
      //   keyword,
      //   searchDate,
      //   regionNo,
      //   checkBoxList
      // }
      // console.log(camp)
      // const response = await camps.campSearch(camp)
      console.log(formData)
      const response = await camps.campSearch(formData, headers)
      // const response = await camps.campSearch(keyword, searchDate, regionNo, checkBoxList)
      const data = await response.data
      console.log(data)
      setCampList(data);
    }


  return (
    <div>
        <BackHeader />
        <CampSearch onSearch={onSearch} />
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