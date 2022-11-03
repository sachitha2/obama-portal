import axios from "axios";


export async function getAllItems() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/item`, )
}

export async function addQuantity(itemId,quantity,userId) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/inventory/quantity/add/${itemId}`,{
        userId,quantity
    } )
}

export async function consumeQuantity(itemId,quantity,userId) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/inventory/quantity/consume/${itemId}`,{
        userId,quantity
    } )
}

export async function updateReorderLevel(itemId,reOrderLevel) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/inventory/item/rlevel/${itemId}`,{
        reOrderLevel
    })
}