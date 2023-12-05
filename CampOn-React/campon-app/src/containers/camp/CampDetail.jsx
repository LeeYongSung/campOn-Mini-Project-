import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import { useParams } from 'react-router-dom'
import BackPickHeader from '../../components/header/BackPickHeader';
import CampOnFooter from '../../components/footer/CampOnFooter';
import CampDetailintro from '../../components/camp/CampDetailintro';

const CampDetail = () => {
    const {no} = useParams();
    const [detailimg, setDetailimg] = useState([]);
    const [detail, setDetail] = useState('');

    const getDetail = async () => {
        const response = await camps.campdetail(no);
        const data = response.data;
        const {productimg, productintro} = data;
        setDetailimg(productimg);
        setDetail(productintro);
    }

    useEffect(() => {
        getDetail();
    }, [])

  return (
    <div>
        <BackPickHeader />
        <CampDetailintro detailimg={detailimg} detail={detail} />
        <CampOnFooter />
    </div>
  )
}

export default CampDetail