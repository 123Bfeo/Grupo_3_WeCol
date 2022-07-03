import { useEffect, useState } from 'react';
import './Pagination.css';

import ReactPaginate from 'react-paginate';

import { AiFillDelete, FiEdit2 } from 'react-icons/all';
// import Sweetalertdemo from '../AlertBox/AlertBox';

import Swal from "sweetalert2";



const Pagination = (props) => {
	const { items } = props;
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 2;
	
	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(items.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(items.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, items]);
	
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		setItemOffset(newOffset);
	};
	
	const handleDelete = (id) => {
		const config = {
			method: "DELETE",
		};
		fetch(`http://localhost:3001/product/delete/${id}`, config)
			.then((response) => response.text())
			.catch((error) => console.log(error));
		
		const handleClick = () => {
			Swal.fire({
				title: 'Success',
				type: 'success',
				text: 'Your work has been saved.',
			});
		}
		handleClick();
	}
	
	
	
	return (
		<>
			{/* <Sweetalertdemo /> */}
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
					currentItems.map(product => {
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
									<button><FiEdit2 /></button>
									<button onClick={ () => handleDelete(product.id) }><AiFillDelete /></button>
								</td>
							</tr>
						)
					})
				}
				</tbody>
			</table>
			<ReactPaginate
				breakLabel="..."
				nextLabel="Siguiente >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< Anterior"
				renderOnZeroPageCount={null}
				containerClassName='pagination'
				pageLinkClassName='page-num'
				previousLinkClassName='page-num'
				nextLinkClassName='page-num'
				activeClassName='active'
			/>
		</>
	);
}

export default Pagination;
