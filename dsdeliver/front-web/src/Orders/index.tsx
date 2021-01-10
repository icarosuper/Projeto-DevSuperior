import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

function Orders(){
	const [products, setProducts] = useState<Product[]>([]);

	useEffect( () => {
		fetchProducts()
			.then(res => setProducts(res.data))
			.catch(err => console.log(err))
	}, [])

	return (
		<div className="orders-container">
			<StepsHeader/>
			<ProductsList products = {products}/>
		</div>
	)
}

export default Orders;