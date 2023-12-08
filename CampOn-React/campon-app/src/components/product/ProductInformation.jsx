import React from 'react'

const ProductInformation = ( { rentInfoClick, rentInfo, productInfoClick, productInfo, closeBtn, closeProductBtn } ) => {
  console.log(rentInfo);
  return (
    <>
      <div>
          <div className="d-flex justify-content-between py-4 my-3 border-top border-bottom c_pointer" onClick={ () => rentInfoClick() }>
              <div className="ps-2">대여안내</div>
              <div className="pe-2"><span className="material-symbols-outlined">chevron_right</span></div>
          </div>
          <div className="d-flex justify-content-between py-4 my-3 border-top border-bottom c_pointer" onClick={ () => productInfoClick() } >
              <div className="ps-2">상품 정보 공시</div>
              <div className="pe-2"><span className="material-symbols-outlined">chevron_right</span></div>
          </div>
      </div>
        {/* <!-- 대여안내 --> */}
        <div className={`border-top border-bottom rentInfo_box ${rentInfo ? "block" : "none"}`}>
          <div className='position-relative'>
            <div className='position-absolute end-0 top-0 pe-4 pt-3'>
              <span className="material-symbols-outlined c_pointer" onClick={ () => closeBtn()}>close</span>
            </div>
            <div className='px-2 pt-5'>
            대여서비스는 "캠핑온"을 통해 캠핑장을 예약한 당사의 고객만 이용가능합니다.
            <br /><br />
            1. 캠핑장을 예약하셔야 정상적인 서비스 이용이 가능합니다.
            <br />
            2. 렌탈기간은 예약하신 캠핑이용 기간과 동일하게 이용가능합니다.
            <br />
            3. 분실 및 파손, 회수 지연시 아래 위약금이 청구됩니다.
            <br />
                분실 : (1일 렌탈비 * 365일)
                <br />
                파손 : (1일 렌탈비 * 180일)
                <br />
                지연 : (1일 렌탈비 * 지연일)
            </div>
          </div>
        </div>

        {/* <!-- 상품 정보 고시 --> */}
        <div className={`border-top border-bottom productInfo_box ${productInfo ? "block" : "none"}`} >
          <div className='position-relative'>
            <div className='position-absolute end-0 top-0 pe-4 pt-3'>
              <span className="material-symbols-outlined c_pointer" onClick={ () => closeProductBtn()}>close</span>
            </div>
            <div className='px-2 pt-5'>
            상품명: 상세페이지 참조<br />
            제조국: 상세페이지 참조<br />
            인증번호: 상세페이지 참조<br />
            <br /><br />
            상품의 분쟁 발생시 관련 법령 또는 "소비자분쟁해결기준"<br />
            (공정거래위원회 고시 제2022-25호, 2022. 12. 28. 발령·시행)에 따라 해결할 수 있습니다.
            </div>
          </div>
        </div>
    </>
  )
}

export default ProductInformation