import React from 'react'
import { Link } from 'react-router-dom';

const ProductWishList = ( { wishList, onProductClick, addCart, removeWishList, addCartAll } ) => {
    // 임시 값
    let userNo = 2;
  return (
    <>
        <div className="w-100 text-center py-4">
            <h5>찜 목록</h5> 
        </div>
        <div className="wishlistTotal position-fixed text-center">
            <button className="d-block w-100 btn btn-lg btn-warning rounded-0" onClick={ () => addCartAll()}>
                    <span>전체 장바구니에 담기</span>
            </button>
        </div>
        <div className="container">
            {/* 반복문 시작 */}
            {wishList != null && wishList.map( (product) => (
                <div className="border position-relative wishlist w-100 rounded mb-3">
                    <div>
                        <div className="wishlistImg border-bottom imgCenter">
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
                                <span>{product.productPrice.toLocaleString()}원</span>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute d-flex bottom-0 end-0 wishlistBtn pb-1 pe-2">
                        <div>
                            {/* 상세설명 */}
                            <Link className="btn btn-outline-warning font08em" to={{ pathname: "/product/productDetaile", state: {productNo: product.productNo}}} onClick={ () => onProductClick(product.productNo)}>상세정보</Link>
                        </div>
                        <div className="ps-2">
                            {/* 장바구니 담기 */}
                            <button type='button' className="btn btn-outline-success font08em" onClick={ () => addCart(product.productNo)}>장바구니 담기</button>
                        </div>
                        <div className="ps-2">
                            {/* 찜 삭제 */}
                            <button type="button" onClick={() => removeWishList(product.productsaveNo)} className="btn btn-danger font08em">삭제</button>
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