import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as admins from '../../apis/admin'
const AdminSAdList = () => {
    const [adlist, setAdlist] = useState([])
    const [isLoading, setLoading] = useState(false)
    const nav = useNavigate()
    const getList = async () => {
        setLoading(true)
        const response = await admins.getAdSeller()
        const data = await response.data
        console.log(data)
        setAdlist(response.data)
        setLoading(false)
    }

    useEffect(()=>{
        getList()
    }, [])
  return (
    <>
      <div>
    <h1>요청한 광고 리스트</h1>
    {isLoading && <p>로딩중입니다...</p>}
    {!isLoading &&
                
                adlist.map((ad) => (
                    <ul key={ad.adNo}>
                <li>
                <img src={`/api/img/file?=${ad.adImg}`} alt="캠핑장 이미지" />
                </li>
                <li>
                                <ul>
                                    <li><span>{ad.campNo}</span> / <span>{ad.campName}</span></li>
                                    <li>광고기간 : <span>{ad.adStart}</span> ~ <span>{ad.adEnd}</span></li>
                                    <li>상태 :
                                        {ad.adCheck == 0 ? <span>미승인</span> : <span>승인</span>}
                                    </li>
                                    <li>등록일자 : <span>{ad.regDate}</span> 수정일자 : <span>{ad.updDate}</span></li>
                                </ul>
                            </li>
                <li>
                    {/* <div><a href="#">수정</a></div> */}
                </li>
            </ul>
             ))
            }
    </div>

    </>
  )
}

export default AdminSAdList