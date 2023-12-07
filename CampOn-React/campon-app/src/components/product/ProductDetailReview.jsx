import React from 'react'

const ProductDetailReview = ( { productReview } ) => {
  return (
    <>
      {/* 리뷰목록 */}
      <div className="container">
            <div className="py-3">
                <h5>상품리뷰</h5>
            </div>
            { productReview != null && productReview.map( (review) => (
                <a href={review.prNo} >
                    <div className="d-flex justify-content-between border py-4">
                        <div className="review_imgbox border mx-2 imgCenter">
                            <img src={review.prImg} />
                        </div>
                        <div className="review_conbox">
                            <div>
                                <div>
                                    <span>{review.productName}</span>
                                </div>
                                <div>
                                    <span>{review.prTitle}</span>
                                </div>
                                <div>
                                    <span>{review.prCon}</span>
                                </div>
                                <div>
                                    <span>{review.regDate}</span>
                                </div>
                                {/* 글쓴이 프로필사진 넣을거면 넣어야 함 */}
                                <div>
                                    <span>{review.userId}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
          </div>
    </>
  )
}

export default ProductDetailReview