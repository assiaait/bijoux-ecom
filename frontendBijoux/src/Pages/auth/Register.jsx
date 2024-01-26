import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { axiosClient } from '../../api/axios';

function Register(){
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    const [registerInput,setRegister] = useState({
        name:'',
        email:'',
        password:'',
        password_confirmation: '',
        error_list:[],
    })

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value})

    }
    const registerSubmit = (e)=>{
        
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            password_confirmation: registerInput.password_confirmation,
        }
        axiosClient.get(`${apiUrl}/sanctum/csrf-cookie`).then(response => {
            axiosClient.post(`${apiUrl}/api/register`, data).then(res => {
                if (res.data.status === 200) {
                    setRegister({
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: '',
                        error_list: [],
                    });
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success",res.data.message,"success");
                    
                }else{
                    setRegister({...registerInput, error_list: res.data.validation_errors})
                }
            });
        });
        
    }
    return(
        <div>
            <main className='d-flex row justify-content-center mb-5' style={{ margin:'auto'}}>
                <div style={{width:'35vw'}}>
                    <h1 style={{textAlign:'center',paddingRight:'5vw',fontSize:'34px',fontWeight:'400',lineHeight:'40px',letterSpacing:'0.04em'}}>Register</h1>
                    <form onSubmit={registerSubmit}>
                        <div className='mt-4 '>
                            <label className='mb-3' style={{color: '#000',maxWidth: '700px',fontSize: '1rem',fontWeight:'500'}} htmlFor="">Full Name</label>
                            <input type="text" name='name' onChange={handleInput} value={registerInput.name}  style={{color: '#000',maxWidth: '400px',fontSize: '0.8rem',fontWeight:'600',borderRadius:'0'}} className="p-3 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <span>{registerInput.error_list.name}</span>                       
                        </div>
                        <div className='mt-4 '>
                            <label className='mb-3' style={{color: '#000',maxWidth: '700px',fontSize: '1rem',fontWeight:'500'}} htmlFor="">Email address</label>
                            <input type="email" name='email' onChange={handleInput} value={registerInput.email}  style={{color: '#000',maxWidth: '400px',fontSize: '0.8rem',fontWeight:'600',borderRadius:'0'}} className="p-3 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <span>{registerInput.error_list.email}</span> 
                        </div>
                        <div className='mt-3 '>
                            <label className='mb-3' style={{color: '#000',maxWidth: '700px',fontSize: '1rem',fontWeight:'500'}} htmlFor="">Password </label>
                            <input type="password" name='password' onChange={handleInput} value={registerInput.password} style={{color: '#000',maxWidth: '400px',fontSize: '0.8rem',fontWeight:'600',borderRadius:'0'}} className="p-3 form-control" id="exampleInputPassword1"/>
                            <span>{registerInput.error_list.password}</span> 
                        </div>
                        <div className='mt-3 '>
                            <label className='mb-3' style={{color: '#000',maxWidth: '700px',fontSize: '1rem',fontWeight:'500'}} htmlFor="">Password Confirmation </label>
                            <input type="password" name='password_confirmation' onChange={handleInput} value={registerInput.password_confirmation} style={{color: '#000',maxWidth: '400px',fontSize: '0.8rem',fontWeight:'600',borderRadius:'0'}} className="p-3 form-control" id="exampleInputPassword1"/>
                            <span>{registerInput.error_list.password_confirmation}</span> 
                        </div>
                        <button onSubmit={registerSubmit} type="submit" className="btn my-3" style={{width: '400px',margin:0,color:'#fff',background:'#181818',border:'none',}}>Register</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
export default Register