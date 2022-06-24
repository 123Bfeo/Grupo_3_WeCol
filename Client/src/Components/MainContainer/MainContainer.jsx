import React from 'react';
import './MainContainer.css';

import ModalCreate from '../ModalCreate/ModalCreate';
import SectionListItems from '../SectionListItems/SectionListItems';

const MainContainer = () => {
	return (
		<section className='MainContainer'>
			<article className='MainContent'>
				<ModalCreate createItem={'Crear Producto'}/>
				<SectionListItems />
			</article>
		</section>
	)
}

export default MainContainer;
