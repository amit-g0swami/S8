import React from "react";
import Body from "./VehicleCleaning/Body";
import {useParams} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../base";
import {AiOutlineLeft} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      await axios
        .get(BASE_URL + "/rest/subcategory/" + params.scid)
        .then((res) => setProducts(res.data.results))
        .finally(() => setIsLoading(false));
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col mt-10 w-full items-center">
      <div className="flex font-worksans border-b font-medium flex-col items-center w-full">
        <div className="flex w-4/5 lg:w-7/12 items-center p-5 text-xl font-semibold">
          {params.subcategory}
        </div>
      </div>
      <div className="flex flex-col w-full items-center py-5">
        <Body isLoading={isLoading} products={products} />
      </div>
    </div>
  );
};

export default Product;
