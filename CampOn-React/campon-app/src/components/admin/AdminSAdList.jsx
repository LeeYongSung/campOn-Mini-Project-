import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as admins from '../../apis/admin'
import * as format from '../../apis/format'
import { CategoryContext } from '../../apis/CategoryContext'
const AdminSAdList = () => {
    const {isLogin, roles} = useContext(CategoryContext);
    const [adlist, setAdlist] = useState([])
    const [isLoading, setLoading] = useState(false)
    const nav = useNavigate()
    const getList = async () => {
        try {
            setLoading(true)
            if (roles.isAdmin){
                const response = await admins.getAd()
                const data = await response.data
                const adlist = await data.adlist
                console.log(data)
                console.log(adlist)
                // setAdlist(data)
                setAdlist(adlist)
                setLoading(false)
            }
            if (roles.isSell){
                const response = await admins.getAdSeller()
                const data = await response.data
                const adlist = await data.adlist
                console.log(data)
                console.log(adlist)
                setAdlist(data)
                // setAdlist(adlist)
                setLoading(false)
            }
        } catch (error) {
            console.error("Error fetching ad list:", error);
        }
    }

    useEffect(() => {
        if (isLogin){
            getList()
        }
    }, [])
    return (
        <>
            <div>

                <div className="position-relative">
                    <div className="w-100 text-center pt-5 ">
                        <div><h3>요청한 광고 리스트</h3></div>
                    </div>
                </div>
                {isLoading && <p>로딩중입니다...</p>}
                {!isLoading &&
                    adlist.map((ad) => (
                        <div className='adlist'>
                            <ul key={ad.adNo} className=''>
                                <li>
                                    <img className='campImg' src={`/api/img?file=${ad.adImg}`} alt="캠핑장 이미지" />
                                    {/* <img className='campImg' src='/api/img?file=D:/cyj/UPLOAD/4.jpg' alt="캠핑장 이미지" /> */}
                                </li>
                                <li>
                                    <ul>
                                        <li>캠프번호: <span>{ad.campNo}</span></li>
                                        <li>캠프이름 : <span>{ad.campName}</span></li>
                                        <li>광고기간 : <span>{format.formatDate(ad.adStart)}</span> ~ <span>{format.formatDate(ad.adEnd)}</span></li>
                                        <li>상태 :
                                            {ad.adCheck == 0 ? <span className='aduncheck'>미승인</span> : <span className='adcheck'>승인</span>}
                                        </li>
                                        <li>등록일자 : <span>{format.formatDate(ad.regDate)}</span></li>
                                        <li>수정일자 : <span>{format.formatDate(ad.updDate)}</span></li>
                                    </ul>
                                </li>
                                <li>
                                    {/* <div><a href="#">수정</a></div> */}
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default AdminSAdList