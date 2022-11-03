import axios from "axios";

export async function addQuantity(itemId,quantity,unitPrice,userId) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/inventory/quantity/add/${itemId}` ,{
        quantity,
        unitPrice,
        userId
    })
}

export async function retrieveQuantity(itemId,quantity,unitPrice,userId) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/inventory/quantity/consume/${itemId}` , {
        quantity,
        unitPrice,
        userId
    })
}

export async function updateReorderLevel(itemId,reOrderLevel) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/inventory/item/rlevel/${itemId}` , {
        reOrderLevel
    })
}