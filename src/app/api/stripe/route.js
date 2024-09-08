import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const { amount } = await req.json();
        
        if (!amount) {
            return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
        }

        // Create Payment Intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount, // amount in cents
            currency: 'thb', // Thai Baht
            payment_method_types: ['card'],
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
