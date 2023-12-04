import React from 'react'
import { Link } from 'react-router-dom'

const ProductMenu = ( { onCategoryClick } ) => {
  return (
    <>
      <div class="container w-100">
        {/* <!--카테고리--> */}
        <div class="container-sm w-100 py-4 my-3">
            <div class="d-flex justify-content-between text-center product_menu">
                <div>
                    <Link to="/productList" onClick={() => onCategoryClick('텐트')}>
                        <div>
                            <img src="/img/product/product1.png" alt="상품아이콘" />
                        </div>
                        <div>
                            <span>텐트</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/productList" onClick={() => onCategoryClick('테이블')}> 
                        <div>
                            <img src="/img/product/product2.png" alt="상품아이콘" />
                        </div>
                        <div>
                            <span>테이블</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/productList" onClick={() => onCategoryClick('체어')}> 
                        <div>
                            <img src="/img/product/product3.png" alt="상품아이콘" />
                        </div>
                        <div>
                            <span>체어</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/productList" onClick={() => onCategoryClick('매트')}> 
                        <div>
                            <img src="/img/product/product4.png" alt="상품아이콘" />
                        </div>
                        <div>
                            <span>매트</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/productList" onClick={() => onCategoryClick('조명')}> 
                        <div>
                            <img src="/img/product/product5.png" alt="상품아이콘" />
                        </div>
                        <div>
                            <span>조명</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="d-flex justify-content-between text-center product_menu mt-3">
                <div>
                    <Link to="/productList" onClick={() => onCategoryClick('화로대')}> 
                        <div>
                            <img src="/img/product/product6.png" alt="상품아이콘" />
                        </div>
                        <div>
                            <span>화로대</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/productList" onClick={() => onCategoryClick('타프')}> 
                        <div>
                            <img src="/img/product/product7.png" alt="상품아이콘" />
                        </div>
                        <div>
                            <span>타프</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/productList" onClick={() => onCategoryClick('수납')}> 
                        <div>
                            <img src="/img/product/product8.png" alt="상품아이콘" />
                        </div>
                        <div>
                            <span>수납</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/productList" onClick={() => onCategoryClick('캠핑가전')}>
                        <div>
                            <img src="/img/product/product9.png" alt="상품아이콘" />
                        </div>
                        <div>
                            <span>캠핑가전</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/productList" onClick={() => onCategoryClick('주방용품')}> 
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
    </div>
    </>
  )
}

export default ProductMenu