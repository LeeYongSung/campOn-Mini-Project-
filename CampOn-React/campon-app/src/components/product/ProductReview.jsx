import React from 'react'
import { Link } from 'react-router-dom'

const ProductReview = ( { productReview } ) => {
  return (
    <>
        <div className="review mb-5 container">
            <div>
                <h5 className="my-4">상품 후기</h5>
            </div>
            {productReview !=null && productReview.map((review) => (
                  <div className="border mb-3">
                      <Link to={`/api/board/prread/${review.prNo}`} className="d-flex justify-content-between">
                          <div className="review_imgbox my-2 mx-2 px-2 py-2">
                              <img src={`api/img?file=${review.prImg}`} />
                          </div>
                          <div className="review_conbox">
                              <div className="pt-4">
                                  <div>
                                      <p>{review.prTitle}</p>
                                  </div>
                                  <div>
                                      <p>{review.prCon}</p>
                                  </div>
                                  <div>
                                      <span>{review.productName}</span>
                                  </div>
                                  <div>
                                      <span>{review.regDate}</span>
                                  </div>
                                  <div>
                                      <p>{review.userId}</p>
                                  </div>
                              </div>
                          </div>
                      </Link>
                  </div>
            ))}
        </div>
    </>
  )
}

export default ProductReview