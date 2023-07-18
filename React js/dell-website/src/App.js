import './App.css';
import {BrowserRouter,Route,Routes, Link} from 'react-router-dom'
import Homepage from './components/Homepage';
import ContactPage from './components/contactPage';
import AboutPage from './components/aboutPage';
import Login from './components/login';
import Users from './components/Users';
import EmployeeInfo from './components/EmployeeInfo';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/"><h1>Dell</h1></Link>
        {/* <a href="/contact">contact</a> */}
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">Users</Link>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<ContactPage />}  />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element = {<Users />} />
          <Route path="/users/:userId" element = {<EmployeeInfo />} />
        </Routes>
        <Footer  />
      </BrowserRouter>
    </div>
  );
}

export default App;
