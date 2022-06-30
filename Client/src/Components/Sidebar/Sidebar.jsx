import React, { useState } from "react";
import './Sidebar.css';
import Logo from '../../Logo.svg';
import Favicon from '../../Favicon.svg';
import { Link } from 'react-router-dom';

import { ProSidebar } from "react-pro-sidebar";
import LinkItem from '../LinkItem/LinkItem';
import {FaHeart, MdOutlineChecklist} from 'react-icons/all';

const Sidebar = () => {
	
	const [menuCollapse, setMenuCollapse] = useState(true);
	const menuMouseOver = () => {
		setMenuCollapse(false);
	};
	
	const menuMouseLeave = () => {
		setMenuCollapse(true);
	}
	
	return (
				<ProSidebar collapsed={ menuCollapse } className='ProSidebar' onMouseOver={ menuMouseOver } onMouseLeave={ menuMouseLeave }>
					<header className='SidebarHeader'>
						<Link to='/'>
							<picture className="SidebarPicture">
								<img src={ menuCollapse ? Favicon : Logo }  alt='Img'/>
							</picture>
						</Link>
					</header>
					<section className='SidebarContent'>
						<LinkItem to='/users' icon={ <FaHeart /> }>Usuarios</LinkItem>
						<LinkItem to='/products' icon={ <MdOutlineChecklist /> }>Products</LinkItem>
					</section>
					<footer className='SidebarFooter'>
						SidebarFooter
					</footer>
				</ProSidebar>
	);
}

export default Sidebar;
