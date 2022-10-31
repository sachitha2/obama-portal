import axios from "axios";

export async function login(email, password) {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/staff/login`, {
        email,
        password
    })
}

export async function signUp() {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/staff`,{})
}
