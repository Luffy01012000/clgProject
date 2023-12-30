import { config } from "dotenv";
// import connectDB from './db/index';
import { app } from "./app";
config({
  path: "/.env",
});

app.on("error", (error) => console.log("error:", error));
app.listen(process.env.PORT || 8002, () => {
// app.listen(parseInt(process.env.PORT as string,10) || 8002, () => {
  // console.log(typeof parseInt(process.env.PORT as string,4));
  
  console.log(
    `🚀🚀 server is running⚙️⚙️ at http://localhost:${process.env.PORT || 8002}`
  );
});
