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

export async function placeOrder(amount,userId) {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/order/place/order` , {
        amount,
        userId
    })
}

export async function addMenuInstance(userId,orderId,menuInstances) {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/order/add/menu instance` , {
        userId,
        orderId,
        menuInstances
    })
}
