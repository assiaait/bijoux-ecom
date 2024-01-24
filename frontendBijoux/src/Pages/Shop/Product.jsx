import React, { Component } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CardProduct from './CardProduct';
import Boucle from '../../img/boucle.jpg';
import {  Rating } from '@mui/material';
import {useState} from 'react';
import Counter from './Counter' ;
import Collapsing from './Collapsing';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
          Shop
        </Link>,
        <Link
            underline="hover"
            key="3"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Wedding & Bridal
        </Link>,
        <Typography key="4" color="text.primary">
            Y Engagement Ring In 14k Yellow Gold
        </Typography>,
      ];

class Product extends Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        style={{backgroundColor:'#d6e8da',padding:'10px 40px',color:'#34513F'}}
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </header>
                <main>
                    <div className='sectionProduct d-flex '>
                        <div className="asideProduct">
                            <img src={Boucle} alt="" />
                        </div>
                        <div className="articleProduct mt-4">
                            <h1>Y Engagement Ring In 14k Yellow Gold</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <h4>1,300.00 MAD</h4>
                            <div className='d-flex '>
                                <Rating name="half-rating" defaultValue={2.5} precision={1} />
                                <span className='ms-2 mt-1' style={{fontSize:'13px',color:'#A7A7A7'}}>CUSTOMER REVIEW</span>
                            </div>
                            <div className='mt-3 d-flex'>
                                <Counter />
                                <button className='ms-5' style={{width:'20vw',border:'none',backgroundColor:'#34513F',color:'#fff',cursor:'pointer',fontSize: '18px',textTransform:' uppercase',lineHeight: '50px',fontWeight:'600'}}>ADD TO CARD</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Collapsing />
                    </div>
                    <div className='mt-5 mb-5'>
                        <h1 style={{textAlign:'center',fontSize: '28px',lineSeight: '32px',letterSpacing: '0.02em',marginBottom: '60px',fontWeight:'400'}}>Related Products</h1>
                        <div id="carouselExampleControlsNoTouching" className="carousel slide " data-bs-touch="false" data-bs-interval="false">
                        <div className="carousel-inner mb-5">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <div className=''>
                                        <CardProduct className="col" />
                                    </div>
                                    <div className=' ms-5'>
                                        <CardProduct className="col" />
                                    </div>
                                    <div className='ms-5'>
                                        <CardProduct className="col" />
                                    </div>
                                    <div className='ms-5'>
                                        <CardProduct className="col" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className=''>
                                        <CardProduct className="col" />
                                    </div>
                                    <div className='ms-5'>
                                        <CardProduct className="col" />
                                    </div>
                                    <div className='ms-5'>
                                        <CardProduct className="col" />
                                    </div>
                                    <div className='ms-5'>
                                        <CardProduct className="col" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev btnPrev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next btnNext" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
export default Product