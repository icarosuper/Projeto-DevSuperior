import axios from "axios";
import { OrderPayLoad } from "./Orders/types";

let url = '';
process.env.REACT_APP_BACK_END === 'node' ? url = process.env.REACT_APP_NODE! : url = process.env.REACT_APP_JAVA!;
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