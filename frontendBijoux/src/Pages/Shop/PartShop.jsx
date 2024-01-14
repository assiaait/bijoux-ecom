import React, { Component } from 'react';
import CardProduct from "./CardProduct.jsx";

class PartShop extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="">
                <h1 className='partShop'>Luxury Jewelry</h1>
                <hr />
                <div className="shop d-flex justify-content-evenly">
                    <h4>NEW ARRIVED</h4>
                    <h4>FEATURED</h4>
                    <h4>ON A SALE</h4>
                </div>
                <hr />
                <div className="container row row-cols-4 gap-3 justify-content-around listProduct">
                    <CardProduct className="col" />
                    <CardProduct className="col" />
                    <CardProduct className="col" />
                    <CardProduct className="col" />
                    <CardProduct className="col" />
                    <CardProduct className="col" />
                </div>
                
            </div>
        </React.Fragment>
    )
  }
}
export default PartShop
