import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Admin from './Pages/Admin/Admin';


function App() {
	
	return (
		<BrowserRouter>
			<Admin />
		</BrowserRouter>
	)
}

export default App
