import React from 'react'
import { Link } from 'react-router-dom'

const CampList = ({campList}) => {
  return (
    <div id="camplist">
        {/* {campList.map((camp) => (
            <div className="camp_box pb-3"> 
                <Link to={`/api/camp/campproduct/${camp.campNo}`}>
                    <div>
                        <img src="|/img?file=${camp.cpiUrl}|" className="w-100"/>
                    </div>
                    <div className="py-2">
                        <h3 text="${camp.campName}" className="ps-2"></h3>
                    </div>
                    <div className="d-flex justify-content-between px-3">
                        <div>
                            <p text="${camp.campTypeName}"></p>
                            <p text="${camp.campAddress}"></p>
                        </div>
                        <div>
                            <h4 text="|${camp.cpdtPrice}원|"></h4>
                        </div>
                    </div>
                </Link>
            </div>
        ))} */}
    </div>
  )
}

export default CampList