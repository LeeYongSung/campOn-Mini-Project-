import React, { useEffect, useState } from 'react'
import * as admins from '../../apis/admin'
import { useNavigate } from 'react-router'
const AdminAdApply = ({campNo}) => {
  const nav = useNavigate()
  const [adImgFile, setadImgFile] = useState(null)
  const [adStart, setadStart] = useState('')
  const [adEnd, setadEnd] = useState('')

  const handle = (e)=>{
    switch (e.target.name) {
      case "adImgFile":setadImgFile(e.target.files)
      const campImg = (e)=>{
         var reader = new FileReader();
         reader.onload = function () {
             var output = document.getElementById('preview');
             output.src = reader.result;
         };
         reader.readAsDataURL(e.target.files[0]);
      }
      campImg(e)
        break;
      case "adStart":setadStart(e.target.value)
        break;
      case "adEnd":setadEnd(e.target.value)
        break;
    }
  }

  const adAdd = async ()=>{
    const formData  = new FormData()
    console.log(adImgFile)
    console.log(adStart)
    console.log(adEnd)
    console.log(campNo)
    if (adImgFile) {
      for (let i = 0; i < adImgFile.length; i++) {
          formData.append(`adImgFile`, adImgFile[i])
      }
  }
    formData.append("adStart", adStart)
    formData.append("adEnd", adEnd)
    formData.append("campNo", campNo)
    console.log(formData)
    const headers = {
      headers : {"Content-Type" : "multipart/form-data"}
    }
    try {
      const response = await admins.AdAdd(formData, headers)
      alert('광고 요청이 되었습니다.')
      console.log(response)
      nav('/admin/campproductlist')
    } catch (error) {
      console.log(error)
    }
  }

 

  useEffect(()=>{
    console.log(adImgFile)
    console.log(adStart)
    console.log(adEnd)
    console.log(campNo)
  }, [])

  return (
    <>
    <div>
        <h5>광고정보를 입력해주세요</h5>
    </div>

    {/* <form action="/admin/adinsertpro" method="post" enctype="multipart/form-data"> */}
        <div className="input-group mb-3 row border-bottom" style={{marginTop: "40px"}}>
            <label className="col-md-4 col-form-label" htmlFor="">광고이미지</label>
            <input type="file" className="form-control" name="adImgFile" id="adImgFile"  
            onChange={handle} />
            <p>파일형식 .PNG, .JPG / 가로세로 비율 1000*1500px / 용량 20MB</p>
        </div>
        <div className='w-100'>
            <img id="preview" className='w-100' />
        </div>
        <div className="form-floating">
            <input type="date" className="form-control" id="adStart" name="adStart" onChange={handle}/>
            <label htmlFor="campOpen">시작일자</label>
        </div>
        <div className="form-floating">
            <input type="date" className="form-control" id="adEnd" name="adEnd" onChange={handle}/>
            <label htmlFor="campClose">종료일자</label>
        </div>
        <div>
            <input type="button" onClick={adAdd} value="광고등록 요청" className="btn btn-warning btn-lg w-100 my-3 py-3"/>
        </div>
    {/* </form> */}
    </>
  )
}

export default AdminAdApply