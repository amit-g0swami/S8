import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../../base";
import {
  setOtp,
  setType,
  setIsAuthenticated,
  setToken,
} from "../../context/login";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyPage = () => {
  const { result, otp, ph_number, type, name } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const ValidateOtp = () => {
    console.log(result, otp);
    if (otp === null || result === null) return;
    result.confirm(otp).then(async (result) => {
      // success
      if (type == "register") {
        console.log("hello")
        await axios
          .post(BASE_URL + "/auth/register", {
            ph_number: "+91" + ph_number,
            password: result.user.multiFactor.user.uid,
            name: name,
            username: name.replace(" ", "_") + String(ph_number).slice(0, 5),
          }).then((res) => {
            if (res.data.success) {
              localStorage.setItem("user", JSON.stringify(res.data.data));
              localStorage.setItem("token", res.data.token);
              setIsAuthenticated(true);
              setToken(res.data.token);
              enqueueSnackbar("Registered Successfully!", {
                variant: "success",
              });
              navigate("/");
              dispatch(setType("login"));
              console.log("Registered Successfully!");
            } else {
              const errors = res.data.error;
              let keys = Object(errors).keys();
              console.log(keys);
              for (let key of keys) {
                enqueueSnackbar(errors[key][0], { variant: "error" });
              }
            }
          });
      } else {
        await axios
          .post(BASE_URL + "/auth/user/login", {
            ph_number: "+91" + ph_number,
            password: result.user.multiFactor.user.uid,
          }).then((res) => {
            if (res.data.success) {
              localStorage.setItem("user", JSON.stringify(res.data.user));
              localStorage.setItem("token", res.data.token);
              setIsAuthenticated(true);
              setToken(res.data.token);
              enqueueSnackbar("Login is successful", { variant: "success" });
              navigate("/");
            } else {
              enqueueSnackbar(res.data.error, { variant: "error" });
            }
          });
      }
    })
      .catch((err) => {
        enqueueSnackbar("Wrong OTP", { variant: "error" });
      });
  };

  return (
    <div className="w-full h-full font-worksans flex-col">
      <div className="flex mt-16 items-center flex-col w-full">
        <div className="flex items-center flex-col">
          <h1 className="flex justify-center font-bold p-2 text-4xl text-[#FCB512]">
            VERIFY NOW
          </h1>
          <p className="flex w-3/4 pl-10 pb-10 text-lg font-medium p-2">
            Please enter the OTP that we have sent to your phone number ending
            with *****
            {String(ph_number).slice(5, 9)}
          </p>
        </div>
        <div className="flex">
          <img className="h-80" src={require("../../assets/art.png")} />
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex w-3/5 drop-shadow-lg justify-around">
          <input
            onChange={(e) => dispatch(setOtp(e.target.value))}
            type="number"
            placeholder="OTP"
            className="border p-5 w-80 mt-10 tracking-widest rounded-lg"
          />
        </div>
        <div className="flex my-6 justify-end w-3/5">
          {/* <div className="flex">
          Resend Code in&nbsp; <p className="font-bold">2:43</p>
        </div> */}
        </div>
        <button
          onClick={ValidateOtp}
          className="flex my-5 w-80 h-16 justify-center items-center font-bold rounded-xl bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
          Verify Now
        </button>
      </div>
    </div>
  );
};

export default VerifyPage;
