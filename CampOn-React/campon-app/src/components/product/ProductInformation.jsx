import React from 'react'

const ProductInformation = () => {
  return (
    <>
      <div>
          <div class="d-flex justify-content-between py-4 my-3 border-top border-bottom">
              <div class="ps-2">대여안내</div>
              <div class="pe-2"><span class="material-symbols-outlined">chevron_right</span></div>
          </div>
          <div class="d-flex justify-content-between py-4 my-3 border-top border-bottom">
              <div class="ps-2">상품 정보 공시</div>
              <div class="pe-2"><span class="material-symbols-outlined">chevron_right</span></div>
          </div>
      </div>
        {/* <!-- 대여안내 --> */}
        <div class="none">
            대여서비스는 "캠핑온"을 통해 캠핑장을 예약한 당사의 고객만 이용가능합니다.
            1. 캠핑장을 예약하셔야 정상적인 서비스 이용이 가능합니다.
            2. 렌탈기간은 예약하신 캠핑이용 기간과 동일하게 이용가능합니다.
            3. 분실 및 파손, 회수 지연시 아래 위약금이 청구됩니다.
                분실 : (1일 렌탈비 * 365일)
                파손 : (1일 렌탈비 * 180일)
                지연 : (1일 렌탈비 * 지연일)
        </div>

        {/* <!-- 상품 정보 고시 --> */}
        <div class="none">
            상품명: 상세페이지 참조
            제조국: 상세페이지 참조
            인증번호: 상세페이지 참조

            상품의 분쟁 발생시 관련 법령 또는 "소비자분쟁해결기준"
            (공정거래위원회 고시 제2022-25호, 2022. 12. 28. 발령·시행)에 따라 해결할 수 있습니다.
        </div>
    </>
  )
}

export default ProductInformation