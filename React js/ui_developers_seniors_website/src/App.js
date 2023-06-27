import './App.css';
import NavBar from './components/NavBar';
import ContactInfromation from './components/contactInfromation';

function App() {
  
  const currentData = new Date();
  const date = currentData.getDate();
  const day = currentData.getDay();
  const year = currentData.getFullYear();
  const month = currentData.getMonth() + 1;

  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

  return (
   <div>
    <NavBar />
    <h1>Flipkart - {days[day]} offers {date} - {month} - {year} </h1>
    <p>This is a paragraph tag</p>
    <ul>
      <li>sadfl</li>
      <li>asjf</li>
      <li>sadlf</li>
    </ul>
    <ContactInfromation />
   </div>
  );
}

export default App;
