import React from 'react'

const ProductDetail = ( { product, reviewCount, addProductsave, moreBtn, moreState } ) => {
  if (!product) {
    return null;  
  }
  return (
    <>
      <div className='productsaveBtn'>
        <button type="button" className='btn btn-lg btn-warning rounded-5 py-2 px-3' onClick={() => addProductsave(product.productNo)}>찜</button>
      </div>
    
      <div>
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide product_slide_image imgCenter"><img src={product.productThumnail} alt="썸네일이미지" /></div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
        </div>
        <div className="container">
            <div className="w-100 border-bottom py-3">
                <div>
                    <span>{product.productCategory}</span>
                </div>
                <div>
                    <h5>{product.productName}</h5>
                </div>
            </div>
            <div className="pb-4 border-bottom">
                <div className="py-4 ps-2">
                    <span>리뷰수 </span><span>{reviewCount}</span>
                </div>
                <div className="ps-2">
                    <span>{product.productPrice.toLocaleString()}</span><span>원</span>

                </div>
            </div>
            <div className="position-relative productdetailInfo border-bottom" style={{ height: moreState ? 'auto' : '300px' }}>
                <div className="py-2 w-100 productdetailImg">
                    <img src={product.productCon} alt="상세설명이미지" className="w-100" />
                </div>
                <div className="position-absolute bottom-0 w-100 text-center bg-white py-2">
                    <button className="product_more" onClick={() => moreBtn()}>더보기<span className="material-symbols-outlined">expand_more</span></button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail