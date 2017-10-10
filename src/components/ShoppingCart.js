import React from 'react';

import CartHeader from '../components/CartHeader';
import CartFooter from '../components/CartFooter';
import CartItems from '../components/CartItems';

class ShoppingCart extends React.Component {
  constructor(props) {
		super(props);

		this.state = {

		};
	}
	render() {
		return ( 
			<div>
				<CartHeader />
				<CartItems />
				<CartFooter />
			</div>
		)
	};
}

export default ShoppingCart;
	
