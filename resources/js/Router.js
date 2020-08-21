import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import NotFound from './views/NotFound/NotFound';
import Test from './components/componentsTesting';

//Si el usuario esta loggeado
import PrivateRoute from './PrivateRoute';
import Dashboard from './views/user/Dashboard/Dashboard';

const Main = props => (
    <Switch>
        <Route exact path='/' component={Home}/>

        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>

        <PrivateRoute path='/dashboard' component={Dashboard} />

        <Route path='/components-testing' component={Test} />

        <Route component={NotFound} />
    </Switch>
);

export default Main;