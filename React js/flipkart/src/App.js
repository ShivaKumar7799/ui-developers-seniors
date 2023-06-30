import './App.css';
import Banner from './components/Banner/Banner';
import EmployeeReviewCard from './components/employee review card/EmployeeReviewCard';

function App() {

  return (
   <div>
    <h1>Flipkart</h1>
    <div className='banner_container' >
      {/* {Banner("https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100","Grocery")} */}
      <Banner image="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" title = "Grocery" />
      <Banner image="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" title="mobiles" />
      <Banner image="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" title ="Fashion" />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
    </div>
    <div className='employee_review_card' >
      <EmployeeReviewCard image="https://static-assets-web.flixcart.com/fk-sp-static/images/Chaitanya_Ramalingegowda__DirectorCo-founder_Wakefit.png" review='"BBD and BDS sales compounded the consumer demand which led to a milestone of 150% YoY revenue growth from Flipkart."' name="Chaitanya Ramalingegowda, Wakefit.co" />
      <EmployeeReviewCard image="https://static-assets-web.flixcart.com/fk-sp-static/images/Raju.png" review='"Starting with 1, Flipkart helped me expand to 6 categories with 5x growth year on year!"' name="Raju Lunawath, Amazestore" />
      <EmployeeReviewCard image="https://static-assets-web.flixcart.com/fk-sp-static/images/Shubhash_Chopra.png" review='"With Flipkart, we went from Rs.20,000 to Rs.2 Cr in sales per annum!"' name="Shubhash Chopra, DivisaStore" />
    </div>
   </div>
  );
}

export default App;
