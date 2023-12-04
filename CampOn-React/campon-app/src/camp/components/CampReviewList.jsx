import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'
// npm install moment 해주기

const CampReviewList = ({newReviewList}) => {
  return (
    <div class="review mb-5 container-sm">
        <div>
            <h5 class="mt-3">실시간리뷰</h5>
        </div>
        <div>
            {newReviewList.map((board) => (
                <Link to={`/api/board/crread/${board.reviewNo}`}>
                <div class="review_imgbox px-2 py-2">
                    <img src={`/img?file=${board.reviewImg}`} />
                </div>
                <div class="review_conbox py-2">
                    <div>
                        <div>
                            <p text={`${board.reviewTitle}`}></p>
                        </div>
                        <div>
                            {/* <span text={`${ #dates.format( board.regDate, 'yyyy-MM-dd') }`}></span> */}
                            <span>{Moment(board.regDate).format('YYYY-MM-DD')}</span>
                        </div>
                        <div>
                            <span>{board.campName}</span>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default CampReviewList