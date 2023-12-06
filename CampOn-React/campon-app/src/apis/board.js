import axios from 'axios';

// 조회
export const boardMain = (no) => axios.get("/api/boards/index")
// 읽기
export const boardCrread = (no) => axios.get(`/api/boards/crread/${no}`)