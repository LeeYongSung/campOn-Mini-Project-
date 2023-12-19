import axios from 'axios'
import api from './api'
export const productAdd = (formData, headers)=>{return api.post('/api/admin/productInsert', formData, headers)}
export const productSelect = (productNo)=>{return api.get(`/api/admin/productupdate/${productNo}`)}
export const productUpd = (formData, headers)=>{return api.post('/api/admin/productUpdate', formData, headers)}
export const productDel = (productNo)=>{return api.delete(`/api/admin/delete/${productNo}`)}
export const memberlist = ()=>{return api.get('/api/admin/memberList')}
export const memberdel = (userId)=>{return api.delete(`/api/admin/memberDelete/${userId}`)}
//캠핑장
export const getCampList = ()=>{return api.get(`/api/admin/campproductlist`)}
export const campAdd = (formData, headers)=>{return api.post('/api/admin/campproductadd', formData, headers)}
export const getCampUpd = (campNo)=>{return api.get(`/api/admin/campproductupdate/${campNo}`)}
export const campUpd = (formData, headers)=>{return api.post('/api/admin/campproductupdatePro', formData, headers)}
export const campDel = (campNo)=>{return api.delete(`/api/admin/campdelete/${campNo}`)}
//캠핑장 디테일
export const dcampAdd = (formData, headers)=>{return api.post('/api/admin/campdetailinsert', formData, headers)}
export const getdcampUpd = (cpdtNo)=>{return api.get(`/api/admin/campdetailupdate/${cpdtNo}`)}
export const dcampUpd = (formData, headers)=>{return api.post('/api/admin/campdetailupdate', formData, headers)}
export const dcampDel = (cpdtNo)=>{return api.delete(`/api/admin/campdetaildelete/${cpdtNo}`)}
//광고
export const getAd = ()=>{return api.get(`/api/admin/adlist`)}
export const getAdSeller = ()=>{return api.get(`/api/admin/adlistseller`)}
export const AdAdd = (formData, headers)=>{return api.post('/api/admin/adinsertpro', formData, headers)}
export const adSign = (adNo)=>{return api.get(`/api/admin/adcheck/${adNo}`)}



