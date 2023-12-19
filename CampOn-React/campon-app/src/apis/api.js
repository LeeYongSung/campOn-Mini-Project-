import axios from 'axios';
//공통 헤더에다가 jwt토큰을 저장할건데, 계속해서 create하게 되면 헤더를 계속 저장해야 하기 때문에 일관화하기 위해서 만들었습니다. 

//axios 객체 생성
const api = axios.create();

export default api;