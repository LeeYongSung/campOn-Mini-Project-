import React from 'react'

const CampSearch = () => {
  return (
    <div class="container-sm search_box">
        <form action="/camp/campproducts" method="get" class="w-100" >

            <div class="form-floating my-2">
                <input type="text" id="keyword" name="keyword" class="form-control" placeholder="검색명"/>
                <label for="keyword">검색명</label>
            </div>
            <div class="w-100 d-flex justify-content-between">
                <div class="form-floating w-100 me-1">
                    <input type="date" class="form-control" id="searchDate" name="searchDate"/>
                </div>
                <div class="form-floating w-100 ms-1">
                    <input type="hidden" id="regionNo" name="regionNo" value="0"/>
                    <input type="button" class="form-control" id="region" value="지역"/>
                </div>
            </div>
            <div class="w-100 d-flex justify-content-between my-4">
                <span>캠핑종류</span>
                <input type="hidden" name="campTypeNos" />
                <input type="checkbox" id="autocamping" name="campTypeNos" class="form-control" value="1"/>
                <label for="autocamping"><span></span>오토캠핑</label>

                <input type="checkbox" id="glamping" name="campTypeNos" class="form-control" value="2"/>
                <label for="glamping"><span></span>글램핑</label>

                <input type="checkbox" id="caravan" name="campTypeNos" class="form-control" value="3"/>
                <label for="caravan"><span></span>카라반</label>

                <input type="checkbox" id="pension" name="campTypeNos" class="form-control" value="4"/>
                <label for="pension"><span></span>펜션</label>

                <input type="checkbox" id="campnik" name="campTypeNos" class="form-control" value="5"/>
                <label for="campnik"><span></span>캠프닉</label>
            </div>
            <div class="form-floating mb-3">
                <button type="submit"  class="btn btn-outline-secondary btn-lg w-100 py-3 rounded-0" >검색</button>
            </div>
        </form>
    </div>
  )
}

export default CampSearch