import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import NotFound from './views/NotFound/NotFound';
import Test from './components/componentsTesting';
import ShowProducts from './views/Products/ShowProducts';
import DetailProduct from './views/Products/DetailProduct';

//Si el usuario esta loggeado
import PrivateRoute from './PrivateRoute';
import Dashboard from './views/user/Dashboard/Dashboard';
import CreateProduct from './views/Products/CreateProduct';

const Main = props => (
    <Switch>
        <Route exact path='/' component={Home}/>

        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>

        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/create-product' component={CreateProduct} />

        <Route path='/components-testing' component={Test} />
        <Route path='/products' component={ShowProducts} /> 
        <Route path='/product-detail/:id' component={DetailProduct} />

        <Route component={NotFound} />
    </Switch>
);

export default Main;