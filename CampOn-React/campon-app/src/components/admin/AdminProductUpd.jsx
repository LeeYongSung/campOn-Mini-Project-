import React, { useEffect, useState } from 'react'
import * as admins from '../../apis/admin'
import { useNavigate } from 'react-router-dom';

const AdminProductUpd = ({ productNo }) => {
    const navigate = useNavigate()
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

    const [productThmFilee, setproductThmFilee] = useState('');
    const [productConFilee, setproductConFilee] = useState('');
    const [productImgse, setproductImgse] = useState([]);

    //기존 상품 가져오기
    const productinf = async () => {
        try {
            const response = await admins.productSelect(productNo)
            console.log(response.data)
            // {productNo: 1, productName: '너무좋은텐트111', productThumnail: 'C:/upload/b74eb80c-91e2-4c5c-8ad8-ef50bf167e6a_1.png', productCon: 'C:/upload/8680c785-3f13-447b-8a7d-d41657dfbd4b_2.png', productIntro: '이 상품은 텐트입니다. 111', …}
            setProductName(response.data.productName)
            //setProductThmFile(response.data.productThmFile)
            setproductThmFilee(response.data.productThumnail)
            setProductCategory(response.data.productCategory)
            setProductPrice(response.data.productPrice)
            setProductIntro(response.data.productIntro)
            //setProductConFile(response.data.productConFile)
            setproductConFilee(response.data.productCon)
            //setProductImgs(response.data.productImgs)
            setproductImgse(response.data.productImgsUrlList)

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
        // let product = {
        //     productName: productName,
        //     productThmFile: productThmFile,
        //     productCategory: productCategory,
        //     productPrice: productPrice,
        //     productIntro: productIntro,
        //     productConFile: productConFile,
        //     productImgs: productImgs
        // }
        // console.log(product, 'product는?')
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
        const response = await admins.productDel(productNo)
        console.log(response.data)
        alert('삭제 완료!')
        navigate('/admin/productlist')
    }
    useEffect(() => {
        productinf()
    }, [])


    return (
        <>

            <div className="w-100 text-center py-4">
                <h5>렌탈샵 상품 수정/삭제</h5>
            </div>

            <div className="container">
                <form name="product" >
                    <input type="hidden" field="*{productNo}" />
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
                    </div>
                    <button onClick={() => { handleDel(productNo) }} className="btn btn-danger px-3">상품 삭제</button>
                    <div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminProductUpd