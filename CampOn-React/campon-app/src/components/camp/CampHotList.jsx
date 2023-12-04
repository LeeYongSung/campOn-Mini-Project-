import React from 'react'
import { Link } from 'react-router-dom'

const CampHotList = ({hotList}) => {
  return (
    <div className='best_camp w-100 my-5'>
        <h5 className='mt-4 mb-2'>추천 상품</h5>
        <div className="row w-100">
            {hotList.map((camp) => (
                <div className="col-4">
                    <Link to={`/api/camp/campproduct/${camp.campNo}`}>
                        <li className="mx-1"><img src={`/img?file=${camp.cpiUrl}`} /></li>
                        <li className="w-100 text-center">{camp.campName}</li>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CampHotList