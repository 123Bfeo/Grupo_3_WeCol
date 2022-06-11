import React, {useEffect} from 'react';

const Admin = () => {
	useEffect(() => {
		document.title = 'Management'
	});
	return (
		<>
			<h1>Admin</h1>
		</>
	)
}

export default Admin;