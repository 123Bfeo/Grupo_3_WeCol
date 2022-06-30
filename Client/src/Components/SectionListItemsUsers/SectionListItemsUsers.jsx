import React, {useEffect, useState} from 'react';
import '../SectionListItems/SectionListItems.css';
import {AiTwotoneEdit, MdDelete} from 'react-icons/all';

const SectionListItemsUsers = () => {
	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		fetch('http://localhost:3001/api/users')
			.then(response => response.json())
			.then(data => {
				console.log(data.data.users);
				setUsers(data.data.users);
			});
	}, []);
	return (
		<div className='SectionListItems'>
			<div className='SectionListItemsContent'>
				<table className='Table'>
					<thead className='TableHead'>
						<tr>
							<th>Id</th>
							<th>Imagen</th>
							<th>Nombre</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody className='TableBodyCard'>
						{
							users.map(user => {
								return (
									<tr key={user.id} className='CardBodyItem'>
										<td>{user.id}</td>
										<td>
											<picture className='ItemCardImg'>
												<img src={`http://localhost:3001/img/users/${user.avatar}`} alt={user.name} title={user.name} />
											</picture>
										</td>
										<td>{user.firstname} { user.lastname}</td>
										<td className='Actions'>
											<AiTwotoneEdit />
											<MdDelete />
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default SectionListItemsUsers;
