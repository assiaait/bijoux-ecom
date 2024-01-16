import React, { Component } from 'react';import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import CounterCart from './CounterCart';
import ImgProduct from '../../img/all 1.png';
import { Link } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


function createData(nameProduct, img, price, quantite,subTotal) {
  return { nameProduct, img, price, quantite,subTotal };
}

const rows = [
  createData('Sharm Club Bracelet - Pink', 'all 1.png', 100.00, 1,100.00),
  createData('Bold Hoops', 'all 1.png', 120.00, 2,240.00),
];

class ShoppingCarts extends Component {
    render(){
        return(
            <>
                <section style={{width:'100vw',padding:'3vw'}}>
                    <article style={{width:'60vw',height:'100vh'}}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{fontSize: '17px',color: '#000',fontFamily: 'Uchen Regular',}}>Product</TableCell>
                                        <TableCell align="right" style={{fontSize: '17px',color: '#000',fontFamily: 'Uchen Regular',}}>Price</TableCell>
                                        <TableCell align="right" style={{fontSize: '17px',color: '#000',fontFamily: 'Uchen Regular',}}>Quantity</TableCell>
                                        <TableCell align="right" style={{fontSize: '17px',color: '#000',fontFamily: 'Uchen Regular',}}>Subtotal</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.nameProduct}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row" style={{fontSize: '14px',lineHeight: '14px', fontWeight: '400', color: '#868686'}}>
                                            {/* <img src={`../src/img/${row.img}`} alt="" style={{width:'80px',height:'80px',marginRight:'20px'}} /> */}
                                            <img src={ImgProduct} alt="" style={{width:'80px',height:'80px',marginRight:'20px'}} />
                                            {row.nameProduct}
                                        </TableCell>
                                        <TableCell align="right" style={{fontSize: '12px',color: '#000',fontWeight:'500',}}>{row.price} MAD</TableCell>
                                        <TableCell align="right" style={{position:'relative',left:'30px'}}><CounterCart /></TableCell>
                                        <TableCell align="right" style={{fontSize: '12px',color: '#000',fontWeight:'500',}}>{row.subTotal} MAD</TableCell>
                                        <TableCell align="right"><CancelIcon style={{color:'#34513F'}} /></TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell align="right">
                                                <div class="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Coupon code" aria-label="Coupon code" aria-describedby="button-addon2" />
                                                    <button className="px-4 py-3" type="button" id="button-addon2" style={{background: '#000',textTransform: 'uppercase',color: '#fff',fontSize: '11px',borderRadius: '0',cursor:'pointer'}}>Apply coupon</button>
                                                </div>
                                        </TableCell>
                                        <TableCell style={{}}>
                                            <Link href='#' style={{color:'#181818',textDecoration:'none',fontWeight:'bold',cursor:'pointer',width:'30vw',fontWeight:'bold'}}>Continue Shopping</Link>
                                        </TableCell>
                                        <TableCell>
                                                <button type='submit' name='updateCart' style={{position:'relative',left:'100px',bottom:'10px',width:'10vw',height:'8vh',background: '#000',textTransform: 'uppercase',color: '#fff',fontSize: '11px',borderRadius: '0',cursor:'pointer',fontWeight:'bold'}}>Update Cart</button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </article>
                    <aside style={{width:'30vw',height:'100vh',marginLeft:'20px'}}>
                        <TableContainer component={Paper} style={{borderRdius:'0'}}>
                            <Table sx={{ minWidth: 200 }} aria-label="simple table">
                                <TableHead style={{background:'#E9E9E9'}}>
                                    <TableRow>
                                        <TableCell style={{fontSize: '17px',color: '#000',fontFamily: 'Uchen Regular',}}>Cart totals</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    
                                        <TableRow  className='bg-light'
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>SubTotal</TableCell>
                                            <TableCell component="th" scope="row" style={{fontSize: '14px',lineHeight: '14px', fontWeight: '400', color: '#868686'}}>
                                                420.00MAD
                                            </TableCell>
                                        </TableRow>
                                        <TableRow  className='bg-light'
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>Shipping</TableCell>
                                            <TableCell>
                                                <FormControl>
                                                    <RadioGroup
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        defaultValue="freeShipping"
                                                        name="radio-buttons-group"
                                                    >
                                                        <FormControlLabel  value="freeShipping" control={<Radio sx={{
                                                            color: '#181818',
                                                            '&.Mui-checked': {
                                                            color: '#181818',
                                                            },
                                                        }} />} label="Free Shipping" />
                                                        <FormControlLabel value="flatRate" control={<Radio sx={{
                                                            color: '#181818',
                                                            '&.Mui-checked': {
                                                            color: '#181818',
                                                            },
                                                        }} />} label="Flat Rate" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow  className='bg-light'>
                                            <TableCell>Total</TableCell>
                                            <TableCell>420.00 MAD</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <button className='px-4 m-2' style={{height:'8vh',background: '#000',textTransform: 'uppercase',color: '#fff',fontSize: '11px',borderRadius: '0',cursor:'pointer',fontWeight:'bold',}}>PROCEED TO CHECKOUT</button>
                                        </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </aside>
                </section>
            </>
        )
    }
}
export default ShoppingCarts