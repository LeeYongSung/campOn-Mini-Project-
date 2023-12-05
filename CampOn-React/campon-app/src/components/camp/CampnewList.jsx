import React from 'react'
import { Link } from 'react-router-dom'

const CampnewList = ({newList}) => {
  return (
    <div className='new_camp w-100 my-5'>
        <h5 className='mt-4  mb-2'>신규 상품</h5>
        <div className="row w-100">
            {newList.map((camp) => (
                <div className="col-4">
                    <Link to={`/api/camp/campproduct/${camp.campNo}`}>
                        <li className="mx-1"><img src={camp.cpiUrl} /></li>
                        <li className="w-100 text-center">{camp.campName}</li>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CampnewList