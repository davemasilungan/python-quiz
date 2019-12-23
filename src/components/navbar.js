import React from 'react';

class Navbar extends React.Component {
	componentDidMount() {
		setTimeout(function () {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);
	}
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light theme-nav fixed-top">
				<div id="navbar-main" className="container">
					<a className="navbar-logo" href={`${process.env.PUBLIC_URL}/`}><img src="assets/images/talentize-logo.svg" alt="logo" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse default-nav" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto" id="mymenu">
							<li className="nav-item">
								<a className="nav-link" href="#sign-in">Sign In</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#sing-up" data-menuanchor="signup">Sign UP</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;