import React from 'react';
import {Link} from 'react-router-dom';
import './style/App.css';
import Components from './routes/router';

const App = () => {
	return (
		<div className="app">
			Go to <Link to="user">User</Link> Component
			{Components}
		</div>
	);
};

export default App;
