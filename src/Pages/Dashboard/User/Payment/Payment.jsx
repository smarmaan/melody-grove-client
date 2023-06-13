import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";
import useBookedCart from "../../../../Hooks/useBookedCart";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_TOKEN);

const Payment = () => {
  const [bookedCart] = useBookedCart();
  const id = useParams();
  console.log(bookedCart);
  const cart = bookedCart.find((item) => item._id === id.id);
  const price = cart?.price;
  console.log(cart);

  return (
    <div className="mt-28 w-1/2">
      <div className="my-24 w-full h-1/2 bg-[url('https://img.freepik.com/free-vector/royal-blue-with-sparkles-light-effect_1017-29828.jpg?w=996&t=st=1686579352~exp=1686579952~hmac=41084f8959384467c732e8a456ebc8a2670fc8879b751eed572094748f849b1d')]  px-5 py-7 rounded-3xl bg-cover">
        <Elements stripe={stripePromise}>
          <CheckoutForm id={id} price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
