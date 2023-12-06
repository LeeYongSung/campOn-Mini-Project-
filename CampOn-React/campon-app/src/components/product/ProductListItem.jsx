import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ( { category, onProductClick, addCart } ) => {
  return (
    <>
      <div className="container">
        {category != null && category.map( (product) => (
          <div className="border rounded position-relative mb-3 pb-4 mt-2">
              <div className="productListImg">
                  <img src={product.productThumnail} alt="상품썸네일" className="w-100" />
              </div>
              <div className="">
                  <div className="productList_Con ps-2 pt-3">
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
                  <div className="ps-3">
                      <div className="pt-3 pe-2">
                          <h5>{product.productPrice}원</h5>
                      </div>
                  </div>
              </div>
              <div className="position-absolute bottom-0 end-0 me-2 mb-1">
                  <Link to={{ pathname: "/product/productDetaile", state: {productNo: product.productNo}}} className="btn btn-outline-secondary" onClick={() => onProductClick(product.productNo)}>상세 정보</Link>
                   
                  {/* <a href="/user/join" class="btn btn-outline-primary">회원가입 후 장바구니 담기</a> */}
                  <button onClick={ () => addCart(product.productNo) } class="btn btn-outline-primary mx-1">장바구니 담기</button>
              </div>
          </div>
        ))}
        </div>
    </>
  )
}

export default ProductList