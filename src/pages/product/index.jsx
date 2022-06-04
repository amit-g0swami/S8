import React from "react";
import ProductBanner from "./CartDetails/ProductBanner";
import ProductInfo from "./CartDetails/ProductInfo";
import ProductOffers from "./CartDetails/ProductOffers";
import FAQs from "./CartDetails/FAQs";
import Review from "./CartDetails/Review";
import axios from "axios";
import {BASE_URL} from "../../base";
import {useParams} from "react-router-dom";
import {useSnackbar} from "notistack";
import {addToCart} from "../../apis";

const CartPage = () => {
  const [productDetail, setProductDetail] = React.useState({});
  const {enqueueSnackbar} = useSnackbar();
  const params = useParams();
  React.useEffect(() => {
    const getDetail = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/service/" + params.sid,
      };
      await axios(config)
        .then((res) => {
          setProductDetail(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getDetail();
  }, []);

  return (
    <div className="flex h-full flex-col w-full items-center mt-20">
      <ProductBanner name={productDetail.name} image={productDetail.image} />
      <ProductInfo product={productDetail.description} />
      <ProductOffers />
      <Review reviews={productDetail.review_set} />
      <FAQs faqs={productDetail.faq_set} price={productDetail.service_price} />
      <button
        onClick={() => addToCart(productDetail.sid, enqueueSnackbar)}
        className="flex font-medium flex-1 mb-3 mx-16 w-96 -mt-16 p-4 rounded-xl bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
        <div className="flex justify-center items-end flex-1">
          <p> ₹ {productDetail.service_price}</p>
        </div>
        <button className="flex items-center font-bold flex-1">
          <p>Book Now</p>
        </button>
      </button>
    </div>
  );
};

export default CartPage;
