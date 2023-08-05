import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../hooks/useCart";
import SectionTitle from "../../components/SectionTitle";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    const [cart] = useCart();
    // console.log(cart)
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    // console.log(total)
    return (
        <div>
            <SectionTitle title="please process the" subTitle="Payment" />
            <div className="lg:mx-40 m-auto lg:px-20">
                <Elements stripe={stripePromise}>
                    <CheckOutForm cart={cart} price={total} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;