import {useEffect, useState} from 'react';
import '../LastItem/LastItem.css';

import ReactCountryFlag from "react-country-flag"


const LastUser = () => {
	const [ lastUser, setLastUser ] = useState([]);
	
	useEffect(() => {
		fetch('http://localhost:3001/api/users')
			.then(response => response.json())
			.then(data => {
				console.log(data.count.userLast);
				setLastUser(data.count.userLast);
			})
			.catch(error => console.log(error));
	}, []);
	
	return (
		<div className='LastUser'>
			<div className='LastCard'>
				<div className='LastCardContent'>
					<span className='LastCreationTitle'>Último usuario creado</span>
					<picture className='LastCardImage'>
						<img src={`http://localhost:3001/img/users/${lastUser.avatar }`} alt={ lastUser.username } title={ lastUser.username } />
					</picture>
					<h3 className='LastCardContentHead'>
						<span className='TitleName'>{ lastUser.username }</span>
						<ReactCountryFlag className="EmojiFlag" countryCode="CO"  aria-label="Colombia" style={{ fontSize: '30px'}} />
					</h3>
					<div className='LastCardContentBody'>
						<div className='LastCardContentBodyHead'>
							<span className='LastCardContentBodyHeadName'>{ lastUser.firstname } { lastUser.lastname}</span>
							<span>{ lastUser.email }</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LastUser;
