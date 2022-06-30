import React from 'react';
import './Main.css';
import {Routes, Route} from 'react-router-dom';
import Users from '../../Pages/Users/Users';
import Products from '../../Pages/Products/Products';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

const Main = () => {
	return (
		<main className='Main'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/users' element={<Users />} />
				<Route path='/products' element={<Products />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</main>
	)
}

export default Main;
