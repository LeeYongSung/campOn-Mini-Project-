import React from 'react'

const ProductBanner = () => {
  return (
    <>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/img/product/store_banner.png" /></div>
            <div class="swiper-slide"><img src="/img/product/store_banner.png" /></div>
            <div class="swiper-slide"><img src="/img/product/store_banner.png" /></div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
    </div>
    </>
  )
}

export default ProductBanner