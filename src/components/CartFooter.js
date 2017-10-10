import React from 'react';

class CartFooter extends React.Component {
  constructor(props) {
		super(props);

		this.state = {

		};
	}
	render() {
		return ( 
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
					&copy; Never
				</div>
			</div>
		</footer>
		)
	};
}

export default CartFooter;
	
