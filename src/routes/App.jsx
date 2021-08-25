import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/Login/Login';

const App = () => {
    return (
    <BrowserRouter>
        
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/step1" component={Login} />

               {/*  <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/checkout/information" component={Information} />
                <Route exact path="/checkout/payment" component={Payments} />
                <Route exact path="/checkout/success" component={Success} />
                <Route componente={NotFound} /> */}
            </Switch>        
    </BrowserRouter>
        
    )}
export default App
