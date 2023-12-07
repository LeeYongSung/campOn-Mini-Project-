import React, { useState } from 'react'
import * as admins from '../apis/admin'

const AdminProductAdd = () => {
    const [productName, setProductName] = useState('');
    const [productThmFile, setProductThmFile] = useState(null);
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productIntro, setProductIntro] = useState('');
    const [productConFile, setProductConFile] = useState(null);
    const [productImgs, setProductImgs] = useState(null);
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


    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productCategory', productCategory);
        formData.append('productPrice', productPrice);
        formData.append('productIntro', productIntro);

        const headers = {
            headers : { 'Content-Type' : 'multipart/form-data' }
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
        let product = {
            productName: productName,
            productThmFile: productThmFile,
            productCategory: productCategory,
            productPrice: productPrice,
            productIntro: productIntro,
            productConFile: productConFile,
            productImgs: productImgs
        }
        console.log(product, 'product는?')
        try {
            const response = await admins.productAdd(formData, headers)
            alert('등록 완료');
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <>

            <div className="w-100 text-center py-4 border-bottom">
                <h5>렌탈샵 상품 등록</h5>
            </div>

            <div className="container pt-2">
                <form name="product">

                    <div className="form-floating my-2">
                        <input type="text" className="form-control" name="productName" id="productName" placeholder="상품 이름" onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="productName">상품 이름</label>
                    </div>


                    <div className="form-floating">
                        <input type="file" className="form-control" name="productThmFile" id="productThumnail" placeholder="상품 썸네일" onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="productThumnail">상품 썸네일</label>
                    </div>


                    <div className="input-group mb-3 row border-bottom" style={{ marginTop: '40px' }}>
                        <label className="col-md-4 col-form-label" htmlFor="">카테고리</label>
                        <div className="col-md-8">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="tent" value="텐트" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="tent"><span></span>텐트</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="table" value="테이블" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="table"><span></span>테이블</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="chair" value="체어" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="chair"><span></span>체어</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="mat" value="매트" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="mat"><span></span>매트</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="lighting" value="조명" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="lighting"><span></span>조명</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="brazier" value="화로대" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="brazier"><span></span>화로대</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="tarp" value="타프" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="tarp"><span></span>타프</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="storage" value="수납" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="storage"><span></span>수납</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="appliances"
                                    value="캠핑가전" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="appliances"><span></span>캠핑가전</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="Kitchenware"
                                    value="주방용품" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="Kitchenware"><span></span>주방용품</label>
                            </div>
                        </div>
                    </div>


                    <div className="form-floating">
                        <input type="text" className="form-control" name="productPrice" id="productPrice" placeholder="1일 대여금액" onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="productPrice">1일 대여금액</label>
                    </div>


                    <div className="form-floating my-2">
                        <input type="text" className="form-control" name="productIntro" id="productIntro" placeholder="상품 기본 내용" onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="">상품 기본내용</label>
                    </div>

                    <div className="form-floating my-2">
                        <input type="file" className="form-control" name="productConFile" id="productConFile" onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="productConFile">상품 상세설명(이미지)</label>
                    </div>

                    <div className="form-floating">
                        <input type="file" className="form-control" name="productImgs" id="productImgs" onChange={handleChange} multiple />
                        <label className="col-md-4 col-form-label" htmlFor="productImgs">상품 이미지(여러장)</label>
                    </div>


                    <div className="d-flex justify-content-center mt-1 mb-5">
                        <input type="button" onClick={handleSubmit} className="btn btn-lg btn-dark w-100 py-3" value="상품등록" />
                    </div>
                </form>
            </div>

        </>
    )
}

export default AdminProductAdd