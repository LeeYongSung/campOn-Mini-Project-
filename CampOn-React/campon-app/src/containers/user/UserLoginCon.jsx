import React, { useEffect, useState } from 'react'
import * as user from '../../apis/user'
import UserLogin from '../../components/UserLogin';
import BackHeader from '../../components/header/BackHeader';
import CampOnFooter from '../../components/footer/CampOnFooter';
import UserFooter from '../../components/menu/UserFooter';

const UserLoginCon = () => {
   
    return (
        <>
            <BackHeader />
            <UserLogin/>
            {/* <UserLogin rememberId={rememberId} userId={userId} /> */}
            <CampOnFooter />
            <UserFooter />
        </>
    )
}

export default UserLoginCon