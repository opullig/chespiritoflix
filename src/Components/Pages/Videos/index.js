import React from 'react';
import { Link } from 'react-router-dom';
import StandartPage from '../StandartPage';

function Video(){
    return (
        <StandartPage>
            <h1>Vídeo</h1>
            <Link to="/Category">
                Nova Categoria
            </Link>
        </StandartPage>
    )
}

export default Video;