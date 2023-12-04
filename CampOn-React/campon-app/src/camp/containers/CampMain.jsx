import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import {Link} from 'react-router-dom'
import CampHotList from '../components/CampHotList'
import CampnewList from '../components/CampnewList'
import CampReviewList from '../components/CampReviewList'
import CamptypeList from '../components/CamptypeList'
import HeadAd from '../components/HeadAd'
import MiddelAd from '../components/MiddelAd'
import CampSearch from '../components/CampSearch'

const CampMain = () => {
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

    return(
        <div>
            {/* <Header /> */}
            <HeadAd />
            <CamptypeList camptypeList={camptype} />
            <CampSearch />
            <MiddelAd />
            <Link to="#">안내페이지</Link>
            <CampnewList newList={newList} />
            <CampHotList hotList={hotList} />
            <CampReviewList newReviewList={newReviewList} />
            {/* <Footer /> */}
        </div>
    );

}

export default CampMain