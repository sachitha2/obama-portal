import axios from "axios";
import {getCookie} from "../utils/cookies";

const config = {
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`,
    }
}

export async function login(userName, password) {
    // /auth/login
    axios.get(`${process.env.REACT_APP_API_BASE_URL}`, config).then(res => {
            console.log(res.data)
            return res.data
        }
    ).catch(e => {
        console.log(e)
    })
}