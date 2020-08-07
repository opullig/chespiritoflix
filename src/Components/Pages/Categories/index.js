import React from 'react';
import StandartPage from '../StandartPage';

function Category(){
    return ( 
        <StandartPage>
            <h1>Cadastro de Categoria</h1>

            <form>

            <label>
                Nome da Categoria:
                <input
                type="text"
                />
            </label>

            <button>
                Cadastrar
            </button>
            </form>
        </StandartPage>
    )
}

export default Category;