import './App.css';
import Products from './components/Products';
import UseEffect from './components/UseEffect';
import UseState from './components/UseState';
import Users from './components/Users';
import BackendApi from './components/backendApi';

function App() {
  return (
   <div>
    <h1>UseState</h1>
    <UseState />
    <UseEffect />
    {/* <Users /> */}
    <Products />
    {/* <BackendApi /> */}
   </div>
  );
}

export default App;
