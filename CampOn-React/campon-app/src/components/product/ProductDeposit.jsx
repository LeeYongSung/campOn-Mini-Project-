import React from 'react'
import { Link } from 'react-router-dom'

const ProductDeposit = ( {order, productList, campList, pmType, userName, paytotal} ) => {
    if(campList == null) {
        return
    }
  return (
    <>
        <div className="container">
            <div className="w-100 text-center py-4">
                <h5>대여 신청 완료</h5>
            </div>

            <div>
                <h4>결제 확인</h4>
            </div>
            {/* 상품 목록 출력 */}
            {productList != null && productList.map( (product) => (
                <div className="border px-1 rounded">
                    <div>
                        <img src={`/api/img?file=${product.productThumnail}`} alt="상품썸네일" className="w-100 rounded-top" />
                    </div>
                    <div>
                        <div>
                            <div className="py-2">
                                <h4>{product.productName}</h4>
                            </div>
                            <div>
                                <span>product.productIntro</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-2">
                            <div className="ps-2">
                                <h5>{product.productPrice.toLocaleString()}원</h5>
                            </div>
                            <div className="pe-2">
                                <h5>{product.orderCnt}개</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        <hr />
        
        {/* 배송받을 캠핑장 정보 완료 */}
        <div className="container">
            <div className="w-100 text-start pt-4 pb-2">
                <h5>배송받을 캠핑장</h5>
            </div>
            <div className="w-100 border rounded">
                <div>
                    <div>
                        <img src={campList.cpdiUrl} alt="캠핑상품 이미지" className="w-100 rounded-top" />
                    </div>
                    <div>
                        <div className="pt-3">
                            <div className="py-1 ps-2"><h4>{campList.campName}</h4></div>
                            <div className="py-1 ps-2"><span>{campList.cpdtName}</span></div>
                            <div className="d-flex justify-content-between py-1">
                                <div className="ps-2">
                                    <span>예약날짜</span>
                                </div>
                                <div className="pe-2">
                                    <span>{order.startDate} ~ {order.endDate}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="ps-2">
                                    <span>예약번호</span>
                                </div>
                                <div className="pe-2">
                                    <span>{order.reservationNo}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr />

        {pmType === '무통장입금' && (
            <>
            <h4>
                아직 입금이 확인되지 않았어요. <br /> 
                {new Date(order.depositDeadLine).getFullYear()}-{new Date(order.depositDeadLine).getMonth()+1}-{new Date(order.depositDeadLine).getDate()} 오후 12시 57분까지 입금을 완료할 경우 예약이 최종 확정됩니다.
            </h4>
            <hr />
            <div>
                <h5>입금 정보</h5>
                <p>입금자명: <span>{userName}</span></p> 
                <p>은행(예금주): <strong>농협(캠핑온) 3031030200000000</strong></p> 
                <p>총 입금 금액 : <span>{paytotal.toLocaleString()}원</span></p>
            </div>
            </>
        )}
        {pmType === '카드' && (
            <div>
            <h5>결제 정보</h5>
            <p>주문번호: <span>{order.orderNumber}</span></p> 
            <p>총 결제 금액 : <span>{paytotal.toLocaleString()}</span></p>
            </div>
        )}

        <hr />
        
        <div>
            <p>주문내역 확인은 마이페이지의 "내 예약"에서 하실 수 있습니다.</p>
        </div>

        {/* 버튼 */}
        <div className="d-flex justify-content-center py-4">
                <Link to={"/api/camp/reservation"} className="btn btn-success me-1">내 예약으로</Link>
                <Link to={"/"} className="btn btn-warning ms-1">홈으로</Link>
        </div>
        </div>
    </>
  )
}

export default ProductDeposit