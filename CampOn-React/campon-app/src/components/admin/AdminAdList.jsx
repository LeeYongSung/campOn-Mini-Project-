import React, { useEffect, useState } from 'react'
import * as admins from '../../apis/admin'
import { useNavigate } from 'react-router'
import * as format from '../../apis/format'
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
    useEffect(() => {
        getList()
    }, [])
    return (
        <>
            <div>
                <div className="position-relative">
                    <div className="w-100 text-center pt-5 ">
                        <div><h3>광고 리스트</h3></div>
                    </div>
                </div>


                {isLoading && <p>로딩중입니다...</p>}
                {!isLoading &&

                    adlist.map((ad) => (
                        <div className='adlist'>

                            <ul key={ad.adNo}>
                                <li>
                                    <img className='campImg' src={`/api/img?file=${ad.adImg}`} alt="캠핑장 이미지" />
                                {/* <img className='campImg' src='/api/img?file=D:/cyj/UPLOAD/4.jpg' alt="캠핑장 이미지" /> */}

                                </li>
                                <li>
                                    <ul>
                                        <li>캠프 번호 : <span>{ad.campNo}</span></li>
                                        <li>캠프이름 : <span>{ad.campName}</span></li>
                                        <li>광고기간 : <span>{format.formatDate(ad.adStart)}</span> ~ <span>{format.formatDate(ad.adEnd)}</span></li>
                                        <li>상태 :
                                            {ad.adCheck == 0 ? <span className='aduncheck'>미승인</span> : <span  className='adcheck'>승인</span>}
                                        </li>
                                        <li>등록일자 : <span>{format.formatDate(ad.regDate)}</span></li>
                                        <li>수정일자 : <span>{format.formatDate(ad.updDate)}</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="container-sm">
                                    {/* <div><a href="#">수정</a></div> */}
                                    {(ad.adCheck == 0) ? <div><input type="button" onClick={() => { subbtn(ad.adNo) }}  className="btn btn-warning btn-lg w-100 my-3 py-3" value="승인" /></div> : <></>}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))
                }


            </div>
        </>
    )
}

export default AdminAdList