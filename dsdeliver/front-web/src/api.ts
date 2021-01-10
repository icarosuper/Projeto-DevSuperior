import axios from "axios";
import { OrderPayLoad } from "./Orders/types";

const url = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

export function fetchProducts(){
	return axios(`${url}/products`);
}

export const fetchLocalMapBox = async (local: string) => {
	return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}

export function saveOrder(payload: OrderPayLoad){
	return axios.post(`${url}/orders`, payload);
}