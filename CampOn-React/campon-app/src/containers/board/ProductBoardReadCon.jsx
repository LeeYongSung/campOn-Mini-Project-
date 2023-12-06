import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import * as boardApi from '../../apis/board';
import ProductBoardRead from '../../components/board/ProductBoardRead';

const ProductBoardReadCon = () => {
  const { prNo } = useParams();
  const [boardData, setBoardData] = useState({});
  const navigate = useNavigate();

  const getPrread = async () => {
    try {
      const response = await boardApi.getPrread(prNo);
      const data = response.data;
      console.log(data);
      setBoardData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPrread();
  }, []);

  return (<ProductBoardRead
      boardData={boardData}
      navigate={navigate}
    />
  );
};

export default ProductBoardReadCon;