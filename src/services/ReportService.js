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

export async function getCountsReport() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/customer/counts`)
}

export async function getPopulaMenu() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/popularMenu/counts`)
}

export async function getReorderItems() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/reorder/items`)
}
