import React from 'react'

const ProductList = ( { category } ) => {
  return (
    <>
      <div class="container">
        {category != null && category.map( (product) => (
          <div class="border rounded position-relative mb-3 pb-4 mt-2">
              <div class="productListImg">
                  <img src={product.productThumnail} alt="상품썸네일" class="w-100" />
              </div>
              <div class="">
                  <div class="productList_Con ps-2 pt-3">
                      <div>
                          <span>{product.productCategory}</span>
                      </div>
                      <div>
                          <h4>{product.productName}</h4>
                      </div>
                      <div>
                          <span>{product.productIntro}</span>
                      </div>
                  </div>
                  <div class="ps-3">
                      <div class="pt-3 pe-2">
                          <h5>{product.productPrice}원</h5>
                      </div>
                  </div>
              </div>
              <div class="position-absolute bottom-0 end-0 me-2 mb-1">
                  {/* <a href="|/product/productdetail?productNo=${product.productNo}|" class="btn btn-outline-secondary">상세 정보</a> */}
                   {/* <!-- 비 로그인 시 (나중에 비회원장바구니 구현시 수정필요)--> */}
                  {/* <th:block sec:authorize="isAnonymous()">
                      <a href="/user/join" class="btn btn-outline-primary">회원가입 후 장바구니 담기</a>
                  </th:block> */}
                  {/* <!-- 로그인 시 --> */}
                  {/* <th:block sec:authorize="isAuthenticated()">
                      <button th:onclick="|addcart(${product.productNo})|" class="btn btn-outline-primary">장바구니 담기</button>
                  </th:block> */}
              </div>
          </div>
        ))}
        </div>
    </>
  )
}

export default ProductList