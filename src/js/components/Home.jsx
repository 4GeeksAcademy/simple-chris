import React,{useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./Counter";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);
	useEffect(()=>{
		const interval = setInterval(()=>{
			setCount(prevCount=>prevCount+1)
		},1000)
		return()=>clearInterval(interval)
	},[])
	return (
		<div className="text-center">


			<h1 className="text-center mt-5">simple Counter</h1>
			<div>
				<h1>Counter: {count}</h1>
				< button onClick={() => setCount(count + 1)}>Increment</button>
				< button onClick={() => setCount(count - 1)}>decrement</button>
				< button onClick={() => setCount(0)}>Reset</button>

			</div>
			<Counter/>
		</div>
	);
};

export default Home;