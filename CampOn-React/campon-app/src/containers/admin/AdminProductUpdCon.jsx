import React, {useEffect, useState} from 'react'
import AdminProductUpd from '../../components/admin/AdminProductUpd'
<<<<<<< HEAD
import {useParams, useNavigate} from 'react-router-dom'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import AdminFooter from '../../components/menu/AdminFooter'
import * as admins from '../../apis/admin'
=======
import {useParams} from 'react-router-dom'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
>>>>>>> main

//완
const AdminProductUpdCon = () => {
  const {productNo} = useParams()
  const navigate = useNavigate()
  const [productName, setProductName] = useState('');
  const [productThmFile, setProductThmFile] = useState(null);
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productIntro, setProductIntro] = useState('');
  const [productConFile, setProductConFile] = useState(null);
  const [productImgs, setProductImgs] = useState(null);
  const [productThmFilee, setProductThmFilee] = useState('');
  const [productConFilee, setProductConFilee] = useState('');
  const [productImgse, setProductImgse] = useState([]);

  const handleChange = (event) => {
      const { name, value } = event.target;
      switch (name) {
          case 'productName':
              setProductName(value);
              break;
          case 'productThmFile':
              setProductThmFile(event.target.files);
              break;
          case 'productCategory':
              setProductCategory(value);
              break;
          case 'productPrice':
              setProductPrice(value);
              break;
          case 'productIntro':
              setProductIntro(value);
              break;
          case 'productConFile':
              setProductConFile(event.target.files);
              break;
          case 'productImgs':
              setProductImgs(event.target.files);
              break;
          default:
              break;
      }
  };

  //기존 상품 가져오기
  const productinf = async () => {
      try {
          const response = await admins.productSelect(productNo)
          console.log(response.data)
          setProductName(response.data.productName)
          setProductThmFilee(response.data.productThumnail)
          setProductCategory(response.data.productCategory)
          setProductPrice(response.data.productPrice)
          setProductIntro(response.data.productIntro)
          setProductConFilee(response.data.productCon)
          setProductImgse(response.data.productImgsUrlList)

      } catch (error) {
          console.error(error.response.data);
      }
  }
  //수정버튼
  const handleSubmit = async () => {
      const formData = new FormData();
      formData.append('productNo', productNo);
      formData.append('productName', productName);
      formData.append('productCategory', productCategory);
      formData.append('productPrice', productPrice);
      formData.append('productIntro', productIntro);
      const headers = {
          headers: { 'Content-Type': 'multipart/form-data' }
      };
      if (productThmFile) {
          for (let i = 0; i < productThmFile.length; i++) {
              formData.append(`productThmFile[${i}]`, productThmFile[i])
          }
      }
      if (productConFile) {
          for (let i = 0; i < productConFile.length; i++) {
              formData.append(`productConFile[${i}]`, productConFile[i])
          }
      }
      if (productImgs) {
          for (let i = 0; i < productImgs.length; i++) {
              formData.append(`productImgs[${i}]`, productImgs[i])
          }
      }
      try {
          const response = await admins.productUpd(formData, headers)
          alert('수정 완료');
          console.log(response.data);
          navigate('/admin/productlist')
      } catch (error) {
          console.error(error.response.data);
          console.log(error)
      }
  }
  const handleDel = async () => {
          console.log('여기 들어오는가?')
          try {
              const response = await admins.productDel(productNo)
              const data = await response.data
              
                  console.log(data, 'data는?')
                  window.alert('삭제 완료!')
                  navigate('/admin/productlist')
              } catch (error) {
                  console.error(error)
                  productinf()
                  navigate(`/admin/productupdate/${productNo}`)
          }
  }
  useEffect(() => {
      productinf()
  }, [])

  const sets = {
    handleDel, handleSubmit, productinf, handleChange,
    productThmFilee, setProductThmFilee,
    productConFilee, setProductConFilee,
    productImgse, setProductImgse,
    productNo,
    productName, setProductName,
    productThmFile, setProductThmFile,
    productCategory, setProductCategory,
    productPrice, setProductPrice,
    productIntro, setProductIntro,
    productConFile, setProductConFile,
    productImgs, setProductImgs
  }
  return (
    <>
    <BackHeader />
<<<<<<< HEAD
    <AdminProductUpd productNo={productNo} sets={sets}/>
    <CampOnFooter />
    <AdminFooter />
=======
    <AdminProductUpd productNo={productNo}/>
    <CampOnFooter />
    <UserFooter />
>>>>>>> main
    </>
  )
}

export default AdminProductUpdCon