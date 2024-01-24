                                                            
                                                                                                                                import React, { useEffect, useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';
import { axiosClient } from '../../api/axios';
export const BASE_URL = 'localhost:8000';
export default function Stripe({total}) {
    const stripePromise = loadStripe('Your Publishable Key');
    const [clientSecret, setClientSecret] = useState("");
    const items = [{ amount: total }];

    useEffect(() => {
        fetchClientSecret();
    }, []);

    const fetchClientSecret = async () => {
        try {
            const response = await axiosClient.post(`/client/validate-order`, {
                items,
            });
            setClientSecret(response.data.clientSecret);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <>
            {
                stripePromise && clientSecret && <Elements stripe={stripePromise} options={{clientSecret}}>
                    <CheckoutForm />
                </Elements>
            }
        </>
    );
}

                                                            
                                                        