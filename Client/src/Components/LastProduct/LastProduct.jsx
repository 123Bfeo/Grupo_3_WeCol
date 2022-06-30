import {useEffect, useState} from 'react';
import '../LastItem/LastItem.css';



const LastProduct = () => {
	const [ lastProduct, setLastProduct ] = useState([]);
	
	useEffect(() => {
		fetch('http://localhost:3001/api/products')
			.then(response => response.json())
			.then(data => {
				console.log(data.count.productLast);
				setLastProduct(data.count.productLast);
			})
			.catch(error => console.log(error));
	}, []);
	
	return (
		<div className='LastProduct'>
			<div className='LastCard'>
				<div className='LastCardContent'>
					<span className='LastCreationTitle'>Último producto creado</span>
					<picture className='LastCardImage'>
						<img src={`http://localhost:3001/img/products/${lastProduct.image }`} alt={ lastProduct.name } title={ lastProduct.name }/>
					</picture>
					<h3 className='LastCardContentHead'>
						<span className='TitleName'>{ lastProduct.name }</span>
					</h3>
					<div className='LastCardContentBody'>
						<div className='LastCardContentBodyHead'>
							<span className='LastCardContentBodyHeadDescription'>{ lastProduct.description }</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LastProduct;
