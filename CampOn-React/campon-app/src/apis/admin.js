import axios from 'axios'

export const productAdd = (product)=>{return axios.post('/admin/productInsert', product)}





