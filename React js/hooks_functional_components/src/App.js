import './App.css';
import { createContext, useState } from 'react';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import UseState from './components/useState/UseState';
import UseEffect from './components/useEffect/UseEffect';
import NavBar from './components/navbar/NavBar';
import Homepage from './components/homepage/Homepage';
import UseRef from './components/useRef/UseRef';
import Login from './components/Login page/Login';

export const AppMainContext = createContext()

function App() {


  const [userName, setUserName] = useState("");

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
    {
      to : "/login",
      buttonName : "Login"
    }
]

  const appContextValues = {
    userName,
    setUserName
  }

  return (
    <AppMainContext.Provider value={appContextValues} >
      <div>
      <h1>Hooks</h1>
      <NavBar />
      <BrowserRouter>
      {hooksButtons.map((item,index) => <Link key={index} to={item.to}><button>{item.buttonName}</button></Link> )}
      
        <Routes>
          <Route path="/login" element = {<Login />} />
          <Route path="/" element = {<Homepage />} />
          <Route path="/useState" element = {<UseState />} />
          <Route path="/useEffect" element = {<UseEffect />} />
          <Route path="/useRef" element = {<UseRef />} />
          <Route path="/useContext" element = {<h1>useContext</h1>} />
          <Route path="/useMemo" element = {<h1>useMemo</h1>} />
          <Route path="/useCallBack" element = {<h1>useCallBack</h1>} />
          <Route path="/customHooks" element = {<h1>customHooks</h1>} />
          <Route path="/useReducer" element = {<h1>useReducer</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>

      </BrowserRouter>
    </div>
    </AppMainContext.Provider>
  );
}

export default App;
