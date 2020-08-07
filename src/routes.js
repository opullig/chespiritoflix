import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Video from './Components/Pages/Videos';
import Category from './Components/Pages/Categories';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact   component={Home}/>
                <Route path="/Video"    component={Video} />
                <Route path="/Category" component={Category} />
                <Route component={() => <h1>Erro 404, Página não encontrada</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;