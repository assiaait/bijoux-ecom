import React, { Component } from 'react'
import Slide1 from '../../img/slider-1.jpg';
import Slide2 from '../../img/slider-2-1.jpg';
import Slide3 from '../../img/slider-3.jpg';
class Slide extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
            <img src={Slide1} className="d-block w-100" style={{height:'60vh'}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h1 style={{color:'#ffffff',fontSize:'30px',lineHeight:'36px',letterSpacing:'15px',marginBottom:'10vh'}}>STYLE EDIT : RING STACKS</h1>
                <button className='btnSlide' style={{width:"12vw",height:'8vh'}}>EXPLORE NOW</button>
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
            <img src={Slide2} className="d-block w-100" style={{height:'60vh'}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h1 style={{color:'#ffffff',fontSize:'30px',lineHeight:'36px',letterSpacing:'15px',marginBottom:'10vh'}}>ALWAYS TRENDY</h1>
                <button className='btnSlide' style={{width:"12vw",height:'8vh'}}>EXPLORE NOW</button>
            </div>
            </div>
            <div className="carousel-item"  data-bs-interval="1000">
            <img src={Slide3} className="d-block w-100" style={{height:'60vh'}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h1 style={{color:'#ffffff',fontSize:'30px',lineHeight:'36px',letterSpacing:'15px',marginBottom:'10vh'}}>NEW COLOR OF THE YEAR</h1>
                <button className='btnSlide' style={{width:"12vw",height:'8vh'}}>EXPLORE NOW</button>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </React.Fragment>
        )
  }
}
export default Slide