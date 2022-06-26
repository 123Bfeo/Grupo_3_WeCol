import React, { useState } from 'react';
import './ModalCreate.css';

const ModalCreate = (props) => {
	const [show, setShow] = useState(false);
	
	const handleModalClose = () => setShow(false);
	const handleModalShow = () => setShow(true);
	
	return (
		<section className='ModalCreate'>
			<div hidden={!show}>
				<div className="ModalBackground" onClick={handleModalClose}>
					<div className="ModalCard">
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
