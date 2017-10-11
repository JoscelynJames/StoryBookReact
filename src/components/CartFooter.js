import React from 'react';

/* 
	no state or react lifecycle methods (componentDidMount, 
	componentWillMount, componentDidUpdate, etc) but a 
	faster render time.
*/
const CartFooter = props => (
	<footer className="page-footer">
		<div className="container">
			<div className="row">
				<div className="col l6 s12">
					<h5 className="white-text">Shop ALL THE THINGS</h5>
				</div>
			</div>
		</div>
		<div className="footer-copyright">
			<div className="container">
				&copy; {props.copywrite}
			</div>
		</div>
	</footer>
);

/* 
	use these when you need to have a local state
	or need to use any of React's lifecycle methods
*/
// class CartFooter extends React.Component {
// 	render() {
// 		return (
// 			<footer className="page-footer">
// 				<div className="container">
// 					<div className="row">
// 						<div className="col l6 s12">
// 							<h5 className="white-text">Shop ALL THE THINGS</h5>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="footer-copyright">
// 					<div className="container">
// 						&copy; {this.props.copywrite}
// 					</div>
// 				</div>
// 			</footer>
// 		)
// 	}
// }

export default CartFooter;
	
