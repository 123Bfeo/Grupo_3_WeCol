import React from 'react';
import '../MainContainer/MainContainer.css';

import ModalCreate from '../ModalCreate/ModalCreate';
import SectionListItemsUsers from '../SectionListItemsUsers/SectionListItemsUsers';

const MainContainerUsers = () => {
	return (
		<section className='MainContainer'>
			<article className='MainContent'>
				<ModalCreate buttonCreateItem={'Crear Usuario'}/>
				<SectionListItemsUsers />
			</article>
		</section>
	)
}

export default MainContainerUsers;
