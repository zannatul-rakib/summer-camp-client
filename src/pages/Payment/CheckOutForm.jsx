import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MyContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";




const CheckOutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(MyContext);
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // console.log('card ', card)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('');
            // console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.name || 'unknown',
                        email: user?.email || 'anonymous',
                    }
                }
            }
        )
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment Intend', paymentIntent)
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // const transactionId = paymentIntent.id;
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                quantity: cart.length,
                date: new Date(),
                status: "services successful",
                menuItems: cart.map(item => item.classId),
                cartItems: cart.map(item => item._id),
                itemName: cart.map(item => item.classTitle)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Payment is successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }



    return (
        <>
            <form className="text-center" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-[#15d5cc] btn mt-10 px-10 py-2 rounded-sm text-white cursor-pointer" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <div className="text-center mt-10 grid gap-4">
                {
                    cardError && <p className="text-red-500">{cardError}</p>
                }
                {
                    transactionId && <p className="text-green-500">Transaction completed with transactionId: {transactionId}</p>
                }
            </div>
        </>
    );
};

export default CheckOutForm;