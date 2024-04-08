import React from "react";
import Controls from "./components/Controls/Controls";
import Random from "./components/Random/Random";
import { SideCount } from "./components/SideCount";
import Total from "./components/Total/Total";
import { Birthday } from "./components/Birthday";

import "./styles/app.css";

function App() {
	return (
		<div className="App">
			<header className="header">
				<SideCount />
				<Random />
			</header>
			<Total />
			<Controls />
			<Birthday />
		</div>
	);
}

export default App;
