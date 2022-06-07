import axios from "axios";
import { shuffle } from "../functions/shuffle";
import { BASE_URL } from "../base";

export const getData = async (base) => {
    var config = {
        method: "get",
        url: BASE_URL + "/rest/" + base,
    };
    return await axios(config)
        .then((res) => {
            return shuffle(res.data.results)
        })
        .catch(function (error) {
            console.log(error);
        })
};

export const getTrendingData = async (base, loader = (bool) => { }) => {
    var config = {
        method: "get",
        url: BASE_URL + "/rest/" + base,
    };
    return await axios(config)
        .then((res) => {
            return res.data;
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const loginUser = async (data) => {
    return await axios
        .post(BASE_URL + "/auth/login", data)
        .then((res) => res.data);
};

export const addToCart = async (params, enqueueSnackbar) => {
    const token = localStorage.getItem("token");
    await axios
        .post(
            BASE_URL + "/rest/cart?sid=" + params.sid, {}, { headers: { Authorization: "Token " + token } }
        )
        .then((res) => {
            if (res.data.success) {
                enqueueSnackbar("Added To Cart", { variant: "success" });
            } else {
                enqueueSnackbar("Already exists in your cart", { variant: "error" });
            }
        });
};

export const remove_from_cart = async (sid, enqueueSnackbar) => {
    const token = localStorage.getItem("token");
    await axios
        .delete(BASE_URL + "/rest/cart?sid=" + sid, {
            headers: { Authorization: "Token " + token },
        })
        .then((res) => {
            if (res.data.success) {
                enqueueSnackbar("Removed from cart", { variant: "error" });
            } else {
                enqueueSnackbar("Something went wrong", { variant: "error" });
            }
        });
};