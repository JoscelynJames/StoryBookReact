import React from 'react';

const items = [
  { 
		id: 1, 
		product: { 
			id: 40, 
			name: 'Mediocre Iron Watch', 
			priceInCents: 399
		 }, quantity: 1 
		},
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]

const CartItem = props => (
	<div className="collection-item">
		<div className="row">
			<div className="col s8">Product</div>
			<div className="col s2">Price</div>
			<div className="col s2">Quantity</div>
		</div>
		{items.map((item) => {
			return (
				<div className="row" key={item.id}>
					<div className="col s8">{item.product.name}</div>
					<div className="col s2">{item.product.priceInCents / 100}</div>
					<div className="col s2">{item.quantity}</div>
				</div>
			)
		})}


	</div>
);

export default CartItem;