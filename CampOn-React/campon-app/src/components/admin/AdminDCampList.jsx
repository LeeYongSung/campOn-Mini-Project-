import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const AdminDCampList = ({ detail, dacmpDel }) => {

    return (
        <>
            <div className="campdetail_box position-relative d-flex py-5 border-bottom">
                <div className="campdetailImg ps-2">
                    <img src={`/api/img?file=${detail.cpdiUrl}`} alt="상품이미지" />
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
                    {/* <div><a className="btn btn-warning" href="|/admin/campdetailupdate?cpdtNo=${detail.cpdtNo}|">상품수정</a></div> */}
                    <div><Link className="btn btn-warning" to={`/admin/campdetailupdate/${detail.cpdtNo}`}>상품수정</Link></div>
                    {/* <div><a className="btn btn-danger ms-1" href="|/admin/campdetaildelete?cpdtNo=${detail.cpdtNo}|" onClick="return confirm('캠핑상품을 삭제하시겠습니까?')">상품삭제</a></div> */}
                    <div><button className="btn btn-danger ms-1" onClick={()=>{dacmpDel(detail.cpdtNo)}}>상품삭제</button></div>
                </div>
            </div>
        </>
    )
}

export default AdminDCampList