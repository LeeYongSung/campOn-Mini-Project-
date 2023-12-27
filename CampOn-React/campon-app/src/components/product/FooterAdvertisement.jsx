import React from 'react'

const FooterAdvertisement = () => {
  return (
    <>
      <div className="container py-3">
            <div className="border py-3 rounded my-2">
                <a href="javascript:;">
                    <div className="d-flex justify-content-between ads_box">
                        <div className="ads_boxImg py-1 px-1">
                            <img src="/img/product/47669d18-fc07-4c15-a284-a6a3242b0007_20231115_104644.png" style={{objectFit: `cover`, width: '100%', height: '100%'}} alt="광고이미지" />
                        </div>
                        <div className="ads_boxCon">
                            <div><span className="font08em">코아캠핑</span></div>
                            <div><span>코아 산토리니 비치 쉘터</span></div>
                        </div>
                        <div className="ads_boxPrice">
                            <div><span className="text-decoration-line-through font08em">169,000원</span></div>
                            <div><span className="font08em fontbold">160,000원</span></div>
                        </div>
                        <div className="ads_boxArrow">
                            <div className="pt-2 pe-2"><span className="material-symbols-outlined">chevron_right</span></div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="border py-3 rounded my-2">
                <a href="javascript:;">
                    <div className="d-flex justify-content-between ads_box">
                        <div className="ads_boxImg py-1 px-1">
                            <img src="/img/product/ad1bc01b-79c4-479e-a2d2-fa9e4ec6e441_20231115_131551.png"  style={{objectFit: `cover`, width: '100%', height: '100%'}} alt="광고이미지" />
                        </div>
                        <div className="ads_boxCon">
                            <div><span className="font08em">킵</span></div>
                            <div><span>미니멀 우드스토브 소형/중형</span></div>
                        </div>
                        <div className="ads_boxPrice">
                            <div><span className="text-decoration-line-through font08em">25,900원</span></div>
                            <div><span className="font08em fontbold">16,800원</span></div>
                        </div>
                        <div className="ads_boxArrow">
                            <div className="pt-2 pe-2"><span className="material-symbols-outlined">chevron_right</span></div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="border py-3 rounded my-2">
                <a href="javascript:;">
                    <div className="d-flex justify-content-between ads_box">
                        <div className="ads_boxImg py-1 px-1">
                            <img src="/img/product/e9b1fc2a-c94c-4a6b-9967-b40297104c07_20231115_114336.png"  style={{objectFit: `cover`, width: '100%', height: '100%'}}  alt="광고이미지" />
                        </div>
                        <div className="ads_boxCon">
                            <div><span className="font08em">빈슨메시프</span></div>
                            <div><span>베이직 로우체어 1+1</span></div>
                        </div>
                        <div className="ads_boxPrice">
                            <div><span className="text-decoration-line-through font08em">210,000원</span></div>
                            <div><span className="font08em fontbold">105,000원</span></div>
                        </div>
                        <div className="ads_boxArrow">
                            <div className="pt-2 pe-2"><span className="material-symbols-outlined">chevron_right</span></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </>
  )
}

export default FooterAdvertisement