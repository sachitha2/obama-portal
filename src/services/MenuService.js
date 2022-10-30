import axios from "axios";

export async function getMenuItems() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/menulist/view`)
}
