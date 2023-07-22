import { useEffect, useState } from 'react';
import './App.css';
import Custom from './components/custom hooks/Custom';
import useGetApi from './components/custom hooks/CustomApi';
import useReverseString from './components/custom hooks/CustomHooks';
import CustomHooks from './components/custom hooks/CustomHooks';
import Memo from './components/memo/Memo';
import ShowHide from './components/showHide/ShowHide';
import UseCallBack from './components/useCallback/UseCallBack';
import UseMemo from './components/useMemo/UseMemo';
import UseReducer from './components/useReducer/UseReducer';



function App() {

  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => setUsersData(res))
  },[] )
 
  return (
    <>
    {usersData.map((item,index) => <ShowHide key={index} item={item} /> )}
      {/* <Custom /> */}
       {/* <CustomHooks /> */}
       {/* <UseReducer /> */}
       {/* <Memo /> */}
       {/* <UseMemo /> */}
       {/* <UseCallBack /> */}
    </>
  );
}

export default App;
