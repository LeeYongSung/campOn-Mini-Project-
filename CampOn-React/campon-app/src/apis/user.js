import axios from 'axios';

export const login = ()=>{return axios.get('/admin/login')}
export const join = (id, userName, userEmail,userTel,userAddress,password, companyName, companyNumber, auth)=>{
    return axios.post('/admin/join', {id, userName, userEmail,userTel,userAddress,password, companyName, companyNumber, auth})
}
export const update = (id, userName, userEmail,userTel,userAddress,password, companyName, companyNumber)=>{
    return axios.post('/admin/update', {id, userName, userEmail,userTel,userAddress,password, companyName, companyNumber})
}
export const deletee = (userId)=>{return axios.delete(`/user/delete/${userId}`)}