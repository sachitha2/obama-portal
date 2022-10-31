import axios from "axios";

export async function getDailySales(date) {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/SalesReport/Daily/${date}`)
}
