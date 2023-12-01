import React, { useEffect, useState } from 'react'
import * as user from '../apis/user'
import UserLogin from '../components/UserLogin';

const UserLoginCon = () => {
    // {"rememberId":false,"userId":""}
    const [rememberId, setRememberId] = useState('');
    const [userId, setUserId] = useState('');
    const getLogin = async () => {
        const response = await response.data;
        console.log(response, 'response는?');
        setRememberId(response.rememberId)
        setUserId(response.userId)
    }
    useEffect(() => {
        getLogin();
    }, [rememberId])
    
    return (
        <>
            <UserLogin rememberId={rememberId} userId={userId} />
        </>
    )
}

export default UserLoginCon