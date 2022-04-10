import "./index.css";
import Header from "./components/Header";
import Slider from "./components/Slider/Slider";
import Benefits from "./components/Benefits";
import PFL from "./components/PFL";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {

    const [show, setShow] = useState(false)

   
     // Add to cart funcionality
     
    const [cart, setCart] = useState([])

    const handleClick = (obj) => {
      const exist = cart.find((item) => item.id === obj.id)
      
      if (exist){
        setCart(
          cart.map((x) =>
            x.id === obj.id ? { ...exist, q: exist.q + 1 } : x
          )
        );
      } else{
        setCart([...cart, {...obj, q: 1}])
      }
     }

     const handleRemove = (obj) =>{
      const exist = cart.find((item) => item.id === obj.id)
      if(exist.q === 1){
        setCart(cart.filter((item)=> item.id !== obj.id))
      } else{
        setCart(
          cart.map((x) =>
            x.id === obj.id ? { ...exist, q: exist.q - 1 } : x
          )
        );
      }
     }
  
     const handleChange = () =>{
       setCart([])
     }

  return (
    <div className="main">
      <Header setShow={setShow} size={cart.length}/>
      {
        show? <Modal cart={cart} size={cart.length} handleRemove={handleRemove} handleClick={handleClick} setShow={setShow} /> : null
      }
      <Slider handleClick={handleClick}/>
      <Benefits/>
      <PFL handleChange={handleChange}/>
      <Footer/>
    </div>
  );
}

export default App;
