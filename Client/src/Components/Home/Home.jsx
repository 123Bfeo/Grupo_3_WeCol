import React, {useEffect} from 'react';

const Home = () => {
	
	useEffect(() => {
		document.title = 'Home';
	}, []);
	return (
		<>
			<h1>Home</h1>
		</>
	)
}

export default Home;