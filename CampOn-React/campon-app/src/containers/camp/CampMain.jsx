import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import {Link, useNavigate} from 'react-router-dom'
import CampHotList from '../../components/camp/CampHotList'
import CampnewList from '../../components/camp/CampnewList'
import CampReviewList from '../../components/camp/CampReviewList'
import CamptypeList from '../../components/camp/CamptypeList'
import HeadAd from '../../components/camp/HeadAd'
import MiddelAd from '../../components/camp/MiddelAd'
import CampSearch from '../../components/camp/CampSearch'
import CampOnFooter from '../../components/footer/CampOnFooter'
import OpenSearchHeader from '../../components/header/OpenSearchHeader'
import UserFooter from '../../components/menu/UserFooter'

const CampMain = () => {
    const navigate = useNavigate()
    const [camptype, setCamptype] = useState([])
    const [newList, setNewList] = useState([])
    const [hotList, setHotList] = useState([])
    const [newReviewList, setNewReviewList] = useState([])

    const getCampMain = async () => {
        const response = await camps.campMain();
        const data = await response.data;
        const {camptypeList, campnewList, campHotList, newReviewList} = data;
        console.log(data)
        console.log(data.hotList)
        setCamptype(camptypeList);
        setNewList(campnewList);
        setHotList(campHotList);
        setNewReviewList(newReviewList);
    };

    useEffect(()=>{
        getCampMain();
    },[])

    const onSearch = (keyword, searchDate, regionNo, camptypeNos) => {
        navigate(`/api/camp/CampProducts?keword=${keyword}&searchDate=${searchDate}&regionNo=${regionNo}&campTypeNos=${camptypeNos}`)
    }

    return(
        <div>
            <OpenSearchHeader />
            <HeadAd />
            <CamptypeList camptypeList={camptype} />
            <CampSearch onSearch={onSearch}/>
            <MiddelAd />
            <div className='w-100 info_btn'>
            <Link to="#" className='btn btn-warning btn-lg w-100 py-3'>캠프온이 처음이신가요? 캠프온 이용안내</Link>
            </div>
            <CampnewList newList={newList} />
            <CampHotList hotList={hotList} />
            <CampReviewList newReviewList={newReviewList} />
            <CampOnFooter />
            <UserFooter />
        </div>
    );

}

export default CampMain