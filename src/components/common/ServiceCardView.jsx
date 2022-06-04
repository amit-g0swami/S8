import React from "react";

const ServiceCardView = ({product}) => {
  return (
    <div
      key={product.image}
      className={`flex border my-8 font-worksans font-medium p-10 bg-cover bg-right bg-no-repeat h-96 w-4/5 lg:p-4 lg:w-7/12 rounded-3xl lg:border lg:border-[#d9c7c7] md:border md:border-[#d9c7c7] md:w-5/6`}
      style={{}}>
      <Link to={`/product/${product.sid}`}>
        <div className="flex flex-1 flex-col ">
          <div className="flex flex-1 text-xl font-bold lg:mt-3 lg:pl-2">
            {product.name}
          </div>
          <div className="flex flex-1 w-80 lg:mt-1 lg:pl-3">
            <p>{product.description.slice(0, 400)}...</p>
          </div>
          <div className="flex flex-col items-start font-bold text-lg justify-center mr-5 lg:ml-10 lg:mt-3">
            <p>₹ {product.service_price}</p>
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 w-full justify-center">
          <img className="flex rounded-xl" src={product.image} />
        </div>
        <div className="flex justify-start mt-4">
          {isAuthenticated ? (
            <>
              {cart.find((item) => item.sid === product.sid) ? (
                <button
                  onClick={() => remove_from_cart(product.sid)}
                  className={`flex h-12 mb-3 cursor-pointer flex-1 justify-center items-center font-bold rounded-2xl bg-red-600 text-white `}>
                  Remove to cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className={`flex h-12 mb-3 cursor-pointer flex-1 justify-center items-center font-bold rounded-2xl bg-gradient-to-r from-[#FFD36F]  to-[#F1Ad10] `}>
                  Book Now
                </button>
              )}
            </>
          ) : (
            <>
              <div
                onClick={() => myFunction(index)}
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
  );
};

export default ServiceCardView;
