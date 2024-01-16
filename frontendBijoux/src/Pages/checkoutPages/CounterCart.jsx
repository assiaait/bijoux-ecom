import React, { useState } from "react";

function CounterCart(props) {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement=()=>{
        if(quantity > 1){
            setQuantity(prevCount=>prevCount-1);
        }
    }
    const handleIncrement=()=>{
        if(quantity < 10){
            setQuantity(prevCount=>prevCount+1);
        }
    }
    return (
      <div className="d-flex justify-content-around align-items-center p-1" style={{border:'2px solid #a7a7a7',width:'6vw',height:'4vh',cursor:'pointer',borderRadius: '20px'}}>
        <span onClick={handleDecrement} >-</span>
        <h6 className="mt-2">{quantity}</h6>
        <span onClick={handleIncrement}>+</span>
      </div>
    );
  }
  export default CounterCart