import axios from "axios";

export default async function fetchBooks() {
    try {
        const response = await axios.get("https://www.dbooks.org/api/search/python");
        return response.data;
    } catch (error) {
        alert(error.message);
    }
}