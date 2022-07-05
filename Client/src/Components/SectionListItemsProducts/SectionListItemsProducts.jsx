import React, {useEffect, useState} from 'react';
import '../SectionListItems/SectionListItems.css';


import Pagination from '../Pagination/Pagination';

const SectionListItemsProducts = () => {
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		fetch('http://localhost:3001/api/products')
			.then(response => response.json())
			.then(data => {
				setProducts(data.data.product);
			});
	}, []);
	return (
		<>
			<Pagination items={ products } />
		</>
	)
}

export default SectionListItemsProducts;
