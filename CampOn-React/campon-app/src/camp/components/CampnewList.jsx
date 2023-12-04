import React from 'react'
import { Link } from 'react-router-dom'

const CampnewList = ({newList}) => {
  return (
    <div>
        <h3>추천 상품</h3>
        <div classNam="row w-100">
            {newList.map((camp) => (
                <div class="col-4">
                    <Link to={`/api/camp/campproduct/${camp.campNo}`}>
                        <li class="mx-1"><img src={`/img?file=${camp.cpiUrl}`} /></li>
                        <li class="w-100 text-center">{camp.campName}</li>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CampnewList