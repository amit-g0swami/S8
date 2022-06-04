import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useSnackbar} from "notistack";
import {Link, Router} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../../base";
import {useParams} from "react-router-dom";
import {GrFormClose} from "react-icons/gr";
import {addToCart, remove_from_cart} from "../../../apis";

const Body = (props) => {
  const {enqueueSnackbar} = useSnackbar();
  // const state = useSelector()
  const dispatch = useDispatch();
  const params = useParams();
  const [cart, setCart] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    setIsAuthenticated(true);
    const fetch_from_cart = async () => {
      await axios
        .get(BASE_URL + "/rest/cart", {
          headers: {Authorization: "Token " + token},
        })
        .then((res) => {
          if (res.data.success) {
            setCart(res.data.cart_products);
          }
        });
    };
    fetch_from_cart();
  }, [count]);

  function myFunction(id) {
    var popup = document.getElementById("myPopup_" + id);
    popup.classList.toggle("show");
  }

  return props.products.map((product, index) => (
    <div
      key={product.image}
      className={`flex border my-8 font-worksans font-medium p-10 bg-cover bg-right bg-no-repeat h-96 w-4/5 lg:p-4 lg:w-7/12 rounded-3xl lg:border lg:border-[#d9c7c7] md:border md:border-[#d9c7c7] md:w-5/6`}>
      <Link to={`/product/${product.sid}`} className="flex-1 flex">
        <div className="flex flex-1 flex-col ">
          <div className="flex flex-1 flex-col">
            <div className="flex text-xl font-bold lg:mt-3 lg:pl-2">
              {product.name}
            </div>
            <div className="flex lg:mt-2 lg:pl-2">
              <p>{product.description.slice(0, 400)}...</p>
            </div>
          </div>
          <div className="flex flex-col items-start font-bold text-lg justify-center mr-5 lg:ml-10 lg:mt-3">
            <p>₹ {product.service_price}</p>
          </div>
        </div>
      </Link>
      <div className="flex flex-[.5] flex-col">
        <div className="flex flex-1 w-full h-52 justify-center">
          <img className="flex rounded-xl" src={product.image} />
        </div>
        <div className="flex justify-start mt-4">
          {isAuthenticated ? (
            <>
              {cart.find((item) => item.sid === product.sid) ? (
                <button
                  onClick={() => remove_from_cart(product.sid, enqueueSnackbar)}
                  className={`flex h-12 mb-3 cursor-pointer flex-1 justify-center items-center font-bold rounded-2xl bg-red-600 text-white `}>
                  Remove to cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product, enqueueSnackbar)}
                  className={`flex h-12 mb-3 cursor-pointer flex-1 justify-center items-center font-bold rounded-2xl bg-gradient-to-r from-[#FFD36F]  to-[#F1Ad10] `}>
                  Book Now
                </button>
              )}
            </>
          ) : (
            <>
              <div
                onClick={() => {
                  myFunction(index);
                  setTimeout(() => myFunction(index), 3000);
                }}
                className="flex popup h-12 mb-3 cursor-pointer flex-1 justify-center items-center font-bold rounded-2xl bg-gradient-to-r from-[#FFD36F]  to-[#F1Ad10]">
                Login
                <span class="popuptext" id={`myPopup_${index}`}>
                  Before adding a product to your cart, you must first log in!
                </span>
              </div>
            </>
          )}{" "}
        </div>
      </div>
    </div>
  ));
};

export default Body;
