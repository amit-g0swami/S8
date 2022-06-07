import React from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../base";
import axios from "axios";

export const navigation = [
  { name: "Home", link: "" },
  { name: "Category", link: "/category" },
  { name: "Carrier", link: "/carrier" },
  { name: "Cart", link: "/cart" },
];

export default function Navigation() {
  const toggleNavigation = () => {
    document.getElementById("navBar").classList.toggle("-translate-x-full");
  };
  const [categoryService, setCategoryService] = React.useState([]);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
    const getCat = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/categories",
      };
      await axios(config)
        .then((res) => {
          setCategoryService(res.data.results.slice(0, 3));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getCat();
  }, []);

  return (
    <div className="w-ful border-b flex bg-gradient-to-r from-[#fef6ed] to-[#fdd4ee] px-10 lg:px-14 justify-between">
      <div className=" flex items-center py-2">
        <div className="pr-4 flex lg:hidden">
          <AiOutlineBars onClick={toggleNavigation} size="20" />
        </div>
        <img src={Logo} />
      </div>
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <ul className="flex">
          {navigation?.map((item) => (
            <li key={item.name} className="flex mx-5 text-xl">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to={isAuthenticated ? "/profile" : "/login"}>
        <div className=" justify-center my-8 mr-6 items-center flex">
          <h1>
            <CgProfile size="25" />
          </h1>
        </div>
      </Link>

      <div
        id="navBar"
        className="absolute -translate-x-full lg:hidden transition ease-in-out duration-200 w-full h-full flex justify-center items-center left-0 top-0 bg-white">
        <button className="absolute top-20 right-20">
          <FaTimes onClick={toggleNavigation} size={20} />
        </button>
        <ul className="flex flex-col">
          {navigation?.map((item) => (
            <li key={item.name} className="text-xl">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
