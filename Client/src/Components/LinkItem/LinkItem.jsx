import React from 'react';
import './LinkItem.css';

import { Link } from 'react-router-dom';

const LinkItem = (props) => {
	return (
		<Link to={ props.to } className='LinkItem'>
			<i>{ props.icon }</i>
			<span>{ props.children }</span>
		</Link>
	);
}

export default LinkItem;
