import React, { useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import * as admins from '../../apis/admin'

// 디테일한 캠핑장
const AdminCampDAdd = () => {
  const nav = useNavigate()
  const {campNo, userNo} = useParams()
  
  const [cpdtName, setcpdtName] =useState('')
  const [cpdtIntroduction, setcpdtIntroduction] =useState('')
  const [cpdtNop, setcpdtNop] = useState('')
  const [cpdtSize, setcpdtSize] = useState('')
  const [cpdtPrice, setcpdtPrice] = useState('')
  const [campTypeNo, setcampTypeNo] =useState('')
  const [cpdiFiles, setcpdiFiles] = useState(null)

  //D캠핑장 등록
  const actionInsert = async ()=>{
    const formData = new FormData()
    formData.append("cpdtName",cpdtName)
    formData.append("campNo",campNo)
    formData.append("userNo",userNo)
    formData.append("cpdtIntroduction",cpdtIntroduction)
    formData.append("cpdtNop",cpdtNop)
    formData.append("cpdtSize",cpdtSize)
    formData.append("cpdtPrice",cpdtPrice)
    formData.append("campTypeNo",campTypeNo)
    if ( cpdiFiles){
      for (let i = 0; i < cpdiFiles.length; i++) {
        formData.append(`cpdiFiles[${i}]`,cpdiFiles[i])
      }
    }
    const headers = {
      headers : {"Content-Type" : "multipart/form-data"}
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
      const response = await admins.dcampAdd(formData, headers)
      console.log(response.data)
      alert('D캠핑장 등록성공!')
      nav('/admin/campproductlist')
    } catch (error) {
      console.log(error)
    }
  }

  //핸들러 메소드
  const handleMethod = (e)=>{
    switch (e.target.name){
      case "cpdtName" : setcpdtName(e.target.value);
      break;
      case "cpdtIntroduction" : setcpdtIntroduction(e.target.value);
      break;
      case "cpdtNop" : setcpdtNop(e.target.value);
      break;
      case "cpdtSize" : setcpdtSize(e.target.value);
      break;
      case "cpdtPrice" : setcpdtPrice(e.target.value);
      break;
      case "campTypeNo" : setcampTypeNo(e.target.value);
      break;
      case "cpdiFiles" : setcpdiFiles(e.target.files);
      break;
    }
  }



  return (
    <>
      <div className="w-100 text-center py-4 campdetailProductInsertTitle">
        <div>
          <h3>캠핑장 상품 등록</h3>
        </div>
        <div>
          <h6>캠핑장 상품을 등록하기 위한 페이지입니다.</h6>
        </div>
      </div>
      <div className="container campdetailProductInsertCon">
          <input type="hidden" name="campNo" value={campNo} />
          <input type="hidden" name="userNo" value={userNo} />
          <div>
            <div className="form-floating my-2">
              <input type="text" id="cpdtName" name="cpdtName" placeholder="캠핑장 상품 이름" className="form-control" onChange={handleMethod}/>
              <label htmlFor="cpdtName">캠핑장 상품 이름</label>
            </div>
            <div className="form-floating my-2">
              <input type="file" id="cpdiFiles" name="cpdiFiles" multiple className="form-control" onChange={handleMethod}/>
              <label htmlFor="cpdiFiles">파일</label>
            </div>
            <div className="form-floating my-2">
              <input type="number" id="cpdtNop" name="cpdtNop" placeholder="수용 가능 인원 수" min="1" className="form-control" onChange={handleMethod} />
              <label htmlFor="cpdtNop">수용 가능 인원 수</label>
            </div>
            <div className="form-floating my-2">
              <input type="text" id="cpdtSize" name="cpdtSize" placeholder="면적" className="form-control" onChange={handleMethod}/>
                <label htmlFor="cpdtSize">면적</label>
            </div>
            <div className="form-floating my-2">
              <input type="number" id="cpdtPrice" name="cpdtPrice" placeholder="금액" min="1" className="form-control" onChange={handleMethod} />
              <label htmlFor="cpdtPrice">금액</label>
            </div>
            <div className="w-100 d-flex my-2">
              <div>캠핑종류</div>
              <div>
                <input type="radio" name="campTypeNo" id="1" value="1" onChange={handleMethod} />
                <label htmlFor="1"><span></span>오토캠핑</label>
                <input type="radio" name="campTypeNo" id="2" value="2" onChange={handleMethod} />
                <label htmlFor="2"><span></span>글램핑</label>
                <input type="radio" name="campTypeNo" id="3" value="3" onChange={handleMethod} />
                <label htmlFor="3"><span></span>카라반</label>
                <input type="radio" name="campTypeNo" id="4" value="4" onChange={handleMethod} />
                <label htmlFor="4"><span></span>펜션</label>
                <input type="radio" name="campTypeNo" id="5" value="5"  onChange={handleMethod}/>
                <label htmlFor="5"><span></span>피크닉</label>
              </div>
            </div>
            <div className="form-floating my-2">
              <p>캠핑상품 소개</p>
              <textarea name="cpdtIntroduction" cols="40" rows="5" placeholder="상품 소개" className="form-control" onChange={handleMethod}></textarea>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-between py-3">
            <div>
              <Link type="button" to={'/admin/campproductlist'} className="btn btn-info px-5">목록</Link>
            </div>
            <div>
              <button type="button" onClick={actionInsert} className="btn btn-success px-5">등록</button>
            </div>
          </div>
      </div>

    </>
  )
}

export default AdminCampDAdd