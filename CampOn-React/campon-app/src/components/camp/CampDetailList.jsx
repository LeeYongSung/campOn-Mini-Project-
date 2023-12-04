import React from 'react'
import { Link } from 'react-router-dom'

const CampDetailList = ({productsproductlist}) => {
  return (
    <div class="campdetail container-sm w-100 py-2 position-relative mb-2">
        <div><h5>캠핑상품</h5></div>
        {productsproductlist.map((detail) => (
            <div className="campdetail_box w-100 mb-3 py-5">
                <Link to={`/api/camp/campdetail/${detail.cpdtNo}`}>
                    <div className="campdetail_product d-flex justify-content-between">
                        <div className="rounded px-2">
                            <img src={`/img?file=${detail.cpdiUrl}`} className="w-100"/>
                        </div>
                        <div>
                            <div><span>{detail.campTypeName}</span></div>
                            <div><h5>{detail.cpdtName}</h5> </div>
                            <div className="text-end pe-3"><span className="fs-5">{detail.cpdtPrice}원</span></div>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
        <div className="text-center w-100 position-absolute bottom-0"><a href="javascript:;" className="campdetail_btn w-100 d-block bg-white">더보기<span className="material-symbols-outlined">expand_more</span></a></div>
    </div>
  )
}

export default CampDetailList