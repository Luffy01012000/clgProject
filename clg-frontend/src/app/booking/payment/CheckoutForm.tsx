import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import toast, { Toaster } from "react-hot-toast";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState<string | undefined>("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }: any) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");

            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
      redirect: "if_required",
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    }else if(paymentIntent&&paymentIntent?.status==="succeeded"){
        toast.success("payment"+paymentIntent.status)
    }else if(paymentIntent&&paymentIntent.status==="canceled"){
        toast.error(paymentIntent.status)
    }
     else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  //   const paymentElementOptions = {
  const StripePaymentElementOptions = {
    // layout:"tabs"
  };

  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              fontWeight: "bold",
            },
          },
          error: {
            style: {
              background: "red",
              color: "#fff",
            },
          },
        }}
      />
      <form id="payment-form" onSubmit={handleSubmit}>
        {/* <PaymentElement id="payment-element" options={paymentElementOptions} /> */}
        <PaymentElement
          id="payment-element"
          options={StripePaymentElementOptions}
        />
        <div className="text-white flex items-center justify-center mt-10">
          <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            className="bg-blue-500 p-2 rounded-lg"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner">Processing...</div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
        </div>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
}
