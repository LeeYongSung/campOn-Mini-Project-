import axios from 'axios';

// 캠핑 리뷰 조회
export const getNewReviewList = () => axios.get("/board/index");
// 캠핑 리뷰 읽기
export const getCrread = (reviewNo) => axios.get(`/board/crread/${reviewNo}`);
// 캠핑 리뷰 등록
export const postCrinsert = (board) => axios.post('/board/crinsert', board);
// 캠핑 리뷰 수정
export const postCrupdate = (board) => axios.post('/board/crupdate', board);
// 캠핑 리뷰 삭제
export const deleteCrdelete = (reviewNo) => axios.delete(`/board/crdelete/${reviewNo}`);
// 상품 리뷰 읽기
export const getPrread = (prNo) => axios.get(`/board/prread/${prNo}`);
// 상품 리뷰 등록
export const postPrinsert = (board) => axios.post('/board/prinsert', board);
// 상품 리뷰 수정
export const postPrupdate = (board) => axios.post('/board/prupdate', board);
// 상품 리뷰 삭제
export const deletePrdelete = (prNo) => axios.delete(`/board/prdelete/${prNo}`);
// 조회
export const boardMain = (no) => axios.get("/api/boards/index")
// 읽기
export const boardCrread = (no) => axios.get(`/api/boards/crread/${no}`)
