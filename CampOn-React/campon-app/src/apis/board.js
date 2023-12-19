import api from './api';
// 리뷰 전체 조회
export const getNewReviewList = () => api.get("/api/board/index");

// 캠핑 리뷰 읽기
export const getCrread = (reviewNo) => api.get(`/api/board/crread/${reviewNo}`);
// 캠핑 예약 정보 조회
export const getReservation = (reservationNo) => api.get(`/api/board/crinsert/${reservationNo}`);
// 캠핑 리뷰 등록
export const postCrinsert = (formData, headers) => api.post('/api/board/crinsert', formData, headers);
// 캠핑 리뷰 수정
export const postCrupdate = (formData, headers) => api.post('/api/board/crupdate', formData, headers);
// 캠핑 리뷰 삭제
export const deleteCrdelete = (reviewNo) => api.delete(`/api/board/crdelete/${reviewNo}`);


// 상품 리뷰 읽기
export const getPrread = (prNo) => api.get(`/api/board/prread/${prNo}`);
// 상품 렌탈 정보 조회
export const getOrder = (orderNo) => api.get(`/api/board/prinsert/${orderNo}`)
// 상품 리뷰 등록
export const postPrinsert = (formData, headers) => api.post('/api/board/prinsert', formData, headers);
// 상품 리뷰 수정
export const postPrupdate = (formData, headers) => api.post('/api/board/prupdate', formData, headers);
// 상품 리뷰 삭제
export const deletePrdelete = (prNo) => api.delete(`/api/board/prdelete/${prNo}`);

// 조회 
export const getBoardlist = () => api.get("/api/board/index")
// 읽기
export const getboardCrread = (no) => api.get(`/api/board/crread/${no}`)
