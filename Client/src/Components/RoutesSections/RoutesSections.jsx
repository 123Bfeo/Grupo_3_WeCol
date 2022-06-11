import React from 'react';
import './RoutesSections.css';
import {Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Admin from '../Admin/Admin';

const RoutesSections = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/about' element={ <AboutUs /> } />
				<Route path='/admin' element={ <Admin /> } />
			</Routes>
		</>
	)
}

export default RoutesSections;