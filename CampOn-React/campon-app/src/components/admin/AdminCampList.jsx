import React, { useEffect, useState } from 'react'
import * as admins from '../../apis/admin'
import { useNavigate, Link } from 'react-router-dom';
import AdminDCampList from './AdminDCampList';
const AdminCampList = () => {
    const navigate = useNavigate()
    const [campList, setCampList] = useState([])
    const [campListadmin, setCampListadmin] = useState([])

    const getList = async () => {
        try {
            const response = await admins.getCampList()
            console.log(response.data)
            setCampList(response.data.campList)
            console.log(response.data.campList)
            setCampListadmin(response.data.campListadmin)
            console.log(response.data.campListadmin)
        } catch (error) {
            console.log(error)
        }
    }

    //down클릭하면 상세내용 보이고, up 클릭하면 상세내용 안보이게 하기
    const [tog, settog] = useState([])

   const toggle = (index)=>{
    tog.splice(index, 0, true)
    console.log('되니')
   }
   const untoggle = (index)=>{
    tog.splice(index, 0, false)
    console.log('안되니')
   }
    //디테일 삭제
    const dacmpDel = async (cpdtNo)=>{
        try {
            const response = await admins.dcampDel(cpdtNo)
            console.log(response.data, 'data는?')
            alert('삭제되었습니다!')
        } catch (error) {
            console.log(error)
        }
        getList()
        navigate('/admin/campproductlist')
    }
    //캠핑장 삭제
    const campDel = async (campNo)=>{
        try {
            const response = await admins.campDel(campNo)
            console.log(response.data)
            alert('삭제되었습니다!')
        } catch (error) {
            console.log(error)
        }
        getList()
        navigate('/admin/campproductlist')
    }

    useEffect(() => {
        getList()
        console.log(tog)
    }, [])
    return (
        <>
            <div>
                <div className="position-relative">
                    <div className="position-absolute top-0 end-0 pt-2 pe-2">
                        <Link to="/admin/campproductadd" className="btn btn-success">캠핑장 등록</Link>
                    </div>
                    <div className="w-100 text-center pt-5 ">
                        <div><h5>캠핑장목록</h5></div>
                        <div><span>보유한 캠핑장 목록</span></div>
                    </div>
                </div>
                {
                    campListadmin.map((camp, index) => (
                        <>
                            {/* <block each="camp : ${campList}" if="${auth == 'ROLE_SELL'}"> */}
                            <div className="campproductList w-100 d-flex justify-content-between position-relative py-5 mt-3 border-bottom border-top">
                                <input type="hidden" className="campNo" id="campNo" name="campNo" value={camp.campNo} />
                                <div className="campproductListImg ps-2">
                                    <img src={`/api/img?file=${camp.cpiUrl}`} alt="캠핑장 이미지" />
                                </div>
                                <div className="campproductListCon">
                                    <div className="pt-3">
                                        <div><h5>{camp.campName}</h5></div>
                                        <div className="campproductListCon_txt"><span>{camp.campAddress}</span></div>
                                        <div className="w-100 d-flex justify-content-between pt-3">
                                            <div className="campproductListCon_txt">
                                                <p>등록일자</p>
                                                <p className="pt-1">수정일자</p>
                                            </div>
                                            <div className="pe-2">
                                                <div className="campproductListCon_txt"><span>{camp.regDate}</span></div>
                                                <div className="campproductListCon_txt pt-1"><span>{camp.updDate}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="campproductListBtn position-absolute top-0 end-0 d-flex pt-2">
                                    {/* <div><a href="|/admin/adinsert?campNo=${camp.campNo}|" className="btn btn-primary me-1">광고신청</a></div> */}
                                    <div><Link to={`/admin/adinsert/${camp.campNo}`} className="btn btn-primary me-1">광고신청</Link></div>
                                    {/* <div><a href="|/admin/campdetailinsert?campNo=${camp.campNo}&userNo=${camp.userNo}|" className="btn btn-success">상품등록</a></div> */}
                                    <div><Link to={`/admin/campdetailinsert/${camp.campNo}/${camp.userNo}`} className="btn btn-success">상품등록</Link></div>
                                    {/* <div><a href="|/admin/campproductupdate?campNo=${camp.campNo}|" className="btn btn-warning mx-1">캠핑장수정</a></div> */}
                                    <div><Link to={`/admin/campproductupdate/${camp.campNo}`} className="btn btn-warning mx-1">캠핑장수정</Link></div>

                                    {/* <div><a href="|/admin/campdelete?campNo=${camp.campNo}|" className="btn btn-danger mx-1">캠핑장삭제</a></div> */}
                                    <div><button onClick={()=>{campDel(camp.campNo)}} className="btn btn-danger mx-1">캠핑장삭제</button></div>
                                </div>
                                <div className="position-absolute bottom-0 end-0 me-2 pb-2">
                                    <a href="#" className="down" value={camp.campNo} onClick={()=>{toggle(index)}}>
                                        상세보기
                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span>
                                    </a>
                                    <a href="#" className="up none" value={camp.campNo} onClick={()=>{untoggle(index)}}>
                                        접기
                                        <span className="material-symbols-outlined">
                                            expand_less
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* <div className="none campdetail_active"> */}
                            {
                                tog[index]? <div className="campdetail_active">
                                {camp.detailsList.map((detail) => (
                                    <>
                                        <AdminDCampList detail={detail} dacmpDel={dacmpDel} />
                                    </>
                                ))}
                            </div>
                            : <></>
                            }
                            
                        </>
                    ))
                }
            </div>
        </>
    )
}
export default AdminCampList