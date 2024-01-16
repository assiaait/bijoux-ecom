import React, { Component } from 'react'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Chiper from "./Chiper.jsx";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className='d-flex column justify-content-between px-5 navbar'>
          <Chiper />
            <div>
              <ul className='d-flex column justify-content-between li pt-3'>
                <li>
                  <Link to='/' className=''>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/shop'>Shop</Link>
                </li>
                <li>
                  <Link to='/AboutUsPage'>Our Story</Link>
                </li>
                <li>
                  <Link to='/Blog'>Blog</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <input
                className='search'
                placeholder='search'
                type='search'
                name='search'
                id=''
              />
              <Search className='fa-search' />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default NavBar
