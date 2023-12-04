import axios from 'axios';

// 조회
export const boardMain = (no) => axios.get("/boards/index")
// 읽기
export const boardCrread = (no) => axios.get(`/boards/crread/${no}`)