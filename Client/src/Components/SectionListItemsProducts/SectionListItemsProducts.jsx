import React, {useEffect, useState} from 'react';
import '../SectionListItems/SectionListItems.css';

import ReactPaginate from 'react-paginate';
import {AiTwotoneEdit, MdDelete} from 'react-icons/all';

const SectionListItemsProducts = () => {
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		fetch('http://localhost:3001/api/products')
			.then(response => response.json())
			.then(data => {
				console.log(data.data.product);
				setProducts(data.data.product);
			});
	}, []);
	return (
		<div className='SectionListItems'>
			<div className='SectionListItemsContent'>
				<table className='Table'>
					<thead>
						<tr>
							<th>Id</th>
							<th>Imagen</th>
							<th>Ref Producto</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody className='TableBodyCard'>
						{
							products.map(product => {
								return (
									<tr key={product.id} className='CardBodyItem'>
										<td>{product.id}</td>
										<td>
											<picture className='ItemCardImg'>
												<img src={`http://localhost:3001/img/products/${ product.image }`} alt={product.name} title={product.name} />
											</picture>
										</td>
										<td>{product.name}</td>
										<td className='Actions'>
											<AiTwotoneEdit />
											<MdDelete />
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default SectionListItemsProducts;
