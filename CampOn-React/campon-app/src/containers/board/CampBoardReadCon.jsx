import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// 👩‍💻 게시글 조회
const CampBoardReadCon = () => {
    const { no } = useParams()
    const [board, setBoard] = useState({});
    const getBoard = async () => {
        try {
            const response = await boards.boardCrread(no);
            const data = response.data;
            console.log(data);
            setBoard(data);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getBoard()
    }, [])

    return (<BoardRead no={no}
        board={board}
    />)
}

export default CampBoardReadCon