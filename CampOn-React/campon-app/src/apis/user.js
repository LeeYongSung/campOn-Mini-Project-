import axios from 'axios';

export const login = ()=>{return axios.get('/admin/login')}
export const join = (auth, userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber)=>{
    return axios.post('/user/join', {userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber, auth})
}
export const update = (userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber)=>{
    return axios.post('/user/update', {userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber})
}
export const deletee = (userId)=>{return axios.delete(`/user/delete/${userId}`)}