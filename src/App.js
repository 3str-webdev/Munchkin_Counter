import React from 'react';
import Random from './components/Random/Random';
import Total from './components/Total/Total';

import Controls from './components/Controls/Controls';
import './styles/app.css';

function App() {
	return (
		<div className="App">
			<Random />
			<Total />
			<Controls />
		</div>
	);
}

export default App;
