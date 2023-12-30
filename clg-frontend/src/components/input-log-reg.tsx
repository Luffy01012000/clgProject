import React, { FormEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
// I will test later server rendering 

const InputLogReg = () => {
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
  const [passStrength, setPassStrength] = useState({
    passNum: false,
    passUpp: false,
    passLow: false,
    spChar: false,
    minChar: false,
  });
  return (
    <>

    </>
  )
}

export default InputLogReg;