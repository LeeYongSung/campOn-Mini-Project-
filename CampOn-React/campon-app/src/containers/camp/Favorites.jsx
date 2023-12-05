import React, { useEffect, useState } from 'react'
import * as camps from '../../apis/camp'
import BackHeader from '../../components/header/BackHeader';
import CampOnFooter from '../../components/footer/CampOnFooter';
import FavoritesList from '../../components/camp/FavoritesList';
import { useNavigate } from 'react-router-dom';
import UserFooter from '../../components/menu/UserFooter'

const Favorites = () => {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    const getList = async () => {
        const response = await camps.favorites();
        const data = response.data;
        setList(data);
    }

    useEffect(() => {
        getList();
    }, [])

    const onDelete = async (no) => {
      alert('삭제 완료' + no);
      const response = await camps.favoriteDelete(no);
      navigate('/api/camp/favorites')
    }
  return (
    <div>
        <BackHeader />
        <FavoritesList list={list} onDelete={onDelete} />
        <CampOnFooter />
        <UserFooter />
    </div>
  )
}

export default Favorites