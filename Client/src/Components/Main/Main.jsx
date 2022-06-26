import React from 'react';
import './Main.css';
import {Routes, Route} from 'react-router-dom';
import Users from '../../Pages/Users/Users';
import Products from '../../Pages/Products/Products';

const Main = () => {
	return (
		<main className='Main'>
			<Routes>
				<Route path='/users' element={<Users />} />
				<Route path='/products' element={<Products />} />
			</Routes>
		</main>
	)
}

export default Main;
