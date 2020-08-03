import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route component={() => <h1>Erro 404, Página não encontrada</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;