import React from 'react'
import { Link } from 'react-router-dom';

const CampReview = ({productsreview}) => {
    if(productsreview == null)
        return(
            <div className="border-top border-bottom">
                <div className="container-sm w-100 my-2">
                    <div><h5>캠핑장리뷰</h5></div>
                    <div>
                        <p className="w-100 text-center">등록된 리뷰가 없습니다.</p>
                    </div>
                    <div className="w-100 text-center mt-2">
                        <a href="#" className="d-block bg-warning py-2">리뷰 더보기</a>
                    </div>
                </div>
            </div>
        )
    else
        return(
            <div className="border-top border-bottom">
                <div className="container-sm w-100 my-2">
                    <div><h5>캠핑장리뷰</h5></div>
                    <div>
                            <div className="review_box w-100 border">
                                <Link to={`/api/board/crread?reviewNo=${productsreview.reviewNo}`}>
                                    <ul>
                                        <li className="ps-4 pt-2">
                                            <p>{productsreview.userName}</p>
                                        </li>
                                        <li className="ps-4">
                                            <p>{productsreview.campName}</p>
                                        </li>
                                    </ul>
                                    <ul className="d-flex justify-content-between py-2">
                                        <li className="ps-3">
                                            <p>{productsreview.reviewCon}</p>
                                        </li>
                                        <li className="pe-3">
                                            <div className="review_img">
                                                <img src={`/img?file=${productsreview.reviewImg}`}/>
                                            </div>
                                        </li>
                                    </ul>
                                </Link>
                            </div>
                    </div>
                    <div className="w-100 text-center mt-2">
                        <a href="#" className="d-block bg-warning py-2">리뷰 더보기</a>
                    </div>
                </div>
            </div>
    )
}

export default CampReview