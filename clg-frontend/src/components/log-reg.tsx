"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/login-reg.module.css";
import {signIn, useSession} from "next-auth/react"
import { FcGoogle } from "react-icons/fc";
// interface FormProps {
//   onSubmit: (loginUserDetail:{username:string;
//     password:string}) => void;
// }

// const Login: React.FC<FormProps> = ({onSubmit}) => {
const Login:React.FC = () => {
  //goggle
  const session = useSession();
  console.log(session);
  
  //Hooks *************---------------
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["uid"]);
  const [toggler, setToggler] = useState("login");
  const [loginUserDetail, setLoginUserDetail] = useState({
    username: "",
    password: "",
  });
  const [regUserDetail, setRegUserDetail] = useState({
    username: "",
    email: "",
    password: "",
  });

  //Checking for password Strength
  const [passStrength, setPassStrength] = useState({
    passNum: false,
    passUpp: false,
    passLow: false,
    spChar: false,
    minChar: false,
  });

  const checkPassIsStrong = async () => {
    switch (true) {
      case passStrength.minChar === true:
      case passStrength.passLow === true:
      case passStrength.passNum === true:
      case passStrength.passUpp === true:
      case passStrength.spChar === true:
        return true;
      default:
        return undefined;
    }
    //   disabled={(passStrength.minChar===true&&passStrength.passUpp===true&&passStrength.passLow===true&&passStrength.spChar===true&&passStrength.passNum===true)?false:true}
  };

  // Handling input fields-------------------**********
  const loginHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUserDetail({ ...loginUserDetail, [e.target.name]: e.target.value });
  };
  const regHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegUserDetail({ ...regUserDetail, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const hasMinChar = regUserDetail.password.length > 8;

    const passNum = hasNumber.test(regUserDetail.password);
    const passUpp = hasUpperCase.test(regUserDetail.password);
    const passLow = hasLowerCase.test(regUserDetail.password);
    const spChar = hasSpChar.test(regUserDetail.password);

    setPassStrength({
      passNum,
      passUpp,
      passLow,
      spChar,
      minChar: hasMinChar,
    });
  }, [regUserDetail.password]);

  /* Login user ---------------------------------*/
  // const checkLogin = async (e:React.FormEvent<HTMLFormElement>)=>{
  //   e.preventDefault();
  //   onSubmit(loginUserDetail)
  // }

  const checkLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      toast.loading("Processing...");
      const res: any = await axios({
        method: "post",
        url: "http://localhost:8001/api/v1/users/login",
        headers: {
          "Content-Type": " application/json",
        },
        data: JSON.stringify(loginUserDetail),
      })
        // const res: any = await axios.post("http://localhost:8001/api/v1/users/login", {
        //     headers: {
        //       "Content-Type": " application/json",
        //     },
        //     data: JSON.stringify(loginUserDetail)
        //   })
        .catch((err: any) => console.log({ error: err }));
      // toast.promise(res, {
      //   loading: "Processing...",
      //   success: "Logged In Successfully!",
      //   error: "Error when fetching",
      // });

      // console.log("res", ta);
      // console.log("res.data:", res.data);
      // setCookie("uid", res.data.data);
      // if(ta){
      // }
      toast.dismiss();
      setCookie("uid", res.data.data);
      toast.success("Login Successfull!", {
        duration: 4000,
      });
      if (cookies.uid) {
        router.push("/home");
      }
    } catch (err) {
      console.log("error", err);
    }
    // ("uid",cookies);
  };

  /*******************  registering user ********************/
  const regUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // let tid=undefined;
    try {
      //  tid = toast.loading('Processing...')
      const res = axios({
        // const res = await axios({
        method: "post",
        url: "http://localhost:8001/api/v1/users/register",
        data: regUserDetail,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      // .catch((err: any) => console.log(err));
      toast.promise(
        res,
        {
          loading: "Loading...",
          success: (data) => `Successfully Registered`,
          error: (err) => `This just happened: ${err.toString()}`,
        },
        {
          style: {
            minWidth: "150px",
          },
          success: {
            duration: 5000,
            icon: "🔥",
          },
          error: {
            duration: 3000,
          },
          id: "reg",
        }
      );
      
    } catch (err) {
      // toast.dismiss(tid)
      // toast.error(err);
    }
  };

  // toast.custom((t)=>(
  //   <div
  //     className={`${
  //       t.visible ? 'animate-enter' : 'animate-leave'
  //     } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  //   >
  //     <div className="flex-1 w-0 p-4">
  //       <div className="flex items-start">
  //         <div className="flex-shrink-0 pt-0.5">
  //           <img
  //             className="h-10 w-10 rounded-full"
  //             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
  //             alt=""
  //           />
  //         </div>
  //         <div className="ml-3 flex-1">
  //           <p className="text-sm font-medium text-gray-900">
  //             Emilia Gates
  //           </p>
  //           <p className="mt-1 text-sm text-gray-500">
  //             Sure! 8:30pm works great!
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex border-l border-gray-200">
  //       <button
  //         onClick={() => toast.dismiss(t.id)}
  //         className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //       >
  //         Close
  //       </button>
  //     </div>
  //   </div>
  // ))

  return (
    <>
      <section
        style={{
          width: "100%",
          height: "100vh",
          minHeight: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#111",
          fontFamily: "'roboto' sans-serif",
        }}
      >
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "green",
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
        <div
          className={styles.formParent}
          style={{
            width: "850px",
            height: "600px",
            background: "#171717",
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.75)",
          }}
        >
          <div
            className={styles.signUpImg}
            style={{
              position: "absolute",
              width: "50%",
              height: "100%",
              background: "url(/img/download.png)",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className={styles.signInImg}
            style={{
              position: "absolute",
              width: "50%",
              height: "100%",
              left: "50%",
              background: "url(/img/movieTheatre.jpg)",
              backgroundSize: "cover",
            }}
          ></div>

          <div
            className={styles.formContainer}
            style={
              toggler === "login"
                ? {
                    position: "relative",
                    width: "50%",
                    minWidth: "300px",
                    height: "100%",
                    background: "#171717",
                    transition: "1s",
                    left: "0%",
                    display: "grid",
                    overflow: "hidden",
                    gridTemplateColumns: "repeat(2, calc(800px/2))",
                  }
                : {
                    position: "relative",
                    width: "50%",
                    minWidth: "300px",
                    height: "100%",
                    background: "#171717",
                    transition: "1s",
                    left: "50%",
                    display: "grid",
                    overflow: "hidden",
                    gridTemplateColumns: "repeat(2, calc(800px/2))",
                  }
            }
          >
            <div
              className="form"
              id="sign-in-form"
              style={
                toggler === "login"
                  ? {
                      marginLeft: "-11%",
                      width: "100%",
                      height: "100%",
                      padding: "96px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "column",
                      transition: "1s",
                    }
                  : {
                      marginLeft: "-150%",
                      width: "100%",
                      height: "100%",
                      padding: "40px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "column",
                      transition: "1s",
                    }
              }
            >
              <h1
                className="title"
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "60px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  color: "#fff",
                }}
              >
                sign in
              </h1>
              <div
                className="fields"
                style={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <button className="bg-white p-2 rounded-md flex justify-center" onClick={()=>signIn("google")}>
               <FcGoogle className="text-lg"/> 
               </button>
               <h2 className="text-white mt-2 mb-2 active:scale-95">OR</h2>
                <form onSubmit={checkLogin}>
                  <input
                    type="text"
                    className="placeholder-[#3f3f3f]"
                    style={{
                      display: "block",
                      width: "100%",
                      marginBottom: "30px",
                      padding: "5px 10px",
                      // textTransform: "capitalize",
                      border: "none",
                      borderRadius: "5px",
                      height: "30px",
                      background: "#0d0d0d",
                      color: "#fff",
                    }}
                    placeholder="username"
                    // onChange={(e) =>
                    //   setLoginUserDetail({
                    //     ...loginUserDetail,
                    //     username: e.target.value,
                    //   })
                    // }
                    name="username"
                    value={loginUserDetail.username}
                    onChange={loginHandle}
                    required
                  />
                  <input
                    type="password"
                    className="placeholder-[#3f3f3f]"
                    style={{
                      display: "block",
                      width: "100%",
                      marginBottom: "30px",
                      padding: "5px 10px",
                      // textTransform: "capitalize",
                      border: "none",
                      borderRadius: "5px",
                      height: "30px",
                      background: "#0d0d0d",
                      color: "#fff",
                    }}
                    placeholder="password"
                    name="password"
                    value={loginUserDetail.password}
                    onChange={loginHandle}
                    required
                  />

                  <div
                    className="submit-container"
                    style={{
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <button
                      type="submit"
                      className="btn text-[#3f3f3f] hover:bg-[#000] hover:text-white active:scale-95 "
                      style={{
                        // color: "#fff",
                        background: "#0d0d0d",
                        border: "none",
                        padding: "10px 40px",
                        fontSize: "15px",
                        textTransform: "capitalize",
                        display: "block",
                        margin: "auto",
                        // color: "#3f3f3f",
                        cursor: "pointer",
                        borderRadius: "10px",
                        marginBottom: "20px",
                        transition: ".5s",
                      }}
                      // onClick={await checkPassIsStrong()}
                      // disabled={checkPassIsStrong()
                    >
                      sign in
                    </button>
                    <p
                      className="link text-[#3f3f3f] hover:text-white"
                      style={{
                        textAlign: "center",
                        // color: "#3f3f3f",
                        textTransform: "capitalize",
                        textDecoration: "underline",
                        cursor: "pointer",
                        transition: ".5s",
                      }}
                      onClick={() => setToggler("register")}
                    >
                      new here ? sign up here
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="form"
              id="sign-up-form"
              style={
                toggler === "login"
                  ? {
                      width: "100%",
                      height: "100%",
                      padding: "40px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "column",
                      transition: "1s",
                      marginLeft: "50%",
                    }
                  : {
                      width: "100%",
                      height: "100%",
                      padding: "0px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "column",
                      transition: "1s",
                      marginLeft: "-100%",
                    }
              }
            >
              <h1
                className="title"
                style={{
                  marginBottom: "30px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "60px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  color: "#fff",
                }}
              >
                sign up
              </h1>
              <div
                className="fields"
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                <form onSubmit={regUser}>
                  <input
                    type="text"
                    className="placeholder-[#3f3f3f]"
                    style={{
                      display: "block",
                      width: "100%",
                      marginBottom: "30px",
                      padding: "5px 10px",
                      // textTransform: "capitalize",
                      border: "none",
                      borderRadius: "5px",
                      height: "30px",
                      background: "#0d0d0d",
                      color: "#fff",
                    }}
                    placeholder="username"
                    onChange={(e) =>
                      setRegUserDetail({
                        ...regUserDetail,
                        username: e.target.value,
                      })
                    }
                    required
                  />
                  {/* <input type="date" className="text-[#3f3f3f]"
                    style={{
                      display: "block",
                      width: "100%",
                      marginBottom: "30px",
                      padding: "5px 10px",
                      textTransform: "capitalize",
                      border: "none",
                      borderRadius: "5px",
                      height: "30px",
                      background: "#0d0d0d",
                      color: "#fff",
                    }}  required /> */}
                  {/* <!-- <input type="tel" placeholder="" required/> --> */}
                  <input
                    type="email"
                    className="placeholder-[#3f3f3f]"
                    style={{
                      display: "block",
                      width: "100%",
                      marginBottom: "30px",
                      padding: "5px 10px",
                      // textTransform: "capitalize",
                      border: "none",
                      borderRadius: "5px",
                      height: "30px",
                      background: "#0d0d0d",
                      color: "#fff",
                    }}
                    placeholder="email"
                    onChange={(e) =>
                      setRegUserDetail({
                        ...regUserDetail,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                  <input
                    type="password"
                    className="placeholder-[#3f3f3f]"
                    style={{
                      display: "block",
                      width: "100%",
                      marginBottom: "30px",
                      padding: "5px 10px",
                      // textTransform: "capitalize",
                      border: "none",
                      borderRadius: "5px",
                      height: "30px",
                      background: "#0d0d0d",
                      color: "#fff",
                    }}
                    placeholder="password"
                    onChange={(e) =>
                      setRegUserDetail({
                        ...regUserDetail,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="passValidation  text-center font-semibold">
                    <p
                      className={
                        passStrength.minChar
                          ? "text-[#8ad86bee]"
                          : "text-[#3f3f3f]"
                      }
                    >
                      Min 8 Character
                    </p>
                    <p
                      className={
                        passStrength.passUpp
                          ? "text-[#8ad86bee]"
                          : "text-[#3f3f3f]"
                      }
                    >
                      At least one Upper Case
                    </p>
                    <p
                      className={
                        passStrength.passLow
                          ? "text-[#8ad86bee]"
                          : "text-[#3f3f3f]"
                      }
                    >
                      At least one Lower Case
                    </p>
                    <p
                      className={
                        passStrength.spChar
                          ? "text-[#8ad86bee]"
                          : "text-[#3f3f3f]"
                      }
                    >
                      At least one Specail Char
                    </p>
                    <p
                      className={
                        passStrength.passNum
                          ? "text-[#8ad86bee]"
                          : "text-[#3f3f3f]"
                      }
                    >
                      At least one Numberic value
                    </p>
                  </div>
                  <div
                    className="submit-container"
                    style={{
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <button
                      type="submit"
                      className="btn text-[#3f3f3f] hover:bg-[#000] hover:text-white active:scale-95"
                      style={{
                        // color: "#fff",
                        background: "#0d0d0d",
                        border: "none",
                        padding: "10px 40px",
                        fontSize: "15px",
                        textTransform: "capitalize",
                        display: "block",
                        margin: "auto",
                        // color: "#3f3f3f",
                        cursor: "pointer",
                        borderRadius: "10px",
                        marginBottom: "20px",
                        transition: ".5s",
                      }}
                    >
                      sign up
                    </button>
                    <p
                      className="link text-[#3f3f3f] hover:text-white"
                      style={{
                        textAlign: "center",
                        // color: "#3f3f3f",
                        textTransform: "capitalize",
                        textDecoration: "underline",
                        cursor: "pointer",
                        transition: ".5s",
                      }}
                      onClick={() => setToggler("login")}
                    >
                      already have an account ? sign in here
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
