import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.utils";
import ApiResponse from "../utils/ApiResponse.utils";
import { sendBookedMail } from "../utils/sendMail.utils";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const ticketPayment = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const {bookData} = req.body;
      // const bookData:any = {
      //   seatData: {
      //     Sno: ["c-8", "c-9"],
      //     tickets: 3,
      //     amt: 600
      //   },
      //   movieData: {
      //     movieName: "leo",
      //   },
      //   foodData: {
      //     item: [
      //       {
      //         name: "pepsi",
      //         qty: 2,
      //       },
      //       {
      //         name: "sandwich",
      //         qty: 1,
      //       },
      //     ],
      //     amt: 300
      //   },
      // };

      const lineItems = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "leo",
              description: "fkasdjl",
              // qty: 4,
            },
            //   seat_Data:{
            //     tickets: 3
            //   },
            unit_amount: 10 * 100,
            //   quantity: bookData.qty,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "pepsi",
              description: "fkasdjl",
              // qty: 4,
            },
            //   seat_Data:{
            //     tickets: 3
            //   },
            unit_amount: 10 * 100,
            //   quantity: bookData.qty,
          },
          quantity: 2,
        },
      ];

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        // payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:8001/",
        cancel_url: `http://localhost:8001/api/v1/users?canceled=true`,
      });
      console.log(session);

      //   res.redirect(303, session.url);
      res.status(201).json(new ApiResponse(200, session, "payment done!"));
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
);

// This is your test secret API key.

const calculateOrderAmount = (amount:number) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return amount*100;
};

const paymentIntent= asyncHandler(async (req:Request, res:Response) => {
  const { items } = req.body;
console.log(items[0]?.amount);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items[0]?.amount),
    currency: "inr",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
    //   allow_redirects: "never",
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
  sendBookedMail("rutvik@test.com","leo",calculateOrderAmount(items[0]?.amount)).catch(err=>console.log(err)
  )
});


export { ticketPayment ,paymentIntent };
