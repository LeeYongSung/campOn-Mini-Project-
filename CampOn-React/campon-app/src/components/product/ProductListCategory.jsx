import React from 'react'

const ProductListCategory = () => {
  return (
    <>
      <div class="container">
        <div class="category_btn py-4 d-flex">
            
            <div>
                <a href="/product?category=텐트" data-category="텐트" class="btn-category btn btn-lg" >
                    <div>
                        <img src="/img/product/product1.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>텐트</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="/product?category=테이블" data-category="테이블" class="btn-category btn btn-lg">
                    <div>
                        <img src="/img/product/product2.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>테이블</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="/product?category=체어" data-category="체어" class="btn-category btn btn-lg">
                    <div>
                        <img src="/img/product/product3.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>체어</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="/product?category=매트" data-category="매트" class="btn-category btn btn-lg">
                    <div>
                        <img src="/img/product/product4.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>매트</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="/product?category=조명" data-category="조명" class="btn-category btn btn-lg">
                    <div>
                        <img src="/img/product/product5.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>조명</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="/product?category=화로대" data-category="화로대" class="btn-category btn btn-lg">
                    <div>
                        <img src="/img/product/product6.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>화로대</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="/product?category=타프" data-category="타프" class="btn-category btn btn-lg">
                    <div>
                        <img src="/img/product/product7.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>타프</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="/product?category=수납" data-category="수납" class="btn-category btn btn-lg">
                    <div>
                        <img src="/img/product/product8.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>수납</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="/product?category=캠핑가전" data-category="캠핑가전" class="btn-category btn btn-lg">
                    <div>
                        <img src="/img/product/product9.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>캠핑가전</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="/product?category=주방용품" data-category="주방용품" class="btn-category btn btn-lg">
                    <div>
                        <img src="/img/product/product10.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>주방용품</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductListCategory