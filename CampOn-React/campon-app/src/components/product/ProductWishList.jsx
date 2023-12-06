import React from 'react'
import { Link } from 'react-router-dom';

const ProductWishList = ( { wishList } ) => {
    // 임시 값
    let userNo = 2;
  return (
    <>
        <div className="w-100 text-center py-4">
            <h5>찜 목록</h5> 
        </div>
        <div className="wishlistTotal position-fixed text-center">
            <Link className="d-block w-100 btn btn-lg btn-warning rounded-0" to={"/product/addcartAll"}>
                    <span>전체 장바구니에 담기</span>
            </Link>
        </div>
        <div className="container">
            {/* 반복문 시작 */}
            {wishList != null && wishList.map( (product) => (
                <div className="border position-relative wishlist w-100 rounded mb-3">
                    <div>
                        <div className="wishlistImg border-bottom">
                            {/* 썸네일 */}
                            <img src={product.productThumnail} className="w-100" />
                        </div>
                        <div className="w-100 d-flex justify-content-between py-3">
                            <div className="wishlistCon ps-2 pt-2">
                                <div>
                                    {/* 카테고리 */}
                                    <span>{product.productCategory}</span>
                                </div>
                                <div>
                                    {/* 상품명 */}
                                    <h5>{product.productName}</h5>
                                </div>
                                <div className="pt-2 mb-2">
                                    {/* 상품기본내용 */}
                                    <span>{product.productIntro}</span>
                                </div>
                            </div>
                            <div className="pt-4 pe-3">
                                {/* 금액 */}
                                <span>{product.productPrice}원</span>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute d-flex bottom-0 end-0 wishlistBtn pb-1 pe-2">
                        <div>
                            {/* 상세설명 */}
                            <Link className="btn btn-outline-warning font08em" to={`/product/productdetail?productNo=${product.productNo}`}>상세정보</Link>
                        </div>
                        <div className="ps-2">
                            {/* 장바구니 담기 */}
                            <Link className="btn btn-outline-success font08em" to={`/product/addcart?productNo=${product.productNo}&userNo=${userNo}`}>장바구니 담기</Link>
                        </div>
                        <div className="ps-2">
                            {/* 찜 삭제 */}
                            <form action="/product/wishlistDelete" method="post">
                                {/* <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" /> */}
                                <input type="hidden" value={product.productsaveNo} name="productsaveNo" />
                                <button type="submit" className="btn btn-outline-danger font08em" onClick={"confirm('찜 목록에서 삭제하시겠습니까?')"}>삭제</button>
                            </form>
                        </div>
                    </div>
                    <br />
                </div>
            ))}
        </div>
    </>
  )
}

export default ProductWishList