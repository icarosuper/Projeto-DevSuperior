import axios from "axios";

const url = 'https://icaro-motta-dsdelivery.herokuapp.com';
const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

export function fetchProducts(){
	return axios(`${url}/products`);
}

export const fetchLocalMapBox = async (local: string) => {
	return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}