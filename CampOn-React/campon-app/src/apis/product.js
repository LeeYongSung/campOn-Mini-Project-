import axios from 'axios';

export const Index = () => axios.get("/api/product/index");

export const category = (category) => axios.get(`/api/product/productList?category=${category}`)