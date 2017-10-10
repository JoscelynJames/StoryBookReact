import React from 'react';

// //stateless component 
// var CartItems = React.createClass({
//   render: function () {
//     return (
// 			<div className="container">
// 			<h1>Items</h1>
// 			</div>
// 		)
//   }
// });

class CartItems extends React.Component {
  constructor(props) {
		super(props);

		this.state = {

		};
	}
	render() {
		return ( 
			<div className="container">
			<h1>Items</h1>
			</div>
		)
	};
}
	
export default CartItems;
	