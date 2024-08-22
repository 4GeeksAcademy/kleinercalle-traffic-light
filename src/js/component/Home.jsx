import React from "react";
import { TrafficLight } from './TrafficLight.jsx';
import { SimpleCounter } from "./SimpleCounter.jsx";
import { TodoList } from "./TodoList.jsx";




// Create your first component
const Home = () => {
	return (
		<div className="text-center">
			 <TrafficLight/> 
			 <SimpleCounter/>
			 <TodoList/>
		
		</div>
	);
};

export default Home;
