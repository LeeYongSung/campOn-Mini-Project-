import Moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

const CartList = ({product}) => {
  return (
    <div>
      <div className="text-center w-100 py-3 border-bottom border-top mt-3">
             <h5>렌탈상품 대여 현황</h5>
      </div>
      {product.map((product) => (
        <div className="container border">
                <div className="border position-relative">
                    <div className="campProductImg w-100">
                        <img src={`/api/img?file=${product.productThumnail}`} alt="상품썸네일" className="py-2 px-2 w-100" />
                    </div>
                    <div className="container-sm py-3  my-2">
                        <div className="campProductCon">
                            <div>
                                <h5><span>{product.productName}</span></h5>
                            </div>
                            <div>
                                <div>
                                    <p><span>{product.productIntro}</span></p>
                                </div>
                                <div>
                                    <p><h5>{product.productPrice}원</h5></p>
                                </div>
                                <div className="pe-2">
                                    <p><span>{product.orderCnt}</span>개</p>
                                </div>
                                <div className="w-100 d-flex justify-content-between reservationCon my-2 border-bottom">
                                    <div><h6>대여기간</h6></div>
                                    <div><span>{Moment(product.startDate).format('YYYY-MM-DD')} ~ {Moment(product.EndDate).format('YYYY-MM-DD')}</span></div>
                                </div>
                            </div>
                            <div className="text-end">
                              <Link to={`/api/board/prinsert?orderNo=${product.orderNo}`} className="btn btn-primary">리뷰쓰러가기</Link>
                            </div>
                        </div>
                        <div className="campproduct_close pt-3 pe-3"><a href="javascript:;" className="campproduct_close_btn"><span className="material-symbols-outlined">close</span></a></div>
                    </div>
                </div>
            </div>
      ))}
    </div>
  )
}

export default CartList