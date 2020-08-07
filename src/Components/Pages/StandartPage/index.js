import React from 'react';
import Styled from 'styled-components';

import Menu from '../../Menu';
import Footer from '../../Footer';


const Main = Styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: var(--bodyPaddingTop);
    padding-left: .75%;
    padding-right: .75%;
`;


function standartPage({ children }){
    return (
        <>
        <Menu />
        <Main>
         {children}
        </Main>
        <Footer />
        </>
    )
}

export default standartPage;