import React from 'react';
import './Aside.css';
import Logo from '../../Logo.svg';
import Favicon from '../../favicon.svg';
import ItemSection from '../ItemSection/ItemSection';

const Aside = () => {
	
	
	const ToggleAsideAdd = (e) => {
		e.target.classList.add('AsideActive');
		const AsideContainerImageIcon = document.querySelector('.AsideContainerImageIcon');
		AsideContainerImageIcon.classList.add('AsideContainerImageIconHide');
	}
	
	const ToggleAsideRemove = (e) => {
		e.target.classList.remove('AsideActive');
		const AsideContainerImageIcon = document.querySelector('.AsideContainerImageIcon');
		AsideContainerImageIcon.classList.remove('AsideContainerImageIconHide');
	}
	
	return (
		<aside className='Aside' onMouseOver={ ToggleAsideAdd } onMouseLeave={ ToggleAsideRemove }>
			<article className='AsideContainer'>
				<picture className='AsideContainerImage'>
					<img src={ Logo } alt='' />
					<img src={ Favicon } alt='' className='AsideContainerImageIcon'
						     id='AsideContainerImageIcon' />
				</picture>
				<div className='ItemSectionContainer'>
					<ItemSection list={ 'Usuarios' } href={ '/users' } />
					<ItemSection list={ 'Productos' } href={ '/products' } />
				</div>
			</article>
			<article className='BarDecoration'></article>
		</aside>
	)
}

export default Aside;
