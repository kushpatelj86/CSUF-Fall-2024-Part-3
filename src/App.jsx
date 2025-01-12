import { useState } from "react";

function App() {

  let [count, setCount] = useState(0); // look after these variable
  // count -> state change variable
  // setCount -> method

  // let count = 0; 

  const addValue = () => {
    count = count + 1;
    setCount(count);
  }

  const removeValue = () => {
    count = count - 1;
    setCount(count);
  }

  return (
    <>
      <button>
        Counter : {count}
      </button>
      <br />

      <button onClick={addValue}>
        Add Value : {count}
      </button>
      <br />

      <button  onClick={removeValue}>
        Remove Value : {count}
      </button>
      <br />

      <button>
        Test Value : {count}
      </button>
    </>
  )
}

export default App
