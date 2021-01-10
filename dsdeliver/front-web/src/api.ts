import axios from "axios";

const url = 'https://icaro-motta-dsdelivery.herokuapp.com';

export function fetchProducts(){
	return axios(`${url}/products`);
}