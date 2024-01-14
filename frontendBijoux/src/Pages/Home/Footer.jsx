import React, { Component } from 'react';
import Logo from '../../img/LogoWhite.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visa from '../../img/visa.png';
import MasterCard from '../../img/master-card.png';
import Paypal from '../../img/paypal.png';
import Amazon from '../../img/amazon.png';

class Footer extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="footer">
                    <div className="firstFooter d-flex column justify-content-between">
                        <img src={Logo} alt="" />
                        <div className='d-flex column justify-content-evenly'>
                            <h4>SUBSCRIBE OUR NEWSLETTER AND GET DISCOUNT 20% OFF</h4>
                            <input className='emailSubscribe' type="email" name="email" id="" placeholder="YOUR E-MAIL ADDRESS" />
                            <button className='btnSubscribe' type="submit">SUBSCRIBE</button>
                        </div>
                    </div>
                    <hr/>
                    <div className=" d-flex justify-content-between secandFooter">
                        <div style={{width:'25vw'}}>
                            <h2><a style={{color:'#ffffff',fontSize: '24px',lineHeight: '31px',textDecoration:'none'}} href="tel:++212630012546" >+2126 30 01 25 46</a></h2>
                            <p style={{color:'#ffffff80',fontSize:'20px',marginTop:'10px'}}>Sidi moumen jdid Gr02<br/> Rue 03 N80,Casablanca</p>
                            <p  style={{color:'#ffffff80',fontSize:'20px',marginTop:'10px'}}>vader&dochter@jewelry.com</p>
                            <div className='d-flex column justify-content-between' style={{width:'15vw'}}>
                                <TwitterIcon className='iconSocial' />
                                <InstagramIcon className='iconSocial' />
                                <YouTubeIcon className='iconSocial' />
                                <FacebookIcon className='iconSocial' />
                            </div>
                        </div>
                        <div style={{width:'16vw'}} className="">
                            <h2 style={{color:'#ffffff',fontSize: '24px',lineHeight: '31px',textDecoration:'none'}}>COMPANY</h2>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>About us</p>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>affiliate programme</p>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>press links</p>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>business accouts</p>
                        </div>
                        <div style={{width:'16vw'}} className="">
                            <h2  style={{color:'#ffffff',fontSize: '24px',lineHeight: '31px',textDecoration:'none'}} >help</h2>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>email us</p>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>help & faq</p>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>shipping policy</p>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>gift cards</p>
                        </div>
                        <div style={{width:'16vw'}} className="">
                            <h2  style={{color:'#ffffff',fontSize: '24px',lineHeight: '31px',textDecoration:'none'}} >COMPANY</h2>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>tems  conditions</p>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>return policy</p>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>we are hiring</p>
                            <p style={{color:'#ffffff80',fontSize:'20px'}}>privacy policy</p>
                        </div>
                        <div style={{width:'25vw'}} className="">
                            <h2  style={{color:'#ffffff',fontSize: '24px',lineHeight: '31px',textDecoration:'none'}} >Brands</h2>
                            <p style={{color:'#ffffff80',fontSize:'18px'}}>HORNY LUNSTONMOON TÉ,NICOLAS LEO,CAVI JUSMEN,LUSY CELLATI,JEWERY HIMAS,CHANIL EO,CASATER,MINASHI,GRA GAE</p>
                            <div  className='d-flex column justify-content-between' style={{width:'20vw'}}>
                                 <img src={Visa} width="50" alt="" />
                                 <img src={MasterCard} width="50" alt="" />
                                 <img src={Paypal} width="50" alt="" />
                                 <img src={Amazon} width="50" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Footer;