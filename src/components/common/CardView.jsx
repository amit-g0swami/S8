import React from "react";
import {Link} from "react-router-dom";

const CardView = ({item}) => {
  return (
    <div
      key={item.category + item.sid}
      className="flex flex-1 box1 mt-6 flex-col rounded-xl bg-blue-50">
      <div className="flex flex-1 justify-center items-center rounded-full overflow-hidden">
        <img
          className="w-40 mt-7 h-40 rounded-full"
          src={item.image}
          alt="hello"
        />
      </div>
      <span className="flex truncate px-6 text-xl justify-center text-center w-full font-bold">
        {item.name.length > 20 ? item.name.slice(0, 20) : item.name}
      </span>
      <div className="flex flex-1 justify-center p-3 pl-4 mt-3 text-center items-center">
        {item.description.slice(0, 120)}...
      </div>
      <div className="flex flex-col justify-center mt-3 px-6 ">
        <div className="flex text-3xl font-bold mb-3">
          ₹{item.service_price}
        </div>
        <div className="flex hover:bg-orange-500 w-40 hover:text-white font-bold text-orange-500 border-2 border-orange-500 mb-4 p-2 justify-center items-center rounded-md">
          <button className="flex transition duration-300 ease-in-out text-sm py-1 px-2 items-center">
            <Link to={`/product/${item.sid}`}>
              <button className="font-bold text-lg">Learn More</button>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardView;
