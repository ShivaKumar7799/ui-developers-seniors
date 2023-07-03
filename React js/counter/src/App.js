import "./App.css";
import { useState } from "react";
import Button from "./Components/Button";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  // function resetCount() {
  //   setCount(0);
  // }
  // function handleChange1000(){
  //   setCount(1000)
  // }
  // function handleChange74574(){
  //   setCount(74574)
  // }
  function handleCountChange(event){
    console.log(event.target.value)
    setCount(Number(event.target.value))
  }
  return (
    <div>
      <h1>Counter :  {count} </h1>
      <button onClick={increment}> + </button> 
      <button onClick={decrement}> - </button>

      <Button value={0} name = "reset" handleCountChange = {handleCountChange} ></Button>
      <Button value={1000} name="1000" handleCountChange = {handleCountChange} ></Button>
      <Button value={74574} name="74574" handleCountChange = {handleCountChange} ></Button>
      <Button value={54545} name="54545" handleCountChange = {handleCountChange} ></Button>
      <Button value={111111} name="111111" handleCountChange = {handleCountChange} ></Button>

      {/* <button value={0} onClick={handleCountChange}>Reset</button>
      <button value={1000} onClick={handleCountChange} >1000</button>
      <button value={74574} onClick={handleCountChange} >74574</button>
      <button value={54545} onClick={handleCountChange} >54545</button>
      <button value={111111} onClick={handleCountChange} >111111</button> */}
    </div>
  );
}

export default App;
