import React from 'react'
import { Link } from 'react-router-dom'

const ProductCart = ( { cartList } ) => {
  return (
    <>
        <div className="text-center w-100 py-4">
        <h5>장바구니</h5>
    </div>
    {cartList != null && cartList.map( (cart) => (
        <div className="container mb-3">
            <div className="border rounded position-relative pb-4">
                {/* 썸네일 */}
                <div className="cartImg border-bottom w-100">
                    <img src={cart.productThumnail} className="w-100" />
                </div>
                <div className="w-100 d-flex justify-content-between cartCon py-4">
                    <div className="ps-2 pt-2">
                        <div>
                            {/* 카테고리 */}
                            <span>{cart.productCategory}</span>
                        </div>
                        <div>
                            {/* 상품명 */}
                            <h5>{cart.productName}</h5>
                        </div>
                        <div className="pt-2">
                            {/* 상품기본내용 */}
                            <span>{cart.productIntro}</span>
                        </div>
                    </div>
                    <div className="pe-2 pt-4">
                        {/* 금액 */}
                        <h5>{cart.productPrice}원</h5>
                    </div>
                </div>
                <div className="position-absolute bottom-0 end-0 d-flex mb-1 me-1">
                    <div>
                        {/* 상세설명 */}
                        <Link to={`/product/productdetail?productNo=${cart.productNo}`} className="btn btn-success font08em">상세정보</Link>
                    </div>
                    <div className="ms-2">
                        {/* 장바구니 삭제 */}
                        <form action="/product/cartDelete" method="post">
                            {/* <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" /> */}
                            <input type="hidden" value={cart.cartNo} name="cartNo" />
                            <button type="submit" onclick="confirm('장바구니에서 삭제하시겠습니까?')" className="btn btn-danger font08em">삭제</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ))}
    <div>
        <div className="cartTotal position-fixed">
            <a href="/order/payment" className="w-100 d-block btn btn-warning rounded-0 py-3">대여하기</a>
        </div>
    </div>

    <div>
        <h3>확인사항</h3>
        <p>
            렌탈 서비스는 캠핑장을 예약하신 회원에 한해 이용 가능한  "캠핑온"만의 특화된 서비스 입니다. 
        </p>
    </div>
    </>
  )
}

export default ProductCart