import React, { Component } from 'react';
class CardProduct extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="cardProduct">
                <div className="product d-flex justify-content-between">
                    <span>-40%</span>
                    <h6 className='pt-1 px-1'>Out Of Stock</h6>
                </div>
                {/* <div className='detailsProduct d-flex column align-items-center justify-content-center'>
                    <h5>Read More</h5>
                    <ArrowForwardIcon />
                </div> */}
                <div className='pt-3'>
                    <h1>W CARAT AQUAMARINE AND DIAMOND</h1>
                    <div className='d-flex column prix '>
                        <p className='prixOriginal'>$150.00</p>
                        -
                        <p className=''>$90.00</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
  }
}
export default CardProduct