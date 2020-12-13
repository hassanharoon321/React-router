import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import ProductItems from "./components/ProductItems";
import Login from "./components/Login"
import Navbar from "./components/Navbar";

function RouteConfig(){
    return(
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/product" component={Product}/>
                    <Route path="/productitems/:id" component={ProductItems}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/*" component={()=><h2>404 Not Found</h2>}/>
                </Switch>
            </Router>
        </div>
        
    )
}

export default RouteConfig