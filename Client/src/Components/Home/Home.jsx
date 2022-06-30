import React from 'react';
import './Home.css';
import CardQuantity from '../CardQuantity/CardQuantity';
import LastItem from '../LastItem/LastItem';

const Home = () => {
	return (
		<main className='Home'>
			<CardQuantity />
			<LastItem />
		</main>
	)
}

export default Home;
