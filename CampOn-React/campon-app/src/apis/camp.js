import axios from 'axios';
import qs from 'qs';
import api from './api'
//예시
// export const list = () => api.get("/boards")

//메인화면
export const campMain = () => api.get("/api/camp/index")
//소개페이지
export const information = () => api.get("/api/camp/information")
//즐겨찾기페이지
export const favorites = () => api.get("/api/camp/favorites")
//즐겨찾기등록
export const favoriteInsert = (campNo) => api.post("/api/camp/favorites",{campNo})
//즐겨찾기 삭제
export const favoriteDelete = (no) => api.delete(`/api/camp/favorites/${no}`)
//캠핑장목록
export const campproducts = (campTypeNo) => api.get(`/api/camp/campproducts/${campTypeNo}`)
//캠핑장상세
export const campproduct = (no) => api.get(`/api/camp/campproduct/${no}`)
//캠핑상품 상세
export const campdetail = (no) => api.get(`/api/camp/campdetail/${no}`)
//캠핑예약페이지
export const campReservate = (no) => api.get(`/api/camp/reservate/${no}`)
//캠핑예약 처리
export const campReservatePay = (campNo, cpdtNo, userNo, reservationNop, reservationStart, reservationEnd, reservationDate, campPaymentType) => api.post("/api/camp/reservate", {campNo, cpdtNo, userNo, reservationNop, reservationStart, reservationEnd, reservationDate, campPaymentType})
//캠핑예약 완료페이지
export const complete = () => api.get("/api/camp/complete")
//예약현황 페이지
export const campReservation = () => api.get("/api/camp/reservation")
//예약내역 삭제
export const reservationdelete = (no) => api.delete(`/api/camp/reservation/${no}`)
//캠핑오픈일정
export const campSchedule = () => api.get("/api/camp/schedule")
//캠핑장검색
// export const campSearch = (formData, headers) => api.post("/api/camp/campSearch", formData, headers)
// export const campSearch = (keyword, searchDate, regionNo, checkBoxList) => api.get(`/api/camp/campSearch?keyword=${keyword}&searchDate=${searchDate}&`)
export const campSearch = (keyword, searchDate, regionNo, checkBoxList) => api.post("/api/camp/campSearch", {keyword, searchDate, regionNo, checkBoxList})

// export const campSearch = (keyword, searchDate, regionNo, campTypeNos) => api.get("/api/camp/campSearch", {
//     params: { keyword, searchDate, regionNo, campTypeNos },
//     paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
//   });