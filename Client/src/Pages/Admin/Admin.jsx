import React, {useEffect} from 'react';
import './Admin.css';

import Aside from '../../Components/Aside/Aside';
import Main from '../../Components/Main/Main';

const Admin = () => {
	useEffect(() => {
		document.title = 'Management'
	});
	return (
		<section className='Admin'>
			<Aside />
			<article className='UserLogged'></article>
			<Main />
		</section>
	)
}

export default Admin;
