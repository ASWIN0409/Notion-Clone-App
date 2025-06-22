import { axiosInstance } from "../Helpers/Instance/axiosInstance";

export default async function fetchCoins(currency= "inr", page=1) {
    const perPage = 10;
    try {
        const response = await axiosInstance.get(`markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`);
        return response.data;
    } catch (error) {
        alert(error.message);
    }
}