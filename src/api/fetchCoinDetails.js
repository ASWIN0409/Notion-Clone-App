import { axiosInstance } from "../Helpers/Instance/axiosInstance";

export default async function fetchCoinDetails(coinId) {
    try {
        const response = await axiosInstance.get(`${coinId}`);
    return response.data;
    } catch (error) {
        alert(error.message);
    }
}