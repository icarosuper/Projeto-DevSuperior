import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';

function Orders(){
	const [products, setProducts] = useState<Product[]>([]);
	const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

	useEffect( () => {
		fetchProducts()
			.then(res => setProducts(res.data))
			.catch(err => console.log(err))
	}, [])

	return (
		<div className="orders-container">
			<StepsHeader/>
			<ProductsList products = {products}/>
			<OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
		</div>
	)
}

export default Orders;