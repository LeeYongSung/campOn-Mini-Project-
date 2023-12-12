import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// TODO: 여기 코드르 참조해서 에러처리를 해보세요.
const Test = () => {
    const navigate = useNavigate()

    const getData = async () => {
        try {
            const response = await axios.get('/no/path/error/test');

        }
        catch(error) {
            if (error.response && error.response.status === 500) {
                console.log('Server 에러 입니다...')
                navigate('/error/500')
            }
            if (error.response && error.response.status === 404) {
                console.log('NOT FOUND 에러 입니다...')
                navigate('/error/404')
            }
        }
    }

    useEffect( ()=> {
        setTimeout(() => {
            getData()
        }, 3000)
    }, [])  

    return (
        <div>
            <h1>에러 테스트 페이지</h1>
            <h3>3초 후에 에러 발생 후, 에러 페이지로 이동합니다...</h3>
        </div>
    )
}

export default Test