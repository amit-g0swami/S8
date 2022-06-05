import React from "react";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../../base";
import {useSnackbar} from "notistack";
import axios from "axios";
import {MdContentCopy} from "react-icons/md";

const Referpage = () => {
  const [user, setUser] = React.useState({});
  const [referralCode, setReferralCode] = React.useState(null);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const redeemCode = async () => {
    const token = localStorage.getItem("token");
    await axios
      .patch(
        BASE_URL + "/auth/refer",
        {
          referal_code: referralCode?.toUpperCase(),
        },
        {headers: {Authorization: "Token " + token}}
      )
      .then(async (res) => {
        if (res.status === 404) {
          return enqueueSnackbar("Token not found", {variant: "error"});
        } else if (res.status === 406) {
          return enqueueSnackbar("Coupon already redeemed", {variant: "error"});
        }

        if (res.data.success) {
          enqueueSnackbar("Remeeded Success", {variant: "success"});
          await axios
            .get(BASE_URL + "/auth/details", {
              headers: {
                Authorization: "Token " + token,
              },
            })
            .then((res) => {
              localStorage.removeItem("user");
              localStorage.setItem("user", JSON.stringify(res.data));
              window.location.reload();
            });
        }
      });
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        navigate("/login");
      }
      setUser(user);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex h-full w-3/4 mt-4 flex-col">
      <div className="flex flex-col h-3/5 font-worksans w-full">
        <div className="flex justify-center items-center p-5 font-bold text-2xl">
          Refer and Earn
        </div>
        <div className="flex p-5 justify-center">
          <img className="flex h-60" src={require("../../assets/mic.png")} />
        </div>
        {user?.refered_by ? null : (
          <div className="flex p-5 justify-center">
            <div className="flex h-16 w-3/5 rounded-xl border-2 border-[#FCB512]">
              <input
                type="text"
                placeholder="ENTER REFER CODE"
                className="flex pl-4 rounded-xl h-full w-full"
                onChange={(e) => setReferralCode(e.target.value)}
              />
              <button
                onClick={redeemCode}
                className="flex w-32 rounded-r-xl items-center justify-center bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
                Apply
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col p-5 h-56 items-center w-full border-b-2">
          <div className="flex font-bold p-1 text-lg">Total points Earned</div>
          <div className="flex font-bold text-5xl text-[#FCB512]">
            {user?.earned_points}
          </div>
        </div>
      </div>
      <div className="flex flex-1 w-full flex-col h-56">
        <div className="flex h-32 w-full items-center justify-center">
          <div className="flex rounded-xl mt-20 h-32 w-3/5 border-dashed border-[#FCB512] border-2 md:mt-40">
            <div className="flex flex-1 items-center justify-center h-26 flex-col border-r border-[#FCB512] ">
              <p>Your referral Code</p>
              <h1 className="flex font-bold justify-center items-center text-[#FCB512] text-5xl">
                {user?.referal_code}
              </h1>
            </div>
            <div className="flex items-center p-4">
              <MdContentCopy style={{color: "#FCB512"}} size="30" />
            </div>
          </div>
        </div>
        <div className="flex mt-20 w-full items-center justify-center flex-1 md:mt-32">
          <button className="flex rounded-xl font-bold text-lg items-center justify-center h-20 w-3/5 bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
            <p>Share referral code</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Referpage;
