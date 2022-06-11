import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

import ProfilePhoto from '../../../public/assets/img/Sergio.png';
import Logo from '../../Logo.svg';


const Header = () => {
	const toggle = () => {
		const ProfileAction_Body = document.getElementById('ProfileAction_Body');
		const HeaderArrowIcon = document.querySelector('.HeaderArrowIcon');
		HeaderArrowIcon.classList.toggle('ProfileAction_BodyRotateIcon');
		ProfileAction_Body.classList.toggle('ProfileAction_BodyActive');
	}
	return (
		<header className='Header'>
				<div className='HeaderContainer wrapper'>
					<Link to='/'>
						<img src={ Logo } alt=''/>
					</Link>
					<article className='ProfileAction'>
						<div className='ProfileAction_Header'>
							<picture>
								<img src={ ProfilePhoto } alt=''/>
							</picture>
							<HiChevronDown className='HeaderArrowIcon' onClick={ toggle }/>
						</div>
						<div className='ProfileAction_Body' id='ProfileAction_Body'>
							<div className='ProfileAction_BodyHead'>
								<picture>
									<img src={ ProfilePhoto } alt=''/>
								</picture>
								<div className='ProfileAction_BodyProfileOptions'>
									<span>Sergio González Sánchez</span>
									<span>Accede y administra tus datos</span>
								</div>
							</div>
							<div className='ProfileAction_BodyFoot'>
								<span className='closeSession'>Cerrar Sesión</span>
							</div>
						</div>
					</article>
				</div>
		</header>
	)
}

export default Header;