import React from 'react'
import { Link } from 'react-router-dom'

const Recommendedproducts = ( { productHotList, onProductClick } ) => {


  return (
    // 추천상품 목록
    <>
        <div className="w-100 border-bottom">
            <div className="w-100 border-bottom">
                <div className="container">
                    <h6>추천 상품</h6>
                </div>
            </div>
            <div className="container d-flex justify-content-between py-4">
                {productHotList != null && productHotList.map((product) =>(
                    <Link to={{ pathname: "/product/productDetaile", state: {productNo: product.productNo}}} onClick={() => onProductClick(product.productNo)}>
                        <div className="product_suggestion">
                            <div className="product_suggestionImg border-bottom">
                                <img src={product.productThumnail} alt='#' />
                            </div>
                            <div className="product_suggestionCon px-3">
                                <div><span>{product.productName}</span></div>
                                <div><span>{product.productCategory}</span></div>
                                <div><span>{product.productPrice}</span></div>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    </div>
    </>
  )
}

export default Recommendedproducts