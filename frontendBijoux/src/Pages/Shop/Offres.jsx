import React, { Component } from 'react';
import Earring from '../../img/offreDEarring.png';
import Text from '../../img/text.png'
class Offres extends Component {
  render() {
    return (
        <React.Fragment style={{marginBottom:'20px'}}>
            <div className="d-flex column justify-space-between">
                <div className='cardOffre1 d-flex column'>
                    <img src={Earring} alt="" />
                    <div className='offreText'>
                        <h6 style={{color:'#a75b43',fontSize:'12px',textTransform:'uppercase',lineHeight:'36ox',letterSpacing:'2px'}}>Sale OFF 50% Collection</h6>
                        <h5 style={{color:'#34513f',fontSize:'36px',lineHeight:'46px'}}>Floral Earrings</h5>
                    </div>
                </div>
                <div className='cardOffre2 d-flex row align-items-center justify-content-center'>
                    <img src={Text} alt="" />
                    <h2 className='align-self-center'>Green Life Trendy 2022</h2>
                </div>
            </div>

        </React.Fragment>
    )
  }
}
export default Offres