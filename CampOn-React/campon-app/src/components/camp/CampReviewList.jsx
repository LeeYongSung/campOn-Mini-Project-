import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'
// npm install moment 해주기

const CampReviewList = ({newReviewList}) => {
  return (
    <div className="review mb-5 container-sm">
        <div>
            <h5 className="mt-3">실시간리뷰</h5>
        </div>
        <div className='w-100 border rounded py-2 my-2'>
            {newReviewList.map((board) => (
                <Link to={`/api/board/crread/${board.reviewNo}`} className='d-flex justify-content-between'>
                <div class="review_imgbox px-2 py-2">
                    <img src={`/api/img?file=${board.reviewImg}`} />
                </div>
                <div class="review_conbox py-2">
                    <div>
                        <div>
                            <p>{board.reviewTitle}</p>
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