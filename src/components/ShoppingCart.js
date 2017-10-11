import React from 'react';

import CartHeader from '../components/CartHeader';
import CartFooter from '../components/CartFooter';
import CartItems from '../components/CartItems';


const ShoppingCart = props => ( 
		<div>
			<CartHeader />
			<CartItems />
			<CartFooter copywrite={props.copywrite}/>
		</div>
);


// dont use for this example. 
// A statless component is faster is for rendering simple(not much logic) JSX/HTML

// class ShoppingCart extends React.Component {
//   constructor(props) {
// 		super(props);

// 		this.state = {

// 		};
// 	}
// 	render() {
// 		return ( 
// 			<div>
// 				<CartHeader />
// 				<CartItems />
// 				<CartFooter copywrite={this.props.copywrite}/>
// 			</div>
// 		)
// 	};
// }

export default ShoppingCart;
	
