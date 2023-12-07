import React from 'react'
import { Link } from 'react-router-dom'

const CampList = ({campList}) => {
  return (
    <div id="camplist">
        {/* {campList.map((camp) => (
            <div className="camp_box pb-3"> 
                <Link to={`/api/camp/campproduct/${camp.campNo}`}>
                    <div>
                        <img src={camp.cpiUrl} className="w-100"/>
                    </div>
                    <div className="py-2">
                        <h3 className="ps-2">{camp.campName}</h3>
                    </div>
                    <div className="d-flex justify-content-between px-3">
                        <div>
                            <p>{camp.campTypeName}</p>
                            <p>{camp.campAddress}</p>
                        </div>
                        <div>
                            <h4>{camp.cpdtPrice}원</h4>
                        </div>
                    </div>
                </Link>
            </div>
        ))} */}
    </div>
  )
}

export default CampList