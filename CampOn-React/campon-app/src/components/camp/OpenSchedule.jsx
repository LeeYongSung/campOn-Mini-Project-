import React from 'react'
import $ from 'jquery'

const OpenSchedule = ({camp, startDate}) => {
    $(document).ready(function() {    
        const date = new Date(startDate)
        const weekday = ['일', '월', '화', '수', '목', '금', '토']
        const daycheck = weekday[date.getDay()];
        
        $('#day').text('(' + daycheck + ')')
    })

  return (
    <div>
        <p className="schdule_txt py-2">30일 이내의 오픈일정을 보여줍니다</p>
        <div className="w-100 text-center py-2 schdule_date d-flex justify-content-center">
            <h4>{startDate}</h4><span id="day" className="fs-5"></span>
        </div>
        {camp.map((open) => (
            <div className="w-100 py-2 my-2">
            <div className="openscheduleImg">
                <img src={open.cpiUrl} alt="오픈일정" />
            </div>
            <div className="w-100 d-flex justify-content-between openscheduleCon">
                <div className="ps-3">
                    <div className="pt-2 openscheduleCon_campName">
                        <h5>{open.campName}</h5>
                    </div>
                    <div className="pt-3 openscheduleCon_campType">
                        <p>{open.campTypeName}</p>
                    </div>
                    <div className="openscheduleConAddress">
                        <p>{open.campAddress}</p>
                    </div>
                </div>
                <div>
                    <div className="openscheduleConOpen pt-3 text-end pe-3">
                        <h5>9시 오픈</h5>
                    </div>
                    <div className="openscheduleConClose pe-3">
                        <span>{open.campOpen}</span>~<span>{open.campClose}</span>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default OpenSchedule