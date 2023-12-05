import React, { useEffect, useState } from 'react'
import * as admins from '../../apis/admin'
import { useNavigate, Link } from 'react-router-dom';
const AdminCampList = () => {
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
    useEffect(()=>{
        getList()
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
                    campListadmin.map((camp) => (
                        <>
                            {/* <block each="camp : ${campList}" if="${auth == 'ROLE_SELL'}"> */}
                            <div className="campproductList w-100 d-flex justify-content-between position-relative py-5 mt-3 border-bottom border-top">
                                <input type="hidden" className="campNo" id="campNo" name="campNo" value={camp.campNo} />
                                <div className="campproductListImg ps-2">
                                    <img src={`/img?file=${camp.cpiUrl}`} alt="캠핑장 이미지" />
                                </div>
                                <div className="campproductListCon">
                                    <div className="pt-3">
                                        <div><h5 text="${camp.campName}"></h5></div>
                                        <div className="campproductListCon_txt"><span text="${camp.campAddress}"></span></div>
                                        <div className="w-100 d-flex justify-content-between pt-3">
                                            <div className="campproductListCon_txt">
                                                <p>등록일자</p>
                                                <p className="pt-1">수정일자</p>
                                            </div>
                                            <div className="pe-2">
                                                <div className="campproductListCon_txt"><span text="${#dates.format(camp.regDate, 'yyyy-MM-dd')}"></span></div>
                                                <div className="campproductListCon_txt pt-1"><span text="${#dates.format(camp.updDate, 'yyyy-MM-dd')}"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="campproductListBtn position-absolute top-0 end-0 d-flex pt-2">
                                    <div><a href="|/admin/adinsert?campNo=${camp.campNo}|" className="btn btn-primary me-1">광고신청</a></div>
                                    <div><a href="|/admin/campdetailinsert?campNo=${camp.campNo}&userNo=${camp.userNo}|" className="btn btn-success">상품등록</a></div>
                                    <div><a href="|/admin/campproductupdate?campNo=${camp.campNo}|" className="btn btn-warning mx-1">캠핑장수정</a></div>
                                    <div><a href="|/admin/campdelete?campNo=${camp.campNo}|" className="btn btn-danger mx-1">캠핑장삭제</a></div>
                                </div>
                                <div className="position-absolute bottom-0 end-0 me-2 pb-2">
                                    <a href="#" className="down" value={camp.campNo}>
                                        상세보기
                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span>
                                    </a>
                                    <a href="#" className="up none" value={camp.campNo}>
                                        접기
                                        <span className="material-symbols-outlined">
                                            expand_less
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="none campdetail_active">


                                {camp.detailsList.map((detail)=>(
                                    <>
                                    {/* <block if="${camp.detailsList!=null&&!camp.detailsList.isEmpty()}" each="detail : ${camp.detailsList}"> */}
                                    <div className="campdetail_box position-relative d-flex py-5 border-bottom">
                                        <div className="campdetailImg ps-2">
                                            <img src={`/img?file=${detail.cpdiUrl}`} alt="상품이미지" />
                                        </div>
                                        <div className="campdetailCon">
                                            <div>
                                                <div><h6>{detail.cpdtName}</h6></div>
                                                <div><span>{detail.campTypeName}</span></div>
                                            </div>
                                        </div>
                                        <div className="position-absolute top-0 end-0 detail_date">
                                            <div className="pt-2"><span>{detail.regDate}</span></div>
                                            <div><span>{detail.updDate}</span></div>
                                        </div>
                                        <div className="position-absolute bottom-0 end-0 d-flex detail_btn me-2 mb-1">
                                            <div><a className="btn btn-warning" href="|/admin/campdetailupdate?cpdtNo=${detail.cpdtNo}|">상품수정</a></div>
                                            <div><a className="btn btn-danger ms-1" href="|/admin/campdetaildelete?cpdtNo=${detail.cpdtNo}|" onClick="return confirm('캠핑상품을 삭제하시겠습니까?')">상품삭제</a></div>
                                        </div>
                                    </div>
                                    {/* </block> */}
                                    
                                    </>
                                    ))}
                            </div>
                            {/* </block> */}
                        </>
                    ))
                }
            </div>
        </>
    )
}
export default AdminCampList