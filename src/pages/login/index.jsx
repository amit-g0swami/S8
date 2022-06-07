import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setType, setResult, setPhNumber } from "../../context/login";
import { GrFormClose } from "react-icons/gr";
import { firebase, auth } from "../../firebase";

const LoginPage = () => {
  const ph_number = useSelector((state) => state.login.ph_number);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(setType("login"));
  }, []);

  const signInWithPhoneNumber = () => {
    if (ph_number === "" || ph_number.length < 10) return;
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber("+91" + ph_number, verify)
      .then((result) => {
        dispatch(setResult(result));
        navigate("/verify");
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };
  const register = () => {
    dispatch(setType("register"));
    signInWithPhoneNumber();
  };

  return (
    <div className="flex w-full h-full font-worksans flex-col">
      <div className="flex mt-16 items-center flex-col w-full">
        {/* <AiOutlineLeft
        onClick={() => navigate("/")}
        className="justify-start w-full"
      /> */}
        <div className="flex flex-col">
          <h1 className="flex justify-center font-bold p-2 text-4xl text-[#000000]">
            LOGIN NOW
          </h1>
          <div className="flex pt-4 w-full items-center ">
            <p className="flex pl-5 pb-10 text-lg font-medium p-2">
              We will send OTP to your phone number
            </p>
          </div>
        </div>
        <div className="flex">
          <img className="h-80" src={require("../../assets/art.png")} />
        </div>
      </div>
      <div className="flex flex-col h-2/4 w-full">
        <div className="flex flex-col h-56 items-center justify-center">
          <div className="flex h-10 rounded-xl">
            <div className="flex h-16 justify-center items-center w-16 rounded-l-xl font-bold border">
              +91
            </div>
            <input
              type="number"
              className="border h-16 w-96 px-2"
              placeholder="Enter Mobile Number"
              value={ph_number}
              onChange={(e) => dispatch(setPhNumber(e.target.value))}
            />
            <GrFormClose size={30} className="flex border rounded-r-xl h-16" />
          </div>
          <div id="recaptcha-container"></div>
        </div>
        <div className="flex flex-col h-56  items-center justify-around w-full">
          <button
            onClick={signInWithPhoneNumber}
            className="flex w-96 h-12 justify-center items-center bg-gradient-to-r from-[#FFD36F] to-[#F1AD10] rounded-lg font-medium text-md">
            Send OTP
          </button>
          <div className="flex w-80 h-12 items-center my-10 justify-center border-b">
            OR NEW HERE?
          </div>
          <div className="flex w-96 mb-5 h-10 items-center justify-center rounded-lg border-2 border-[#FCB512] text-[#FCB512] font-medium text-md" name="register" onClick={register} style={{ cursor: 'pointer' }}>
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
