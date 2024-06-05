import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'


function App() {

  // // let name = "Lakshya";
  // let [name, setName] = useState("Lakshya");

  // function printName(name) {
  //   console.log(name);
  // }

  // function doSomething() {
  //   console.log("Button Clicked");
  //   setName("King");
  //   console.log(name);
  // }
  // // console.log("hello")





  return (
    <>
      {/* <h1>Welcome to React {name}</h1>
      <button className="btn" onClick={doSomething}>Click</button>
      {/* <button className='btn' onClick={()=>{printName("Lakshya")}}>Click this</button> */}
      {/* <button className='btn' onClick={printName.bind(this, "Lakshya")}>Print Name(bind)</button>
      <Product name="Samsung M51" price="23000" imageUrl="https://cdn.phonebunch.com/fullsize/3760%20(1).jpg" /><br></br>
      <Product name="iPhone 14 Pro" price="123000" imageUrl="https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg?v=1691140898" /> */}
      {/* <Product name="Samsung M51"></Product>
      <Product name="Iphone 14 Pro"></Product> */}


      <ProductList/>


    </>
  )
}

export default App
