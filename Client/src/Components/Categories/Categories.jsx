import React, {useEffect, useState} from 'react';

const Categories = () => {
	const [ categories, setCategories ] = useState([]);
	
	useEffect(() => {
		fetch("http://localhost:3001/api/products")
			.then(response => response.json())
			.then(data => {
				console.log(data.data.category);
				setCategories(data.data.category);
			})
	}, [])
	return (
		<div>
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
