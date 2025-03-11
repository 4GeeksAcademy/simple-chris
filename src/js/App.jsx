import React, { useState } from "react";
import "./styles.css"; // Ensure this file exists with proper button styles

function App() {
  const [count, setCount] = useState(0);

  // Use functional updates for better performance
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0)); // Prevents negative numbers
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ border: "2px solid #333", padding: "10px", borderRadius: "5px" }}>
        Simple Counter
      </h1>
      <h2 style={{ fontSize: "2rem", margin: "20px 0", color: "#555" }}>
        {count}
      </h2>
      <div>
        <button onClick={increment} className="button increment">Increment</button>
        <button onClick={decrement} className="button decrement">Decrement</button>
        <button onClick={reset} className="button reset">Reset</button>
      </div>
    </div>
  );
}

export default App;