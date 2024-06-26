import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const removeValue = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const resetValue = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value is {count}</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
      <br />
      <br />
      <button onClick={resetValue}>Reset</button>

      <h2>{count}</h2>
    </>
  );
}

export default App;
