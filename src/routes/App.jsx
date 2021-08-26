import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddParents from '../pages/AddParents';
import LoginPage from '../pages/Login'
import ChoisePlan from '../pages/ChoisePlan';
import Thanks from '../pages/Thanks';
import NotFound from '../pages/NotFound'
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
    <AppContext.Provider value={initialState}>
        <BrowserRouter>        
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/addparents" component={AddParents} />
                    <Route exact path="/choiseplan" component={ChoisePlan} />
                    <Route exact path="/thanks" component={Thanks} />
                    <Route component={NotFound} />
                </Switch>        
        </BrowserRouter>
    </AppContext.Provider>

        
    )}
export default App

