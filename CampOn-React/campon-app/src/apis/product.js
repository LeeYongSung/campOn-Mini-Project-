import axios from 'axios';
import api from './api'
export const Index = () => api.get("/api/product/index");

export const category = (category) => api.get(`/api/product/productList?category=${category}`)

export const productDetaile = (productNo) => api.get(`/api/product/productdetail?productNo=${productNo}`)

export const cartList = () => api.get("/api/product/cart")

export const wishList = () => api.get("/api/product/wishlist")

export const payment = () => api.get("/api/product/payment")

export const deposit = (orderNumber) => api.get(`/api/product/depositcomp?orderNumber=${orderNumber}`)

export const addProductsave = (productNo, userNo) => api.get(`/api/product/addProductsaveAjax?productNo=${productNo}&userNo=${userNo}`)

export const addCartAll = () => api.get("/api/product/addcartAll")

export const wishListAdd = (productNo) => api.get(`/api/product/addProductsave?productNo=${productNo}`)

export const removeCart = (cartNo) => api.delete(`/api/product/cartDelete?cartNo=${cartNo}`)

export const removeWishList = (productSaveNo) => api.delete(`/api/product/wishlistDelete?productsaveNo=${productSaveNo}`)

export const payMentPro = (Cnt, No, pt, tp, cp) => api.post("/api/product/paymentpro", { cartCnts: Cnt, productNos: No, pmType: pt, pmPrice: tp, reservationNo: cp })