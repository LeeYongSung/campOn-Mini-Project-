import React, { useState } from 'react'
import AdminMemberList from '../../components/admin/AdminMemberList'
import AdminMemberListSell from '../../components/admin/AdminMemberListSell'
import AdminMemberListUser from '../../components/admin/AdminMemberListUser'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import AdminFooter from '../../components/menu/AdminFooter'
import { useEffect } from 'react'
import * as admins from '../../apis/admin'
import { useNavigate } from 'react-router-dom'
import BackHeader from '../../components/header/BackHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'

const AdminMemberListCon = () => {
  const navigate = useNavigate()
  const [userList, setUserList] = useState([])
  const [sellList, setSellList] = useState([])
  const [userBtnn, setuserBtnn] = useState('')
  const [sellBtnn, setsellBtnn] = useState('')
  const [tab, setTab] = useState('')
  const [clickkUser, setclickkUser] = useState('')
  const [clickkSell, setclickkSell] = useState('')

  const getmemberlist = async () => {
    const memberList = await admins.memberlist()
    const data = await memberList.data
    console.log(data)
    console.log(data.sellList)
    console.log(data.userList)
    setUserList(data.userList)
    setSellList(data.sellList)
  }

  const deleteBtn = async (userId)=>{
    alert('회원을 삭제하시겠습니까?')
    try {
      const response = await admins.memberdel(userId)
      console.log(response.data)
      getmemberlist()
      navigate('/admin/memberList')
    } catch (error) {
      console.log(error)
    }
  }

  const handleuserBtnn = (e) => {
    setuserBtnn(e.target.value)
    setTab(true)
    setclickkUser('orange')
    setclickkSell('')
  }
  const handlesellBtnn = (e) => {
    setsellBtnn(e.target.value)
    setTab(false)
    setclickkSell('orange')
    setclickkUser('')
  }




  useEffect(() => {
    getmemberlist()
  },[])

  return (
    
    <>
    <BackHeader />
      <AdminMemberList handleuserBtnn={handleuserBtnn} handlesellBtnn={handlesellBtnn} clickkUser={clickkUser} clickkSell={clickkSell}/>
      {
        tab ? <AdminMemberListUser userList={userList} deleteBtn={deleteBtn}/> : <AdminMemberListSell sellList={sellList} deleteBtn={deleteBtn}/>
      }
      <CampOnFooter />
<AdminFooter />
    </>
  )
}

export default AdminMemberListCon