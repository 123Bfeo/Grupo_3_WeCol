import React from 'react';
import './ItemSection.css';

import { Link } from 'react-router-dom';

const ItemSection = ({list, href}) => {
	return (
		<li className='ItemSection'>
			<Link to={ href }>{ list }</Link>
		</li>
	)
}

export default ItemSection;
