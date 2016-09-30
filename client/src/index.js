import React from 'react';
import ReactDOM from 'react-dom';
import App from './components_pages/App';
import RestaurantDetail from "./components_pages/RestaurantDetail";
import Reviews_mobile from './components_pages/Reviews_mobile';
import Login from "./components_pages/Login.js";
import NoMatch from "./components_pages/NoMatch.js";


import './index.css';
import "./style/starRating.css";

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
   <Router history={browserHistory} >
	    <Route path="/" component={App}/>
	    <Route path="/review_mobile/:restaurantName" component={Reviews_mobile}/>
   	    <Route path="/restaurant/:restaurantName" component={RestaurantDetail}/>
	    <Route path="/signup" component={Login}/>
		<Route path="*" component={NoMatch}/>
	{/*
   	    <Route path="/selectStation" component={SelectStation}/>
   	    <Route path="/showSelected" component={ShowStationSelection}/>    
	    <Route path="/station/:stationId" component={StationDetail}/>    
	   
	*/}
  </Router>
  , document.getElementById('root')
);

