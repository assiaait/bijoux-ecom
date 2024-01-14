import React, { Component } from 'react'
import { PhoneAndroid } from '@mui/icons-material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from '../../img/Logo-1.png'
class Header2 extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className='container pt-3 mb-5'>
            <div className='d-flex column justify-content-between'>
              <div className='row'>
                <a
                  className='title text-decoration-none mt-4'
                  href='tel:+212630012546'
                  style={{ color: '#34513f', textAlign: 'center' }}
                >
                  <PhoneAndroid />
                  <p className='title pt-1'>+212630012546</p>
                </a>
              </div>
              <div>
                <img src={Logo} width='80' alt='Logo' />
              </div>
              <div className='d-flex column '>
                <div className='pe-5'>
                  <a
                    className='title1 text-decoration-none pt-3 '
                    href='tel:+212630012546'
                    style={{ color: '#34513f', textAlign: 'center',display:'flex',flexDirection:'column',alignItems:'center' }}
                  >
                    <FavoriteBorderIcon />
                    <p className='title pt-1'>WishList</p>
                  </a>
                </div>
                <div>
                  <a
                    className='title text-decoration-none pt-3'
                    href='tel:+212630012546'
                    style={{ color: '#34513f', textAlign: 'center',display:'flex',flexDirection:'column',alignItems:'center' }}
                  >
                    <ShoppingBagOutlinedIcon />
                    <p className='title pt-1'>Cart(0)</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Header2
