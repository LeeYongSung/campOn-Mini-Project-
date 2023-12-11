import React, { useEffect, useState } from 'react'
import * as admins from '../../apis/admin'
import { useNavigate } from 'react-router-dom';

const AdminProductUpd = ({ productNo, sets }) => {
    const handleDel = sets.handleDel;
    const handleSubmit = sets.handleSubmit;
    const productinf = sets.productinf;
    const handleChange = sets.handleChange;
    const productThmFilee = sets.productThmFilee;
    const setProductThmFilee = sets.setProductThmFilee;
    const productConFilee = sets.productConFilee;
    const setProductConFilee = sets.setProductConFilee;
    const productImgse = sets.productImgse;
    const setProductImgse = sets.setProductImgse;
    const productName = sets.productName;
    const setProductName = sets.setProductName;
    const productThmFile = sets.productThmFile;
    const setProductThmFile = sets.setProductThmFile;
    const productCategory = sets.productCategory;
    const setProductCategory = sets.setProductCategory;
    const productPrice = sets.productPrice;
    const setProductPrice = sets.setProductPrice;
    const productIntro = sets.productIntro;
    const setProductIntro = sets.setProductIntro;
    const productConFile = sets.productConFile;
    const setProductConFile = sets.setProductConFile;
    const productImgs = sets.productImgs;
    const setProductImgs = sets.setProductImgs;
    return (
        <>

            <div className="w-100 text-center py-4">
                <h5>렌탈샵 상품 수정/삭제</h5>
            </div>

            <div className="container">
                <form name="product" >
                    <input type="hidden" field="{productNo}" />
                    <div className="form-floating my-2">
                        <input type="text" className="form-control" field="*{productName}" id="productName" name="productName" value={productName} onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="productName">상품 이름</label>
                    </div>

                    <div className="form-floating my-2">
                        <input type="file" className="form-control" name="productThmFile" onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="">상품 썸네일</label>
                    </div>
                    <div className="w-100">
                        <img className="imgfile w-100" src={`/img?file=${productThmFilee}`} alt="썸네일이미지" />
                    </div>

                    <div className="input-group mb-3 row border-bottom" style={{ marginTop: '40px' }}>
                        <label className="col-md-4 col-form-label" htmlFor="">카테고리</label>
                        <div className="col-md-8">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="tent" value="텐트" checked={productCategory === '텐트'} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="tent"><span></span>텐트</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="table" value="테이블" checked={productCategory === '테이블'} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="table"><span></span>테이블</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="chair" value="체어" checked={productCategory === '체어'} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="chair"><span></span>체어</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="mat" value="매트" checked={productCategory === '매트'} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="mat"><span></span>매트</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="lighting" value="조명" checked={productCategory === '조명'} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="lighting"><span></span>조명</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="brazier" value="화로대" checked={productCategory === '화로대'} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="brazier"><span></span>화로대</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="tarp" value="타프" checked={productCategory === '타프'} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="tarp"><span></span>타프</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="storage" value="수납" checked={productCategory === '수납'} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="storage"><span></span>수납</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="appliances" value="캠핑가전" checked={productCategory === '캠핑가전'} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="appliances"><span></span>캠핑가전</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="productCategory" id="Kitchenware" value="주방용품" checked={productCategory === '주방용품'} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="Kitchenware"><span></span>주방용품</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control" name="productPrice" id="productPrice" value={productPrice} onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="productPrice">1일 대여금액</label>
                    </div>

                    <div className="form-floating my-2">
                        <input type="text" className="form-control" id="productIntro" name="productIntro" value={productIntro} onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="productIntro">상품 기본내용</label>
                    </div>

                    <div className="form-floating">
                        <input type="file" className="form-control" name="productConFile" id="productConFile" onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="productConFile">상품 상세설명(이미지)</label>
                    </div>
                    <div>
                        <img className="imgfile" src={`/img?file=${productConFilee}`} alt="상세설명" />
                    </div>

                    <div className="form-floating">
                        <input type="file" className="form-control" name="productImgs" id="productImgs" multiple onChange={handleChange} />
                        <label className="col-md-4 col-form-label" htmlFor="">상품 이미지(여러장)</label>
                    </div>

                    {
                        productImgse.map((imgs) => (
                            <>
                                <img className="imgfile" src={`/img?file=${imgs}`} alt="상세이미지(여러장)" />
                            </>
                        ))
                    }

                    <div className="w-100 d-flex justify-content-between border-top mt-3 py-3">
                        <div>
                            <input type="button" className="btn btn-warning px-3" value="상품수정" onClick={handleSubmit} />
                        </div>
                        <div>
                            <button type='button' onClick={() => { handleDel(productNo) }} className="btn btn-danger px-3">상품 삭제</button>
                        </div>
                    </div>
                    <div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminProductUpd