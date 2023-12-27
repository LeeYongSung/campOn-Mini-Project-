import React, { useContext, useEffect, useState } from 'react'
import * as admins from '../../apis/admin'
import { useNavigate, Link } from 'react-router-dom';
import AdminDCampList from './AdminDCampList';
import { CategoryContext } from '../../apis/CategoryContext';
const AdminCampList = () => {
    // const userAuth = 'ROLE_ADMIN' 
    const {roles} = useContext(CategoryContext)

    const navigate = useNavigate()
    const [campList, setCampList] = useState([])
    const [campListadmin, setCampListadmin] = useState([])
    const [down, setdown] = useState([])
    const [tog, settog] = useState([])
    const getList = async () => {
        try {
            const response = await admins.getCampList()
            const data = await response.data
            if (roles.isAdmin){
                settog(Array(data.campListadmin.length).fill(false));
                setdown(Array(data.campListadmin.length).fill(true));
            }
            if (roles.isSell){
                settog(Array(data.campList.length).fill(false));
                setdown(Array(data.campList.length).fill(true));
            }
            setCampList(data.campList)
            setCampListadmin(data.campListadmin)
            // settog(Array(response.data.campList.length).fill(true));
            console.log(tog, `tog`)
            console.log(down, `down`)
            console.log(data, `data`)
            console.log(data.campList)
            console.log(data.campListadmin)
        } catch (error) {
            console.log(error)
        }
    }
    const toggle = (index) => {
        settog((prevTog) => prevTog.map((value, i) => (i === index ? true : value)));
        setdown((prevTog) => prevTog.map((value, i) => (i === index ? false : value)));
    }
    const untoggle = (index) => {
        settog((prevTog) => prevTog.map((value, i) => (i === index ? false : value)));
        setdown((prevTog) => prevTog.map((value, i) => (i === index ? true : value)));
    }
    const dacmpDel = async (cpdtNo) => {
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
    const campDel = async (campNo) => {
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

    const formatData = (inputDate) =>{
        const date = new Date(inputDate);
        //포맷 형식 지정하기
        const year = date.getFullYear()
        const month = String(date.getMonth()+1).padStart(2,'0');
        const day= String(date.getDate()).padStart(2,'0');
        const hours= String(date.getHours()).padStart(2,'0');
        const minutes= String(date.getMinutes()).padStart(2,'0');
        const seconds= String(date.getSeconds()).padStart(2,'0');
        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
    }
        
    useEffect(() => {
        getList()
        console.log(tog, `tog`)
        console.log(down, `down`)
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
                    // campList.map((camp, index) => (          ----seller인 경우
                  roles.isAdmin?  campListadmin.map((camp, index) => (
                        <>
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
                                                <div className="campproductListCon_txt"><span>{formatData(camp.regDate)}</span></div>
                                                <div className="campproductListCon_txt pt-1"><span>{formatData(camp.updDate)}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="campproductListBtn position-absolute top-0 end-0 d-flex pt-2">
                                    <div><Link to={`/admin/adinsert/${camp.campNo}`} className="btn btn-primary me-1">광고신청</Link></div>
                                    <div><Link to={`/admin/campdetailinsert/${camp.campNo}/${camp.userNo}`} className="btn btn-success">상품등록</Link></div>
                                    <div><Link to={`/admin/campproductupdate/${camp.campNo}`} className="btn btn-warning mx-1">캠핑장수정</Link></div>
                                    <div><button onClick={() => { campDel(camp.campNo) }} className="btn btn-danger mx-1">캠핑장삭제</button></div>
                                </div>
                                <div className="position-absolute bottom-0 end-0 me-2 pb-2">
                                    {
                                        down.length > 0 && 
                                        down[index] ? <a className="down" value={camp.campNo} onClick={() => { toggle(index) }}>
                                            상세보기

                                            <span className="material-symbols-outlined">
                                                expand_more
                                            </span>
                                        </a>
                                            : <a className="up" value={camp.campNo} onClick={() => { untoggle(index) }}>
                                                접기
                                                <span className="material-symbols-outlined">
                                                    expand_less
                                                </span>
                                            </a>
                                    }
                                </div>
                            </div>
                            {
                                tog[index] ? 
                                <div className="campdetail_active">
                                    {camp.detailsList.map((detail) => (
                                        <>
                                            <AdminDCampList detail={detail} dacmpDel={dacmpDel} />
                                        </>
                                    ))}
                                </div>
                                    : <></>
                            }
                        </>
                    )) : <></>
                }

{
                    // campList.map((camp, index) => (          ----seller인 경우
                  roles.isSell?  campList.map((camp, index) => (
                        <>
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
                                                <div className="campproductListCon_txt"><span>{formatData(camp.regDate)}</span></div>
                                                <div className="campproductListCon_txt pt-1"><span>{formatData(camp.updDate)}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="campproductListBtn position-absolute top-0 end-0 d-flex pt-2">
                                    <div><Link to={`/admin/adinsert/${camp.campNo}`} className="btn btn-primary me-1">광고신청</Link></div>
                                    <div><Link to={`/admin/campdetailinsert/${camp.campNo}/${camp.userNo}`} className="btn btn-success">상품등록</Link></div>
                                    <div><Link to={`/admin/campproductupdate/${camp.campNo}`} className="btn btn-warning mx-1">캠핑장수정</Link></div>
                                    <div><button onClick={() => { campDel(camp.campNo) }} className="btn btn-danger mx-1">캠핑장삭제</button></div>
                                </div>
                                <div className="position-absolute bottom-0 end-0 me-2 pb-2">
                                    {
                                        down[index] ? <a className="down" value={camp.campNo} onClick={() => { toggle(index) }}>
                                            상세보기
                                            <span className="material-symbols-outlined">
                                                expand_more
                                            </span>
                                        </a>
                                            : <a className="up" value={camp.campNo} onClick={() => { untoggle(index) }}>
                                                접기
                                                <span className="material-symbols-outlined">
                                                    expand_less
                                                </span>
                                            </a>
                                    }
                                </div>
                            </div>
                            {
                                tog[index] ? <div className="campdetail_active">
                                    {camp.detailsList.map((detail) => (
                                        <>
                                            <AdminDCampList detail={detail} dacmpDel={dacmpDel} />
                                        </>
                                    ))}
                                </div>
                                    : <></>
                            }
                        </>
                    )) : <></>
                }
            </div>
        </>
    )
}
export default AdminCampList