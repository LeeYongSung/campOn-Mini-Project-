import React, { useEffect, useState } from 'react'

const AdminProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('/admin/productlist')
            .then((res) => res.json())
            .then((data) => setProductList(data))
            .catch((e) => console.error('에러는?', e))
    }, [])
    console.log(productList, '프로덕트리스트 찍어보기')


    return (
        <div className='container'>
            <div className="w-100 text-center py-3">
                <h5>렌탈샵 상품 관리</h5>
            </div>
            <div className="text-end">
                <a href="/admin/productadd" value="상품 등록" className="btn btn-warning py-2 px-3 ">렌탈샵 상품 등록</a>
            </div>
            {productList.map((product) => (
                <>
                    <div className="container w-100">
                        <div className="border rounded my-2 position-relative AdminProduct">
                            <div className="AdminProductImg w-100 border-bottom">
                                <img src={`http://localhost:8081/img?file=${product.productThumnail}`} alt="상품썸네일" className="w-100" />
                            </div>
                            <div className="w-100 d-flex justify-content-between pb-5 pt-2">
                                <div className="ps-3">
                                    <div>
                                        <span>{product.productCategory}</span>
                                    </div>
                                    <div>
                                        <h4>{product.productName}</h4>
                                    </div>
                                    <div>
                                        <span>{product.productIntro}</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>{product.regDate}</span>
                                    </div>
                                    <div>
                                        <span>{product.updDate}</span>
                                    </div>
                                    <div className="py-2 me-2">
                                        <h5>{product.productPrice}</h5>
                                    </div>
                                    <div className="position-absolute bottom-0 end-0 py-1 px-1">
                                        <a href={`/admin/productupdate?productNo=${product.productNo}`} className="btn btn-warning">상품 수정</a>
                                        <a href={`/admin/delete?productNo=${product.productNo}`} className="btn btn-danger">상품 삭제</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            )}
        </div>
    )
}

export default AdminProductList