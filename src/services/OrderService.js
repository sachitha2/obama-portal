import axios from "axios";

export async function getOrderRequests() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/km/order/requests`)
}

export async function prepareOrder(orderId) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/km/order/prepare/${orderId}`)
}

export async function acceptOrder(orderId) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/km/order/accept/${orderId}`)
}

export async function getAcceptedOrders() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/km/order/accepted`)
}
