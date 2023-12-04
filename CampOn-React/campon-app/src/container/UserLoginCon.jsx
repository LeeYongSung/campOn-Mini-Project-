import React, { useEffect, useState } from 'react'
import * as user from '../apis/user'
import UserLogin from '../components/UserLogin';

const UserLoginCon = () => {
   
    return (
        <>
            <UserLogin/>
            {/* <UserLogin rememberId={rememberId} userId={userId} /> */}
        </>
    )
}

export default UserLoginCon