import React from 'react';

import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';

import Dados from '../../../data/dados_iniciais.json';
import './style.css';
import StandartPage from '../StandartPage';

function Home() {
  return (
    <>
    <StandartPage>
    <BannerMain videoTitle={Dados.categorias[0].videos[0].titulo} url={Dados.categorias[0].videos[0].url} videoDescription="Seu Madroga o Primo do seu Madruga" />
    <Carousel 
      ignoreFirstVideo
      category={Dados.categorias[0]}
    />
    <Carousel 
      category={Dados.categorias[1]}
    />
    <Carousel 
      category={Dados.categorias[2]}
    />
    </StandartPage>
    </>
  );
}

export default Home;
