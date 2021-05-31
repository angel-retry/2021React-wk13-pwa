import React from 'react';
import './App.less';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import Product from './pages/Product'
import { StoreProvider } from "./store"

function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/store" component={Store}/>
                    <Route exact path="/store/:pageName" component={Store}/>
                    <Route exact path="/product/:productId" component={Product}/>
                </Switch>
            </BrowserRouter>
        </StoreProvider>
        
    );
}

export default App;