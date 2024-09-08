"use client"
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useState } from 'react';

// Load your publishable key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        setLoading(true);

        const { data } = await axios.post('/api/stripe', {
            amount: 2500, // example amount in cents
        });

        const { error, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (error) {
            console.error('Error confirming card payment:', error);
        } else {
            if (paymentIntent.status === 'succeeded') {
                console.log('Payment successful!');
            }
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-pink-50 border border-pink-300 rounded-lg shadow-md">
        <div className="flex flex-col gap-2">
            <label htmlFor="cardNumber" className="font-semibold text-gray-700">Card Number</label>
            <CardNumberElement id="cardNumber" className="p-4 border border-pink-200 rounded-md bg-white" />
        </div>
        <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="expiryDate" className="font-semibold text-gray-700">Expiry Date</label>
                <CardExpiryElement id="expiryDate" className="p-4 border border-pink-200 rounded-md bg-white" />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="cvc" className="font-semibold text-gray-700">CVC</label>
                <CardCvcElement id="cvc" className="p-4 border border-pink-200 rounded-md bg-white" />
            </div>
        </div>
        <button
            type="submit"
            disabled={!stripe || loading}
            className={`py-2 px-4 rounded-lg text-white font-semibold ${
                loading ? 'bg-pink-300 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600'
            } transition-colors`}
        >
            {loading ? 'Processing...' : 'Pay'}
        </button>
    </form>
    );
};

const StripeCheckout = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default StripeCheckout;
