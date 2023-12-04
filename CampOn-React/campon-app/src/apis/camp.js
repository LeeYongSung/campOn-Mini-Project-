import axios from 'axios';

//예시
// export const list = () => axios.get("/boards")

//메인화면
export const campMain = () => axios.get("/api/camp/index")
//소개페이지
export const information = () => axios.get("/api/camp/information")
//즐겨찾기페이지
export const favorites = () => axios.get("/api/camp/favorites")
//즐겨찾기 삭제
export const favoriteDelete = (no) => axios.delete(`/api/camp/favoriteDelete/${no}`)
//캠핑장목록
export const campproducts = (campTypeNo) => axios.get(`/api/camp/campproducts?campType=${campTypeNo}`)
//캠핑장상세
export const campproduct = (no) => axios.get(`/api/camp/campproduct/${no}`)
//캠핑상품 상세
export const campdetail = (no) => axios.get(`/api/camp/campdetail/${no}`)
//캠핑예약페이지
export const campReservate = (no) => axios.get(`/api/camp/reservate/${no}`)
//캠핑예약 처리
export const campReservatePay = (campNo, cpdtNo, userNo, reservationNop, reservationStart, reservationEnd, reservationDate, campPaymentType) => axios.post("api/camp/reservate", {campNo, cpdtNo, userNo, reservationNop, reservationStart, reservationEnd, reservationDate, campPaymentType})
//캠핑예약 완료페이지
export const complete = () => axios.get("/api/camp/complete")
//예약현황 페이지
export const campReservation = () => axios.get("/api/camp/reservation")
//예약내역 삭제
export const reservationdelete = (no) => axios.delete(`/api/camp/reservation/${no}`)
//캠핑오픈일정
export const campSchedule = () => axios.get("/api/camp/schedule")
//캠핑장검색
export const campSearch = (keyword, searchDate, regionNo, campTypeNos ) => axios.get("api/camp/campSearch")
