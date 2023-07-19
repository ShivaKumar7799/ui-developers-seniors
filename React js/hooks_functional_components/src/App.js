import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import UseState from './components/useState/UseState';
import UseEffect from './components/useEffect/UseEffect';
import NavBar from './components/navbar/NavBar';
import Homepage from './components/homepage/Homepage';
import UseRef from './components/useRef/UseRef';

function App() {

  console.log("app component is rendered")
  const hooksButtons = [
    {
      to : "/",
      buttonName : "Home"
    },
    {
      to : "/useState",
      buttonName : "use State"
    },
    {
      to : "/useEffect",
      buttonName : "use Effect"
    },
    {
      to : "/useRef",
      buttonName : "use Ref"
    },
    {
      to : "/useContext",
      buttonName : "use context"
    },
    {
      to : "/useMemo",
      buttonName : "use memo"
    },
    {
      to : "/useCallback",
      buttonName : "use callback"
    },
    {
      to : "/customHooks",
      buttonName : "custom hook"
    },
    {
      to : "/useReducer",
      buttonName : "use reducer"
    },
]
  return (
    <div>
      <h1>Hooks</h1>
      <NavBar />
      <BrowserRouter>
      {hooksButtons.map((item,index) => <Link key={index} to={item.to}><button>{item.buttonName}</button></Link> )}
      
        <Routes>
          <Route path="/" element = {<Homepage />} />
          <Route path="/useState" element = {<UseState />} />
          <Route path="/useEffect" element = {<UseEffect />} />
          <Route path="/useRef" element = {<UseRef />} />
          <Route path="/useContext" element = {<h1>useContext</h1>} />
          <Route path="/useMemo" element = {<h1>useMemo</h1>} />
          <Route path="/useCallBack" element = {<h1>useCallBack</h1>} />
          <Route path="/customHooks" element = {<h1>customHooks</h1>} />
          <Route path="/useReducer" element = {<h1>useReducer</h1>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
