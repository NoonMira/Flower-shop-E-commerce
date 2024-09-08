import StripeCheckout from '@/components/StripeCheckout';

const CheckoutPage = () => {
    return (
        <div className="max-w-lg mx-auto p-6 bg-pink-50 rounded-lg shadow-lg">
            <h1 className="text-center text-3xl font-bold text-pink-600 mb-6">Checkout</h1>
            <StripeCheckout />
        </div>
    );
};

export default CheckoutPage;
