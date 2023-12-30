import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import type { Request, Response } from "express";
// import client from "prom-client";
//config
const app = express();
app.use(
  cors({
    // origin: process.env.CORS_ORIGIN,
    origin: "*",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.json({
    limit: "16kb", //limiting the incoming data from client
  })
);
app.use(
  express.urlencoded({
    // filter the urlencoded data
    extended: true, // it is used to extend object inside object.
    limit: "16kb",
  })
);
app.use(express.static("public"));
app.use(cookieParser());

// const collectDefaultMetrics = client.collectDefaultMetrics;
// collectDefaultMetrics({ register: client.register });

//middleware

//routes import
import userRouter from "./routes/user.route";
import metricRouter from "./routes/metrics.route";

//routes declaration
app.use("/api/v1/users", userRouter);
app.get("/", (req: Request, res: Response) => {
  // res.send("v4 bookworm added promethes loki");
  res.send("v5 alpine added promethes loki");
});
app.use("/metrics", metricRouter);
// app.get("/metrics",async(req:Request,res:Response)=>{
//     res.setHeader("Content-Type", client.register.contentType);
//     const metrics = await client.register.metrics();
//     res.send(metrics);
// });

export { app };
