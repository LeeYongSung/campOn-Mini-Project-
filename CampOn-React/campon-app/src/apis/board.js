import axios from 'axios';

// 캠핑 리뷰 조회
export const getNewReviewList = () => axios.get("/api/board/index");
// 캠핑 리뷰 읽기
export const getCrread = (reviewNo) => axios.get(`/api/board/crread/${reviewNo}`);
// 캠핑 예약 정보 조회
export const getReservation = (reservationNo) => axios.get(`/api/board/crinsert/${reservationNo}`);
// 캠핑 리뷰 등록
export const postCrinsert = (board) => axios.post('/api/board/crinsert', board);
// 캠핑 리뷰 수정
export const postCrupdate = (board) => axios.post('/api/board/crupdate', board);
// 캠핑 리뷰 삭제
export const deleteCrdelete = (reviewNo) => axios.delete(`/api/board/crdelete/${reviewNo}`);


// 상품 리뷰 읽기
export const getPrread = (prNo) => axios.get(`/api/board/prread/${prNo}`);
// 상품 리뷰 등록
export const postPrinsert = (board) => axios.post('/api/board/prinsert', board);
// 상품 렌탈 정보 조회
export const getOrder = (orderNo) => axios.get(`/api/board/prinsert/${orderNo}`)
// 상품 리뷰 수정
export const postPrupdate = (board) => axios.post('/api/board/prupdate', board);
// 상품 리뷰 삭제
export const deletePrdelete = (prNo) => axios.delete(`/api/board/prdelete/${prNo}`);

// 조회 
export const getBoardlist = () => axios.get("/api/board/index")
// 읽기
export const getboardCrread = (no) => axios.get(`/api/board/crread/${no}`)
