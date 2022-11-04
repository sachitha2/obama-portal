import axios from "axios";

export async function getMenuItems() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/menulist/view`)
}
export async function getAvailableMenuItems() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/available/menulist/view`)
}
export async function setAvailability(menuId) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/admin/menu/availability/${menuId}`)
}
