"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

import {
  Elements,
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

import CheckoutForm from "@/app/booking/payment/CheckoutForm";
import { FaRupeeSign } from "react-icons/fa6";
// import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function App() {
  // Redux state
  // const movie = useSelector((state: RootState) => state.booking.movie);
  const movie = useAppSelector((state) => state.booking.movie);
  const cinema = useAppSelector((state) => state.booking.cinema);
  const date = useAppSelector((state) => state.booking.date);
  const time = useAppSelector((state) => state.booking.time);
  const selectedSeats = useAppSelector((state) => state.booking.selectedSeats);
  const totalPrice = useAppSelector((state) => state.booking.totalPrice);

  const [clientSecret, setClientSecret] = React.useState("");
  // console.log("useSearchParams:",useSearchParams)
  // const searchParams = useSearchParams()
  // console.log("searchParams:",searchParams)
  // const price = searchParams.get('amount')
  // const movie = searchParams.get('movie')

  console.log("movie:", movie);
  console.log("price:", totalPrice);
  console.log("day:", date?.day);
  console.log("selectedSeats:", selectedSeats[0]?.id);
  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const res = fetch("http://localhost:8001/api/v1/users/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ amount: totalPrice }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
      
  }, [totalPrice]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    // appearance,
  };

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <>
      <div className="App flex flex-col lg:flex-row  h-screen w-full items-start p-5 justify-between pt-10">
        <div className="leftContainer flex flex-col w-full lg:w-[68%] h-[90vh] items-center justify-start bg-[#F2F2F2] text-xl shadow-lg rounded-md shadow-slate-400">
          <Accordion
            type="single"
            collapsible
            className={
              toggle1 === true
                ? "bg-[#F84464] w-full font-semibold rounded-md"
                : "rounded-md bg-[#F2F2F2] font-semibold w-full"
            }
            onClick={() => setToggle1(!toggle1)}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                className={
                  toggle1 === true ? "text-white pl-3" : "pl-3 text-black"
                }
              >
                Share your contact details
              </AccordionTrigger>
              <AccordionContent className="bg-white p-8">
                <div className="mob flex gap-4">
                  <input
                    className="border p-3 text-xl text-center rounded-md"
                    type="text"
                    value="test@test.com"
                    disabled
                  />
                  <input
                    className="border p-3 text-xl text-center rounded-md"
                    type="tel"
                    placeholder="9797982390"
                    required
                  />
                  <button className="p-3 bg-[#F84464] rounded-lg text-white text-lg px-10 text-center">
                    continue
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className={
              toggle2 === true
                ? "bg-[#F84464] w-full font-semibold rounded-md"
                : "rounded-md bg-[#F2F2F2] font-semibold w-full"
            }
            onClick={() => setToggle2(!toggle2)}
          >
            <AccordionItem value="item-2">
              <AccordionTrigger
                className={
                  toggle2 === true ? "text-white pl-3" : "pl-3 text-black"
                }
              >
                Get exciting offers or Apply Promocodes
              </AccordionTrigger>
              <AccordionContent className="bg-white p-2">
                <div className="Container">
                  <div className="nav flex items-center justify-start font-bold text-xl">
                    <h1>offer code</h1>
                  </div>
                  <div className="main flex flex-col items-center text-xl font-bold">
                    <h1>Apply for Movieflex Offer/Discount</h1>
                    <div className="flex gap-5 mt-8 mb-9">
                      <input
                        type="text"
                        className="border-2 rounded-md"
                        required
                      />
                      <button className="bg-[#F84464] rounded-lg text-white text-lg px-10 text-center p-3">
                        Check
                      </button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className={
              toggle3 === true
                ? "bg-[#F84464] w-full font-semibold"
                : "bg-[#F2F2F2] font-semibold w-full"
            }
            onClick={() => setToggle3(!toggle3)}
          >
            <AccordionItem value="item-3">
              <AccordionTrigger
                className={
                  toggle3 === true ? "text-white pl-3" : "pl-3 text-black"
                }
              >
                Payment
              </AccordionTrigger>
              <AccordionContent className="bg-white p-2 text-xl font-semibold text-center">
                <h1>Enter your Card details</h1>
                {stripePromise && clientSecret && (
                  <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="rightContainer relative w-full lg:w-[28%] h-[90vh] flex justify-center items-start shadow-lg shadow-slate-400 bg-[#FFFBF5] rounded-lg">
          <div className="ordersummery ">
            <div className="top flex justify-between items-center">
              <h1 className="mt-5 text-gray-500 tracking-wider text-4xl font-semibold">
                Order Summery
              </h1>
              <div>
                {selectedSeats && <h2>{selectedSeats.length}</h2>}
                <h2>tickets</h2>
              </div>
            </div>
            <h2 className=" mt-8 text-4xl font-semibold tracking-widest capitalize">
              {movie}
            </h2>
            <h2 className="mt-3 text-xl tracking-wider">
             {cinema}
            </h2>
            <div className="dateContainer flex flex-col gap-1 mt-8 text-xl font-semibold">
            <div className="flex gap-3 text-lg">
              {selectedSeats &&
                selectedSeats.map((val) => <h2 key={val.id}>{val.id}</h2>)}
              </div>  
              <div className="flex">
              <h2>{date?.week},</h2>
              <h2>{date?.day},</h2>
              <h2>{date?.month}</h2>
              </div>
            </div>
            <h2 className="text-lg font-semibold">{time}</h2>
            <div className="w-full bg-purple-300 rounded-md px-9 lg:px-36 text-center py-2 mt-6">
              <p className=" flex gap-4 items-center justify-between w-full">
                <h2 className="text-xl text-start font-semibold tracking-wider">
                  Amount Payable:
                </h2>
                <span className="flex items-center justify-center gap-4">
                  <FaRupeeSign />
                  <p>{totalPrice}</p>
                </span>
              </p>
            </div>
            {/* <h2>{date
        // ((val)=>{
        //   <h3>val</h3>
        // })
      }
        </h2> */}
          </div>
        </div>
        {/* {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )} */}
      </div>
    </>
  );
}
