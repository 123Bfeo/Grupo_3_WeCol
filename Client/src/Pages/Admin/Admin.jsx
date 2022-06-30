import React, {useEffect} from 'react';
import './Admin.css';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Main from '../../Components/Main/Main';

const Admin = () => {
	useEffect(() => {
		document.title = 'Management'
	});
	return (
		<section className='Admin'>
			<Sidebar />
			<Main />
		</section>
	)
}

export default Admin;
