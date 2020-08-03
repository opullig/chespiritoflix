import React from 'react';

import Menu from '../../Menu';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';

import Dados from '../../../data/dados_iniciais.json';
import './style.css';

function Home() {
  return (
    <>
    <Menu/>
    <BannerMain videoTitle={Dados.categorias[0].videos[0].titulo} url={Dados.categorias[0].videos[0].url} videoDescription="Teste Testando" />
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
    </>
  );
}

export default Home;
