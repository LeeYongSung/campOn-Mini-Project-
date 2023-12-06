import React from 'react'

const ProductPayment = ( { cartList, campList } ) => {
    if(campList == null ) {
        return 
    }
  return (
    <>
        <div className="w-100 text-center py-4">
            <h5>결제하기</h5>
        </div>
        <form action="/order/paymentpro" method="post" id="payForm">
            {/* <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" /> */}
            <div className="container">
                <div>
                    <h6>주문상품</h6>
                </div>
                <div>
                    {cartList != null && cartList.map( (product) => (
                        <div className="border my-2">
                            <input type="hidden" value={product.productNo} name="productNos" />
                            <div className="paymentImg">
                                <img src={product.productThumnail} alt="상품썸네일" className="w-100" />
                            </div>
                            <div className="d-flex justify-content-between py-2 paymentBox">
                                <div className="d-flex justify-content-center paymentCon">
                                    <div className="pt-2 ps-2">
                                        <div>
                                            <span>{product.productCategory}</span>
                                        </div>
                                        <div className="pt-3">
                                            <h5>{product.productName}</h5>
                                        </div>
                                        <div>
                                            <span>{product.productIntro}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2 paymentCount me-5">
                                    <h6 id="productPrice">{product.productPrice}원</h6>
                                    <label for="cartCnt"><span></span></label>
                                    <div className="reservationNop_box d-flex form-floating ms-2">
                                        <button className="countDown form-control">-</button>
                                        <input type="text" name="cartCnts" id="cartCnt" value={product.cartCnt}
                                            className="cartCnt form-control" min="1" max="999" />
                                        <button className="countUp form-control">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="pt-4 pb-2 ps-2 w-100 border-top">
                <h5>배송받을 캠핑장을 선택해주세요 </h5>
            </div>
                <div className="container">
                    <div className="w-100 d-flex justify-content-between border py-5 rounded position-relative my-2 reservationListBox">
                        <div className="reservationListImg">
                            <img src={campList.cpiUrl} alt="캠핑상품 이미지" className="w-100" />
                        </div>
                        <div className="pe-2 reservationListCon ps-3">
                            <div>
                                <div>
                                    <h5>{campList.campName}</h5>
                                </div>
                                <div> <span>{campList.cpdtName}</span></div>
                                <div><span>{campList.reservationStart} ~ {campList.reservationEnd}</span>
                                </div>
                                <div><span>{campList.reservationDate}일</span></div>
                                <div className="d-flex justify-content-between">
                                    <div><span>예약번호</span></div>
                                    <div>
                                        <span>{campList.reservationNo}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-absolute bottom-0 end-0 pe-2 pb-1">
                            <input type="radio" id="campSelect" value={campList.reservationNo}
                                data-res={campList.reservationDate} name="reservationNo" className="selectCamp" />
                            <label for="campSelect"><span></span>캠핑장 선택</label>
                        </div>
                    </div>
                </div>

            {/* 결제방법 선택 */}
            <div className="w-100 py-5 border-top border-bottom">
                <div>
                    <p>결제 방법 선택</p>
                </div>
                <div className="w-100 text-center bg-body-secondary py-3 d-flex justify-content-center">
                    <div className="px-2">
                        <input type="radio" id="card" value="카드" name="pmType" className="pmType" />
                        <label for="card"><span></span>카드 결제</label>
                    </div>
                    <div className="px-2">
                        <input type="radio" id="bankPay" value="무통장입금" name="pmType" className="pmType" />
                        <label for="bankPay"><span></span>무통장 입금</label>
                    </div>
                </div>
            </div>


            {/* 총 렌트 금액 */}
            <div className="w-100 text-end pe-2 py-3">
                <h4>총 렌트 금액 : <span id="totalPrice"></span></h4>
            </div>


            {/* 결제하기 버튼 */}
            <button type="button" onClick={"requestPays()"} className="btn btn-lg btn-warning paymentBtn w-100 py-3 rounded-0">결제하기</button>

        </form>
    </>
  )
}

export default ProductPayment