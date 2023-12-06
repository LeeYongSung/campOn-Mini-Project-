import axios from 'axios'

export const productAdd = (formData, headers)=>{return axios.post('/api/admin/productInsert', formData, headers)}
export const productSelect = (productNo)=>{return axios.get(`/api/admin/productupdate/${productNo}`)}
export const productUpd = (formData, headers)=>{return axios.post('/api/admin/productUpdate', formData, headers)}
export const productDel = (productNo)=>{return axios.delete(`/api/admin/delete/${productNo}`)}
export const memberlist = ()=>{return axios.get('/api/admin/memberList')}
export const memberdel = (userId)=>{return axios.delete(`/api/admin/memberDelete/${userId}`)}
//캠핑장
export const getCampList = ()=>{return axios.get(`/api/admin/campproductlist`)}
export const campAdd = (formData, headers)=>{return axios.post('/api/admin/campproductadd', formData, headers)}
export const getCampUpd = (campNo)=>{return axios.get(`/api/admin/campproductupdate/${campNo}`)}
export const campUpd = (formData, headers)=>{return axios.post('/api/admin/campproductupdatePro', formData, headers)}
export const campDel = (campNo)=>{return axios.delete(`/api/admin/campdelete/${campNo}`)}
//캠핑장 디테일
export const dcampAdd = (formData, headers)=>{return axios.post('/api/admin/campdetailinsert', formData, headers)}
export const getdcampUpd = (cpdtNo)=>{return axios.get(`/api/admin/campdetailupdate/${cpdtNo}`)}
export const dcampUpd = (formData, headers)=>{return axios.post('/api/admin/campdetailupdate', formData, headers)}
export const dcampDel = (cpdtNo)=>{return axios.delete(`/api/admin/campdetaildelete/${cpdtNo}`)}

