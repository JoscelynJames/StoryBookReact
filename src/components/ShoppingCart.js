import React from 'react';

import CartHeader from '../components/CartHeader';
import CartFooter from '../components/CartFooter';
import CartItems from '../components/CartItems';
import CartItem from '../components/CartItem';

class ShoppingCart extends React.Component {
  constructor(props) {
		super(props);

	}
	render() {
		return ( 
			<div>
				<CartHeader />
				<CartItems />
				<CartItem />
				<CartFooter copywrite={this.props.copywrite}/>
			</div>
		)
	};
};

export default ShoppingCart;
	
