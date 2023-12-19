import axios from 'axios';
import api from './api'

// export const login = ()=>{return axios.get('/api/admin/login')}
export const join = (auth, userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber)=>{
    return api.post('/api/user/join', {userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber, auth})
}
export const update = (userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber)=>{
    return api.post('/api/user/update', {userId, userName, userEmail,userTel,userAddress,userPw, companyName, companyNumber})
}
export const deletee = (userId)=>{return api.delete(`/api/user/delete/${userId}`)}

export const getjoin = ()=>{return api.get('/api/user/join')}

export const getUpd = (userId)=>{return api.get(`/api/user/update/${userId}`)}

//로그인 (경로: 필터)
export const login = (username, password) => api.post(`/login?username=${username}&password=${password}`)
//사용자정보
export const info = ()=> api.get(`/api/user/info`)