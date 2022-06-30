import React from 'react';
import './CardQuantity.css';
import CardQuantityUser from '../CardQuantityUser/CardQuantityUser';
import CardQuantityProduct from '../CardQuantityProduct/CardQuantityProduct';

const CardQuantity = () => {
	return (
		<section className='CardQuantity'>
			<CardQuantityUser />
			<CardQuantityProduct />
		</section>
	)
}

export default CardQuantity;
