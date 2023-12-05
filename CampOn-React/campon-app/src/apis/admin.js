import axios from 'axios'

export const productAdd = (formData, headers)=>{return axios.post('/admin/productInsert', formData, headers)}
export const productSelect = (productNo)=>{return axios.get(`/admin/productupdate/${productNo}`)}
export const productUpd = (formData, headers)=>{return axios.post('/admin/productUpdate', formData, headers)}
export const productDel = (productNo)=>{return axios.delete(`/admin/delete/${productNo}`)}
export const memberlist = ()=>{return axios.get('/admin/memberList')}
export const memberdel = (userId)=>{return axios.delete(`/admin/memberDelete/${userId}`)}
//캠핑장
export const getCampList = ()=>{return axios.get(`/admin/campproductlist`)}
export const campAdd = (formData, headers)=>{return axios.post('/admin/campproductadd', formData, headers)}
export const campUpd = (formData, headers)=>{return axios.post('/admin/campproductupdatePro', formData, headers)}
export const campDel = (campNo)=>{return axios.delete(`/admin/campdelete/${campNo}`)}
//캠핑장 디테일
export const dcampAdd = (formData, headers)=>{return axios.post('/admin/campdetailinsert', formData, headers)}
export const dcampUpd = (formData, headers)=>{return axios.post('/admin/campdetailupdate', formData, headers)}
export const dcampDel = (cpdtNo)=>{return axios.delete(`/admin/campdetaildelete/${cpdtNo}`)}

