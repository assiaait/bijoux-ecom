import React, { useState } from "react";

function Counter(props) {
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
      <div className="d-flex justify-content-around align-items-center" style={{border:'2px solid #34513F',width:'8vw',height:'8vh',cursor:'pointer'}}>
        <span onClick={handleDecrement}  style={{fontSize:'30px',fontWeight:'bold'}}>-</span>
        <h6 className="mt-2" style={{fontSize:'20px'}}>{quantity}</h6>
        <span onClick={handleIncrement} style={{fontSize:'25px',fontWeight:'bold'}}>+</span>
      </div>
    );
  }
  export default Counter