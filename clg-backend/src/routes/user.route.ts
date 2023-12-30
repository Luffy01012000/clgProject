import { Router } from "express";
import {
  registerUser,
  getall,
  verifyMail,
  loginUser,
} from "../controllers/user.controller";
import { ticketPayment,paymentIntent } from "../controllers/payment.controller";

import jwtTokenVerify from "../middlewares/jwtVerify.middleware";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// router.route("/getall").post((req,res)=>res.send("register route"));

router.route("/verify/:token").get(verifyMail);

router.route("/payment").post(ticketPayment);
router.route("/create-payment-intent").post(paymentIntent);

router.route("/?canceled=true").get((req,res)=>{
  res.send(req.header);
});

router.route("/getall").post(jwtTokenVerify, getall);

export default router;
