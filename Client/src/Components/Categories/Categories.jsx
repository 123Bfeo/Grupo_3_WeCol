import React, { useState } from 'react';

const Categories = () => {
	const [ categories, setCategories ] = useState([]);
	
	const apiGet = () => {
		fetch("http://localhost:3001/api/products")
			.then((response) => response.json())
			.then((response) => {
				console.log(response.data.category);
				setCategories(response.data.category);
			})
			.catch(error => console.log( error ))
	};
	
	return (
		<div>
			My API <br />
			<button onClick={ apiGet }>Fetch API</button>
			<div>
				<ul>
					{
						categories.map((category) => (
							<li key={ category.id }>{ category.name }</li>
						))
					}
				</ul>
			</div>
		</div>
	);
}


export default Categories;