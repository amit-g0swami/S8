import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import TrendingView from "../../components/common/Trending";
import CategoryView from "../../components/common/Category";
import { getData, getTrendingData } from "../../apis";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData, setIsLoading } from "../../context/trending";

export default function Home() {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  // React.useEffect(
  //   () => async () => {
  //     // setIsLoading(true);
  //     const datas = await getData("sub_categories", setIsLoading);
  //     setItems(datas);
  //   },
  //   []
  // );
  useEffect(() => {
    const datas = async () => {
      await getData("sub_categories", setIsLoading);
      setItems(datas);
    }
    datas();
  }, [])


  // React.useEffect(
  //   () => async () => {
  //     dispatch(setIsLoading(true));
  //     const data = await getTrendingData("trending");
  //     dispatch(setData(data));
  //     dispatch(setIsLoading(false));
  //   },
  //   []
  // );
  useEffect(() => {
    const data = async () => {
      dispatch(setIsLoading(true));
      const data = await getTrendingData("trending");
      dispatch(setData(data));
      dispatch(setIsLoading(false));
    }
    data();
  }, [])

  return (
    <>
      <div className="flex bg-gradient-to-r from-[#fef6ed] to-[#fdd4ee] items-center lg:justify-center w-full lg:flex-row flex-col mb-20">
        <div className="flex flex-[.8] justify-center">
          {" "}
          <img
            className="w-full"
            width="100%"
            src={require("../../assets/top.png")}
          />
        </div>
        <div className="flex flex-col flex-1 p-10">
          <div className="flex lg:mt-28 font-bold text-4xl md:text-[4.3rem] lg:mb-10">
            <p className=" sm:leading-snug">
              One-Stop Solution <br className="hidden md:block" /> for your{" "}
              <span className="text-orange-600">Services</span>{" "}
            </p>
          </div>
          <div className="flex font-medium mb-10 mt-5 lg:mt-0 text-xl md:text-2xl">
            Order any service, anytime from anywhere
          </div>
          <div className="flex w-full justify-start mr-6 mb-12">
            <div className="flex">
              {" "}
              <div className="searchbox flex flex-1 w-full lg:w-[35rem]">
                <input
                  className="flex border p-4 px-6 text-sd rounded-l-xl h-20 w-full"
                  type="text"
                  placeholder="Search here"
                  name="search"
                />
                <button className="flex items-center justify-center bg-orange-600 w-24 h-20 rounded-r-xl">
                  <FiSearch size="24" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="flex  p-2 text-orange-600 overflow-x-auto">
              {/* Popular */}
            </div>
            {/* <div className="flex mx-2  flex-wrap">
              {items?.map((item) => (
                <Link
                  to={`/product/${item?.name}/${item?.scid}`}
                  className="flex mr-1 truncate my-1 h-10 items-center bg-white px-4 justify-center text-gray-400 rounded-lg">
                  {item?.name}
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <CategoryView name="Value Added Services" route={"sub_categories"} />

      <TrendingView name="Featured Services" route={"trending"} />

      <div className="flex w-full justify-center items-center">
        <div className="flex justify-center lg:h-3/5 flex-col lg:flex-row mb-20 w-[90%]">
          <div className="flex flex-1 ml-15 rounded-md flex-col justify-center items-center">
            <div className="flex w-full justify-start">
              <div className="flex font-bold pb-6 text-6xl">
                <p>Dedicated Support</p>
              </div>
            </div>
            <div className="flex w-full justify-start">
              <div className="flex pb-6 text-left w-full mr-5 pt-6">
                <p>
                  Your servers and customer inquiries will be managed by a
                  dedicated support team around the clock.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center w-full sm:justify-around items-center">
            <div className="flex flex-col sm:flex-row w-full items-center">
              <div className="flex box1 mt-2 flex-col w-80 h-80 sm:mr-8 rounded-lg bg-purple-100">
                <div className="flex w-20 h-20 mt-5 ml-auto mr-auto justify-center">
                  <img
                    className="flex rounded-full"
                    src="https://www.kindpng.com/picc/m/316-3165356_plumber-plumbing-tools-pipefitter-steamfitters-hd-png-download.png"
                    alt="hello"
                  />
                </div>
                <div className="flex font-bold pt-7 items-center justify-center text-xl">
                  Commitment to service
                </div>
                <div className="flex text-center pt-1 p-3 items-center justify-center">
                  We are committed to provide you best service in shortest
                  possible time.
                </div>
              </div>
              <div className="flex box1 mt-2 flex-col w-80 h-80 rounded-lg bg-blue-100">
                <div className="flex w-20 h-20 mt-5 ml-auto mr-auto justify-center">
                  <img
                    className="flex rounded-full"
                    src="https://cdn3.vectorstock.com/i/1000x1000/42/77/hand-holding-credit-card-in-flat-design-style-vector-18944277.jpg"
                    alt="hello"
                  />
                </div>
                <div className="flex font-bold pt-7 items-center justify-center text-xl">
                  Exceptional Experience
                </div>
                <div className="flex text-center pt-1 p-4 items-center justify-center">
                  With a team of experienced people, we look to provide you with
                  the best service.
                </div>
              </div>
            </div>
            <div className="flex mt-2 sm:mt-6 flex-col w-full items-center sm:flex-row">
              <div className="flex flex-col text-center box1 sm:mr-8 w-80 h-80 rounded-lg mt-2 bg-blue-100">
                <div className="flex w-20 h-20 sm:mt-5 ml-auto mr-auto justify-center">
                  <img
                    className="flex rounded-full"
                    src="https://cdn3.vectorstock.com/i/1000x1000/42/77/hand-holding-credit-card-in-flat-design-style-vector-18944277.jpg"
                    alt="hello"
                  />
                </div>
                <div className="flex font-bold pt-7 items-center justify-center text-xl">
                  Data and Payment Security
                </div>
                <div className="flex text-center pt-1 p-4 items-center justify-center">
                  We use protected payment gateways so that your payment and
                  data is safe and secured
                </div>
              </div>
              <div className="flex flex-col box1 w-80 h-80 rounded-lg mt-2 bg-purple-100">
                <div className="flex w-20 h-20 mt-5 ml-auto mr-auto justify-center">
                  <img
                    className="flex rounded-full"
                    src="https://www.kindpng.com/picc/m/316-3165356_plumber-plumbing-tools-pipefitter-steamfitters-hd-png-download.png"
                    alt="hello"
                  />
                </div>
                <div className="flex font-bold pt-7 items-center justify-center text-xl">
                  Help and Support
                </div>
                <div className="flex pt-1  text-center p-4 items-center justify-center">
                  24*7 Available for help and support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrendingView name="Trending Services" route={"trending"} />

      <div className="flex flex-col justify-center items-center w-full py-20 lg:py-40 overflow-x-hidden bg-gradient-to-r from-[#edfbfe] via-[#faf5fe] to-[#effafe] ">
        <div className="flex flex-col font-bold text-xl sm:text-4xl lg:text-5xl justify-center items-center w-full h-44">
          Join us to receive a better and
          <span className="flex mt-3">
            more convenient service from us
          </span>{" "}
        </div>

        <button className="flex bg-[#ff6b2b] text-white h-12 w-40 items-center font-medium justify-center rounded-lg sm:mt-10">
          Get Now
        </button>
      </div>
    </>
  );
}
