import { useEffect, useState } from 'react';

const CardQuantityProduct = () => {
	const [product, setProduct] = useState([]);
	
	useEffect(() => {
		fetch('http://localhost:3001/api/products')
			.then(response => response.json())
			.then(data => {
				console.log(data.count.product);
				setProduct(data.count.product);
			})
			.catch(error => console.log(error));
	}, []);
	
	return (
		<main className='CardQuantity'>
			<div className="CardQuantityContainer">
				<div className='Card'>
					<h3 className='CardTitle'>Productos</h3>
					<span className='CardLength'>
						{ product }
					</span>
				</div>
			</div>
		</main>
	)
}

export default CardQuantityProduct;
