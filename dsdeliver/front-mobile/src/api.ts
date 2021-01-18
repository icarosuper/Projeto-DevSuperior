import axios from "axios";

const API_URL = 'https://icaro-motta-dsdelivery.herokuapp.com';

export function fetchOrders(){
	return axios(`${API_URL}/orders?status=pending`)
}

export function setDelivered(id: number){
	return axios.put(`${API_URL}/orders/${id}/delivered`)
}