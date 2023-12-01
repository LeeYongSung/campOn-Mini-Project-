import axios from 'axios';

export const login = ()=>{return axios.get('/admin/login')}