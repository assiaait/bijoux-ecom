import { useEffect, useState } from 'react'
import { PhoneAndroid } from '@mui/icons-material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from '../../img/Logo-1.png'
import { Link } from 'react-router-dom';

function Header2 ({ cart }) {
  const cartItemCount = cart?.reduce((total, item) => total + item.product_qty, 0) || 0;
    return (
      <>
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
              <Link to="/">
                <img src={Logo} width='80' alt='Logo' />
              </Link>
              <div className='d-flex column '>
                <div className='pe-5'>
                  <Link
                    className='title1 text-decoration-none pt-3 '
                    style={{ color: '#34513f', textAlign: 'center',display:'flex',flexDirection:'column',alignItems:'center' }}
                  >
                    <FavoriteBorderIcon />
                    <p className='title pt-1'>WishList</p>
                  </Link>
                </div>
                <div>
                  <Link
                    className='title text-decoration-none pt-3'
                    to="/cart"
                    style={{ color: '#34513f', textAlign: 'center',display:'flex',flexDirection:'column',alignItems:'center' }}
                  >
                    <ShoppingBagOutlinedIcon />
                    <p className='title pt-1'>Cart({cartItemCount})</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
export default Header2
