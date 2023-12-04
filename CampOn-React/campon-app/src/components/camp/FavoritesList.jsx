import React from 'react'
import { Link } from 'react-router-dom'

const FavoritesList = ({list, onDelete}) => {
  return (
    <div>
        <div class="text-center w-100 py-3">
            <h4>찜한 캠핑장</h4>
        </div>

        {list.map((camp) => (
            <div>
                <div class="d-flex justify-content-between ms-2 my-3 py-2 border-bottom">
                    <Link to={`/api/camp/campproduct/${camp.campNo}`} class="d-flex justify-content-between">
                        <div class="favorites_icon text-center">
                            <img src="/img/camp/campicon1.png" alt="캠핑아이콘" class="pt-1"/>
                        </div>
                        <div class="favorites_con pt-2 ms-2">
                            <div><h6>{camp.campName}</h6></div>
                            <div>
                                <span>{camp.campAddress}</span>
                                <span> / </span>
                                <span>{camp.campOpen}</span>
                            </div>
                        </div>
                    </Link>
                    <div class="pe-3">
                        <a class="btn btn-lg btn-danger" onClick={() => onDelete(camp.favoritesNo)}>삭제</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default FavoritesList