import { useEffect, useState } from 'react';

const CardQuantityUser = () => {
	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		fetch('http://localhost:3001/api/users')
			.then(response => response.json())
			.then(data => {
				console.log(data.count.users);
				setUsers(data.count.users);
			})
			.catch(error => console.log(error));
	}, []);
	
	return (
		<main className='CardQuantity'>
			<div className="CardQuantityContainer">
				<div className='Card'>
					<h3 className='CardTitle'>Usuarios</h3>
					<span className='CardLength'>
						{ users }
					</span>
				</div>
			</div>
		</main>
	)
}

export default CardQuantityUser;
