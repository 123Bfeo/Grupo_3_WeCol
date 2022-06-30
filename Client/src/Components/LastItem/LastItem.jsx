import React from 'react';
import './LastItem.css';
import LastUser from '../LastUser/LastUser';
import LastProduct from '../LastProduct/LastProduct';

const LastItem = () => {
	return (
		<div className='LastItem'>
			<LastUser />
			<LastProduct />
		</div>
	)
}

export default LastItem;
