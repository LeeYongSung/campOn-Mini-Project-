import axios from 'axios';

export const login = ()=>{return axios.get('/api/admin/login')}
export const join = (auth, userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber)=>{
    return axios.post('/api/user/join', {userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber, auth})
}
export const update = (userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber)=>{
    return axios.post('/api/user/update', {userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber})
}
export const deletee = (userId)=>{return axios.delete(`/api/user/delete/${userId}`)}

export const getjoin = ()=>{return axios.get('/api/user/join')}

export const getUpd = (userId)=>{return axios.get(`/api/user/update/${userId}`)}