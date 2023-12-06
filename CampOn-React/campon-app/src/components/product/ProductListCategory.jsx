import React from 'react'
import { Link } from 'react-router-dom'

const ProductListCategory = ( { OnCategoryClick } ) => {
  return (
    <>
      <div className="container">
        <div className="category_btn py-4 d-flex">
            
            <div>
                <Link to={{ pathname: "/product/productList", state: {category: '텐트'}}} className="btn-category btn btn-lg" onClick={() => OnCategoryClick('텐트')} >
                    <div>
                        <img src="/img/product/product1.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>텐트</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={{ pathname: "/product/productList", state: {category: '테이블'}}} className="btn-category btn btn-lg" onClick={() => OnCategoryClick('테이블')}>
                    <div>
                        <img src="/img/product/product2.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>테이블</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={{ pathname: "/product/productList", state: {category: '체어'}}} className="btn-category btn btn-lg" onClick={() => OnCategoryClick('체어')}>
                    <div>
                        <img src="/img/product/product3.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>체어</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={{ pathname: "/product/productList", state: {category: '매트'}}} className="btn-category btn btn-lg" onClick={() => OnCategoryClick('매트')}>
                    <div>
                        <img src="/img/product/product4.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>매트</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={{ pathname: "/product/productList", state: {category: '조명'}}} className="btn-category btn btn-lg" onClick={() => OnCategoryClick('조명')}>
                    <div>
                        <img src="/img/product/product5.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>조명</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={{ pathname: "/product/productList", state: {category: '화로대'}}} className="btn-category btn btn-lg" onClick={() => OnCategoryClick('화로대')}>
                    <div>
                        <img src="/img/product/product6.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>화로대</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={{ pathname: "/product/productList", state: {category: '타프'}}} className="btn-category btn btn-lg" onClick={() => OnCategoryClick('타프')}>
                    <div>
                        <img src="/img/product/product7.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>타프</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={{ pathname: "/product/productList", state: {category: '수납'}}} className="btn-category btn btn-lg" onClick={() => OnCategoryClick('수납')}>
                    <div>
                        <img src="/img/product/product8.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>수납</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={{ pathname: "/product/productList", state: {category: '캠핑가전'}}} className="btn-category btn btn-lg" onClick={() => OnCategoryClick('캠핑가전')}>
                    <div>
                        <img src="/img/product/product9.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>캠핑가전</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={{ pathname: "/product/productList", state: {category: '주방용품'}}} className="btn-category btn btn-lg" onClick={() => OnCategoryClick('주방용품')}>
                    <div>
                        <img src="/img/product/product10.png" alt="상품아이콘" />
                    </div>
                    <div>
                        <span>주방용품</span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductListCategory