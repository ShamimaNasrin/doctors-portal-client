import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const booking = useLoaderData();
    //console.log(booking);
    const { treatment, price, appointmentDate, slot } = booking;

    //stripe Publishable key
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    console.log(stripePromise);

    return (
        <div className='p-7'>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>

            {/* call the checkoutform */}
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;