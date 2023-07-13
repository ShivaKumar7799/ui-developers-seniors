import './App.css';
import Header from './components/Amazon header/AmazonHeader';
import {AmazonFooter} from './components/Amazon Footer/AmazonFooter';
import TopDeals from './components/TopDeals/TopDeals';
import { useEffect, useState } from 'react';
import GetIdeas from './components/gift ideas history/getIdeas';
import axios from 'axios'

function App() {
  const [topDealsImages, setTopDealImages] = useState([])
  const [mobileImage,setMobileImage] = useState("")

  function getTopDealsData(){
    // fetch("https://64a7ab7bdca581464b848b99.mockapi.io/topDealsImages").then((res) => res.json()  ).then(result => setTopDealImages(result)).catch(err => console.log(err))
    axios.get("https://64a7ab7bdca581464b848b99.mockapi.io/topDealsImages").then(result => setTopDealImages(result.data))
  }

  useEffect(() => {
    getTopDealsData()
  },[])

  const addImageAddress = (event) => {
    // console.log(event.target.value)
    setMobileImage(event.target.value)
  }

  const addProduct = () => {
    // console.log("product is added")
    // topDealsImages.push(mobileImage)
    // setTopDealImages([...topDealsImages,mobileImage])
    axios.post("https://64a7ab7bdca581464b848b99.mockapi.io/topDealsImages",{ image : mobileImage }).then(() => getTopDealsData() ).catch(err => console.log(err))
  }

  return (
    <div>
      <Header />
      <div id='topDealsSection' >
        {/* <TopDeals image = "https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg" />
        <TopDeals image = "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg" />
        <TopDeals image = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/ExchangeStore/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-f2cu0-71kvf-e22z6-pxo6l_580x800_in-en.jpg" />
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals />
        <TopDeals /> */}
        {topDealsImages.map((item,index) => <TopDeals image = {item.image} /> )}
      </div>
       <br />
        <input value={mobileImage} type='text' onChange={addImageAddress} /> <button onClick={addProduct} >Add Product</button>
        <br />
        <br />
        <br />
        <GetIdeas />
      <AmazonFooter />
    </div>
  );
}

export default App;
