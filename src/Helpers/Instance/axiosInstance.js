import axios from "axios";
import { COINGECKO_API_URL } from "../Constant/constant";

export const axiosInstance = axios.create({
    baseURL: COINGECKO_API_URL,
});