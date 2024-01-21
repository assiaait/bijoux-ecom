import React, { Component } from 'react';

class OrderTrack extends Component{
    render(){
        return(
            <>
                <h4 className='mt-3 mb-5' style={{color: '#000',maxWidth: '700px',fontSize: '0.8rem',fontWeight:'600'}}>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</h4>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1"  style={{color: '#000',maxWidth: '700px',fontSize: '0.8rem',fontWeight:'700'}} className="form-label">Order ID</label>
                        <input type="email" placeholder="Found in your order confirmation email." style={{color: '#000',maxWidth: '700px',fontSize: '0.8rem',fontWeight:'600'}} className="p-3 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" style={{color: '#000',maxWidth: '700px',fontSize: '0.8rem',fontWeight:'700'}} className="form-label">Billing email</label>
                        <input type="password" placeholder="Email you used during checkout." style={{color: '#000',maxWidth: '700px',fontSize: '0.8rem',fontWeight:'600'}} className="p-3 form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn" style={{position:'relative',bottom:'80px',height:'8vh' ,width:'50vw',color:'#fff',background:'#181818',border:'none',borderRadius:'5px'}}>Track</button>
                </form>
            </>
        )
    }
}
export default OrderTrack