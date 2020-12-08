import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Drinks from './pages/Index';
import RegisterDrink from './pages/Register';
import DrinkDetails from './pages/Details';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                {/* exact = must match.. otherwise it will fall on first one */}                                
                <Route exact path="/" component={Drinks}/>
                <Route exact path="/register" component={RegisterDrink}/>
                <Route exact path="/details/:id" component={DrinkDetails}/>
                {/* TO-DO: 404 */}
            </Switch>
        </BrowserRouter>
    );
}