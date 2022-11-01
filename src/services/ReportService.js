import axios from "axios";

export async function getDailySales(date) {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/SalesReport/Daily/${date}`)
}

export async function getSalesPeriod(fromDate,toDate) {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/salesReport/period/${fromDate}/${toDate}`)
}

export async function getStoresReport() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/storeReport/daily`)
}
