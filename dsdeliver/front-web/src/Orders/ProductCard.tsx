import { Product } from './types';

type Props = {
	product: Product;
}

function ProductCard({product} : Props){
	return (
		<div className="order-card-container">
			<h3 className="order-card-title">
				{product.name}
			</h3>
			<img src={product.imageUri}
			className="order-card-image"
			alt="Imagem do produto"/>
			<h3 className="order-card-price">
				R$ {product.price.toFixed(2).replace('.',',')}
			</h3>
			<div className="order-card-description">
				<h3>{product.description}</h3>
			</div>
		</div>
	)
}

export default ProductCard;