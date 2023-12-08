import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import CampList from '../../components/camp/CampList'
import { useLocation, useParams } from 'react-router-dom'
import CampSearch from '../../components/camp/CampSearch'
import CampOnFooter from '../../components/footer/CampOnFooter'
import BackHeader from '../../components/header/BackHeader'
import UserFooter from '../../components/menu/UserFooter'

const CampProducts = () => {

    

    // const { keyword, searchDate, regionNo, campTypeNos } = useParams()
    // const { campTypeNo } = useParams()

    
    // campTypeNos = ctn[1];
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    // console.log('a');
    let keyword = params.get('keyword');
    let searchDate = params.get('searchDate');
    let regionNo = params.get('regionNo');
    let campTypeNosString = params.get('campTypeNos');
    let campTypeNos = JSON.parse(decodeURIComponent(campTypeNosString));
    let campTypeNo = params.get('campTypeNo');
    // console.log("campTypeNo : " + campTypeNo);
    console.log("campTypeNo : " + campTypeNo);
    const [campList, setCampList] = useState([])


    console.log(keyword);
    console.log(searchDate);
    console.log(regionNo);
    console.log(campTypeNos);
    // Array.from(campTypeNos).forEach(campTypeNo => {
    //   console.log('campTypeNos', campTypeNo);
    // });

    const getCampList = async () => {
        console.log(campTypeNo)
        // if(campTypeNo != null) {
        //   const response = await camps.campproducts(campTypeNo);
        //   const data = await response.data;
        //   console.log(data);
        //   setCampList(data);
        // } else {
        //   if(Array.isArray(campTypeNos) && campTypeNos.length === 0) {
        //     campTypeNos = 0;
        //   } 
        //   onSearch(keyword, searchDate, regionNo, camptypeNos);
        // }
        const response = await camps.campproducts(campTypeNo);
        const data = await response.data;
        console.log(data);
        setCampList(data);
      }
      
      useEffect(() => {
        getCampList();
      }, [])
      
    // const onSearch = async (formData, headers) => {
    const onSearch = async (keyword, searchDate, regionNo, camptypeNos) => {
      // const camp = {
      //   keyword,
      //   searchDate,
      //   regionNo,
      //   checkBoxList
      // }
      // console.log(camptypeNos);
      const today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      let campTypeList = [];
      if(day < 10) {
          day = '0'+day;
      }
      const formattedDate = `${year}-${month}-${day}`;

      Array.from(camptypeNos).forEach(campTypeNo => {
          // formData.append('campTypeNos', campTypeNo);
          console.log("camptypeNo : " + campTypeNo)
          campTypeList.push(campTypeNo);
      });
      console.log(campTypeList)

      // if(keyword === '') keyword = 'keyword=';
      // if(regionNo === '') regionNo = 'regionNo=';
      // if(camptypeNos === '') camptypeNos = 'camptypeNos=';

      if(searchDate === '') {
          searchDate = formattedDate;
          // console.log(searchDate);
      }
      console.log(keyword, searchDate, regionNo, campTypeList)
      // const response = await camps.campSearch(camp)
      // console.log(formData)
      // const response = await camps.campSearch(formData, headers)
      const response = await camps.campSearch(keyword, searchDate, regionNo, campTypeList)
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