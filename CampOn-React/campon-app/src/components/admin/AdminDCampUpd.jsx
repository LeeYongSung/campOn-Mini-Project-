import React, { useContext, useEffect, useState } from 'react'
import * as admins from '../../apis/admin'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { CategoryContext } from '../../apis/CategoryContext'

const AdminDCampUpd = () => {
    const nav = useNavigate()
    const { cpdtNo } = useParams()
    console.log(cpdtNo)
    const {userInfo} = useContext(CategoryContext)
    const userNo = userInfo?.userNo; 
    const [cpdtName, setcpdtName] = useState('')
    const [cpdtIntroduction, setcpdtIntroduction] = useState('')
    const [cpdtNop, setcpdtNop] = useState('')
    const [cpdtSize, setcpdtSize] = useState('')
    const [cpdtPrice, setcpdtPrice] = useState('')
    const [campTypeNo, setcampTypeNo] = useState('')
    const [cpdiFiles, setcpdiFiles] = useState(null)
    const [campNo, setcampNo] = useState('')


    //수정할 캠핑장 가져오기
    const getDCamp = async () => {
        try {
            console.log(cpdtNo, 'cpdtNo')
            const response = await admins.getdcampUpd(cpdtNo)
            console.log(response.data)
            setcpdtName(response.data.cpdtName)
            setcpdtNop(response.data.cpdtNop)
            setcpdtSize(response.data.cpdtSize)
            setcpdtPrice(response.data.cpdtPrice)
            setcampTypeNo(response.data.campTypeNo)
            setcpdtIntroduction(response.data.cpdtIntroduction)
            setcampNo(response.data.campNo)
        } catch (error) {
            console.log(error)
        }
    }



    const actionUpdate = async () => {
        const formData = new FormData()
        formData.append("cpdtName", cpdtName)
        formData.append("campNo", campNo)
        formData.append("cpdtNo", cpdtNo)
        formData.append("userNo", userNo)
        formData.append("cpdtIntroduction", cpdtIntroduction)
        formData.append("cpdtNop", cpdtNop)
        formData.append("cpdtSize", cpdtSize)
        formData.append("cpdtPrice", cpdtPrice)
        formData.append("campTypeNo", campTypeNo)
        if (cpdiFiles) {
            for (let i = 0; i < cpdiFiles.length; i++) {
                formData.append(`cpdiFiles[${i}]`, cpdiFiles[i])
            }
        }
        const headers = {
            headers: { "Content-Type": "multipart/form-data" }
        }
        let camp = {
            campNo: campNo,
            userNo: userNo,
            cpdtName: cpdtName,
            cpdtIntroduction: cpdtIntroduction,
            cpdtNop: cpdtNop,
            cpdtSize: cpdtSize,
            cpdtPrice: cpdtPrice,
            campTypeNo: campTypeNo,
            cpdiFiles: cpdiFiles
        };
        console.log('camp정보: ', camp)

        try {
            const response = await admins.dcampUpd(formData, headers)
            console.log(response.data)
            alert('D캠핑장 수정성공!')
            nav('/admin/campproductlist')
        } catch (error) {
            console.log(error)
        }
    }



    //핸들러 메소드
    const handleMethod = (e) => {
        switch (e.target.name) {
            case "cpdtName": setcpdtName(e.target.value);
                break;
            case "cpdtIntroduction": setcpdtIntroduction(e.target.value);
                break;
            case "cpdtNop": setcpdtNop(e.target.value);
                break;
            case "cpdtSize": setcpdtSize(e.target.value);
                break;
            case "cpdtPrice": setcpdtPrice(e.target.value);
                break;
            case "campTypeNo": setcampTypeNo(e.target.value);
                break;
            case "cpdiFiles": setcpdiFiles(e.target.files);
                break;
        }
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
        nav('/admin/campproductlist')
    }


    useEffect(() => {
        console.log('들어오니?')
        getDCamp()
    }, [])



    return (
        <>
            <div className="campdetailProductUpdateTitle text-center py-3">
                <div>
                    <h4>캠핑장 상품 수정</h4>
                </div>
                <div>
                    <h6>캠핑장 상품을 수정하기 위한 페이지입니다.</h6>
                </div>
            </div>

            <div className="w-100 container">
                <div className="form-floating py-3">
                    <input type="text" id="cpdtName" name="cpdtName" value={cpdtName} placeholder="상품 이름" className="form-control" onChange={handleMethod} />
                    <label htmlFor="cpdtName">캠핑장 상품 이름</label>
                </div>
                <div className="form-floating py-3">
                    <input type="file" id="cpdiFiles" name="cpdiFiles" multiple className="form-control" onChange={handleMethod} />
                    <label htmlFor="cpdiFiles">파일</label>
                </div>
                <div className="form-floating py-3">
                    <input type="number" id="cpdtNop" name="cpdtNop" value={cpdtNop} placeholder="인원" min="1" className="form-control" onChange={handleMethod} />
                    <label htmlFor="cpdtNop">수용 가능 인원 수</label>
                </div>
                <div className="form-floating py-3">
                    <input type="text" id="cpdtSize" name="cpdtSize" value={cpdtSize} placeholder="면적" className="form-control" onChange={handleMethod} />
                    <label htmlFor="cpdtSize">면적</label>
                </div>
                <div className="form-floating py-3">
                    <input type="number" id="cpdtPrice" name="cpdtPrice" value={cpdtPrice} placeholder="금액" min="1" className="form-control" onChange={handleMethod} />
                    <label htmlFor="cpdtPrice">금액</label>
                </div>
                <div className="w-100 py-3">
                    <div>
                        <p>캠핑종류</p>
                    </div>
                    <div>
                        <input type="radio" name="campTypeNo" checked={campTypeNo == '1'} id="1" value="1" onChange={handleMethod} />
                        <label htmlFor="1"><span></span>오토캠핑</label>
                        <input type="radio" name="campTypeNo" checked={campTypeNo == '2'} id="2" value="2" onChange={handleMethod} />
                        <label htmlFor="2"><span></span>글램핑</label>
                        <input type="radio" name="campTypeNo" checked={campTypeNo == '3'} id="3" value="3" onChange={handleMethod} />
                        <label htmlFor="3"><span></span>카라반</label>
                        <input type="radio" name="campTypeNo" checked={campTypeNo == '4'} id="4" value="4" onChange={handleMethod} />
                        <label htmlFor="4"><span></span>펜션</label>
                        <input type="radio" name="campTypeNo" checked={campTypeNo == '5'} id="5" value="5" onChange={handleMethod} />
                        <label htmlFor="5"><span></span>피크닉</label>
                    </div>
                </div>
                <div className="form-floating py-3">
                    <div>
                        <p>캠핑상품 소개</p>
                    </div>
                    <div>
                        <textarea name="cpdtIntroduction" cols="40" rows="5" value={cpdtIntroduction} placeholder="상품 소개" className="form-control" onChange={handleMethod}></textarea>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <Link className="btn btn-info px-4" type="button" to={'/admin/campproductlist'}>목록</Link>
                    </div>
                    <div className="d-flex my-2">
                        <div>
                            <button className="btn btn-warning px-4" type="button" onClick={actionUpdate}>수정</button>
                        </div>
                        <div>
                            <button className="btn btn-danger px-4 ms-1" type="button" onClick={()=>{dacmpDel(cpdtNo)}}>삭제</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminDCampUpd