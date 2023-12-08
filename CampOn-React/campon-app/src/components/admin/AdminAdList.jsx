import React, { useEffect, useState } from 'react'
import * as admins from '../../apis/admin'
import { useNavigate } from 'react-router'
//관리자
const AdminAdList = () => {
    const [adlist, setAdlist] = useState([])
    const [isLoading, setLoading] = useState(false)
    const nav = useNavigate()
    //광고리스트 가져오기
    const getList = async () => {
        setLoading(true)
        const response = await admins.getAd()
        const data = await response.data
        console.log(data)
        setAdlist(response.data)
        setLoading(false)
    }
    //승인버튼 클릭
    const subbtn = async (adNo) => {
        window.confirm('승인처리 하시겠습니까?')
        try {
            const response = await admins.adSign(adNo)
            const data = await response.data
            console.log(data)
            window.alert('승인되었습니다.')
            getList()
            nav('/admin/adlist')
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        getList()
    }, [])
    return (
        <>
            <div>
                <h1>광고 리스트</h1>

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
                                <div><a href="#">수정</a></div>
                                {(ad.adCheck == 0) ? <div><input type="button" onClick={()=>{subbtn(ad.adNo)}} value="승인"/></div> : <></>}
                            </li>
                        </ul>
                    ))
                }
                

            </div>
        </>
    )
}

export default AdminAdList