import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import BackPickHeader from '../../components/header/BackPickHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import CampReview from '../../components/camp/CampReview'
import { useParams } from 'react-router'
import CampDetailList from '../../components/camp/CampDetailList'
import CampProductintro from '../../components/camp/CampProductintro'
import UserFooter from '../../components/menu/UserFooter'

const CampProduct = () => {
    const {no} = useParams();
    const [productsimg, setproductsimg] = useState([])
    const [productsproducts, setproductsproducts] = useState('')
    const [productsreserve, setproductsreserve] = useState(0)
    const [productsseller, setproductsseller] = useState('')
    const [productsenvironment, setproductsenvironment] = useState([])
    const [productsreview, setproductsreview] = useState('')
    const [productsfacility, setproductsfacility] = useState([])
    const [productsproductlist, setproductsproductlist] = useState([])

    const getCamp = async () => {
        const response = await camps.campproduct(no);
        const data = await response.data;
        const {productsimg,productsproducts,productsreserve,productsseller,productsenvironment,productsreview,productsfacility,productsproductlist} = data;
        setproductsimg(productsimg);
        setproductsproducts(productsproducts);
        setproductsreserve(productsreserve);
        setproductsseller(productsseller);
        setproductsenvironment(productsenvironment);
        setproductsreview(productsreview);
        setproductsfacility(productsfacility);
        setproductsproductlist(productsproductlist);
    }

    useEffect(() => {
        getCamp();
    },[])

  return (
    <div>
        <BackPickHeader />
        <CampProductintro productsimg={productsimg} productsenvironment={productsenvironment} productsreserve={productsreserve} productsfacility={productsfacility} productsproducts={productsproducts} />
        <CampDetailList productsproductlist={productsproductlist} />
        <CampReview productsreview={productsreview} />
        <div class="container-sm w-100 py-3 mt-3 border-bottom border-top">
            <a href="javascript:;" class="d-flex w-100">
                <div class="d-flex justify-content-between">
                    <div><h6>캠핑장 운영정책</h6></div>
                    <div><span class="material-symbols-outlined">chevron_right</span></div>
                </div>
            </a>
        </div>
        <div class="none">캠핑장 운영정책 모달창</div>
        <div class="container-sm w-100 py-3 mt-3 border-bottom border-top">
            <a href="javascript:;" class="d-flex w-100">
                <div class="d-flex justify-content-between">
                    <div><h6>취소 환불 규정</h6></div>
                    <div><span class="material-symbols-outlined">chevron_right</span></div>
                </div>
            </a>
        </div>
        <div class="none">취소 환불 규정 모달창</div>
        <div class="container-sm w-100 py-3 mt-3 border-bottom border-top">
            <a href="javascript:;" class="d-flex w-100">
                <div class="d-flex justify-content-between">
                    <div><h6>사업자정보</h6></div>
                    <div><span class="material-symbols-outlined">chevron_right</span></div>
                </div>
            </a>
        </div>
        <div class="none">
            <li>업체명 : <span>{productsseller.companyName}</span></li>
            <li>사업자번호 : <span>{productsseller.companyNumber}</span></li>
            <li>사업주 : <span>{productsseller.userName}</span></li>
        </div>
        <CampOnFooter />
        <UserFooter />
    </div>
  )
}

export default CampProduct