import React from 'react';
import '../MainContainer/MainContainer.css';

import ModalCreate from '../ModalCreate/ModalCreate';
import SectionListItemsProducts from '../SectionListItemsProducts/SectionListItemsProducts';

const MainContainerUsers = () => {
	return (
		<section className='MainContainer'>
			<article className='MainContent'>
				<ModalCreate buttonCreateItem={'Crear Producto'}/>
				<SectionListItemsProducts />
			</article>
		</section>
	)
}

export default MainContainerUsers;
