import Login from "@/components/log-reg";
import axios from "axios";

// interface NextProps {}

const auth = () => {
  // const checkLogin = async (e:Event) => {
  //   e.preventDefault()

  //   const res:any = await axios
  //     .post(
  //       "http://localhost:8001/api/v1/users/login",
  //       {
  //         username: loginUserDetail.username,
  //         password: loginUserDetail.password,
  //       },
  //       // loginUserDetail,
  //       {
  //         headers: {
  //           "Content-Type": " application/x-www-form-urlencoded",
  //         },
  //       }
  //     )
  //     .catch((err: any) => console.log(err));

  //     // console.log(res);
  //     console.log(JSON.parse("res:",res))
  //     console.log(JSON.parse("res.data:",res.data))
  //     console.log(JSON.parse("res.data.token:",res.data.token))
  //     // const cookie:any = res.data.cookies.split("=")[1];
  //     // console.log(cookie);
  //     // setCookie("uid",cookie)
  //     // ("uid",cookies);
  //   };
  
  return (
    <>
      <Login />
    </>
  );
};

export default auth
