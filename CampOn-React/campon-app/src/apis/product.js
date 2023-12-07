import axios from 'axios';

export const Index = () => axios.get("/api/product/index");

export const category = (category) => axios.get(`/api/product/productList?category=${category}`)

export const productDetaile = (productNo) => axios.get(`/api/product/productdetail?productNo=${productNo}`)

export const cartList = () => axios.get("/api/product/cart")

export const wishList = () => axios.get("/api/product/wishlist")

export const payment = () => axios.get("/api/product/payment")

export const deposit = (orderNumber) => axios.get(`/api/product/depositcomp?orderNumber=${orderNumber}`)

export const addProductsave = (productNo, userNo) => axios.get(`/api/product/addProductsaveAjax?productNo=${productNo}&userNo=${userNo}`)

export const addCartAll = () => axios.get("/api/product/addcartAll")

export const wishListAdd = (productNo) => axios.get(`/api/product/addProductsave?productNo=${productNo}`)

export const removeCart = (cartNo) => axios.delete(`/api/product/cartDelete?cartNo=${cartNo}`)

export const removeWishList = (productSaveNo) => axios.delete(`/api/product/wishlistDelete?productsaveNo=${productSaveNo}`)

export const payMentPro = (Cnt, No, pt, tp, cp) => axios.post("/api/product/paymentpro", { cartCnts: Cnt, productNos: No, pmType: pt, pmPrice: tp, reservationNo: cp })