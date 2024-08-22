import React from "react";
import { TrafficLight } from './TrafficLight.jsx';
import { SimpleCounter } from "./SimpleCounter.jsx";




// Create your first component
const Home = () => {
	return (
		<div className="text-center">
			 <TrafficLight/> 
			 <SimpleCounter/>
		
		</div>
	);
};

export default Home;
