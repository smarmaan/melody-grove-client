import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useBookedCart from "../../../../Hooks/useBookedCart";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ cart, id, price }) => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [, refetch] = useBookedCart();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [axiosSecure] = useAxiosSecure();

  const coursePurchasedID = id.id;
  // const cart = bookedCart;
  console.log(cart);
  // console.log(coursePurchasedID);
  const navigate = useNavigate();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("paymentMethod", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        coursePurchasedID,
        courseName: cart.courseName,
        name: user?.displayName,
        email: user?.email,
        image: cart.image,
        price,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);

        if (res.data.insertResult.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Transaction Successful",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/dashboard/booked-courses");
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#fafafae0] py-2 px-5 rounded-full">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#000000",
                  "::placeholder": {
                    color: "#0000008c",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          className="btn btn-xs bg-[#f7f6f6] hover:bg-[#837d7d] flex mx-auto my-5 text-black px-5 border-0"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>

      {cardError && (
        <p className="text-red-600  bg-white rounded-full text-center py-3">
          {cardError}
        </p>
      )}

      {transactionId && (
        <p className="text-black font-bold bg-white rounded-full text-center py-3">
          Transaction complete with transactionId:{" "}
          <span className="text-red-600"> &rdquo;{transactionId}&rdquo;</span>
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
