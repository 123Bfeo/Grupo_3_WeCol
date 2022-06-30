import React, { useState } from 'react';
import './ModalCreate.css';
import { GrFormClose} from 'react-icons/all';
import FormCreateProduct from '../FormCreateProduct/FormCreateProduct';

const ModalCreate = (props) => {
	const [show, setShow] = useState(true);
	
	const handleModalShow = () => setShow(false);
	const handleModalClose = () => setShow(true);

	
	
	return (
		<section className='ModalCreate' >
			<div hidden={show}>
				<div className="ModalBackground">
					<div className="ModalContent">
						<GrFormClose className='GrFormClose' onClick={ handleModalClose } />
						<FormCreateProduct />
					</div>
				</div>
			</div>
			<span className="buttonOpenModal" onClick={ handleModalShow }>
				<span>{ props.buttonCreateItem }</span>
			</span>
		</section>
	)
}

export default ModalCreate;
