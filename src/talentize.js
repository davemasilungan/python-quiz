import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import { About } from './components/about';
import Feature from './components/feature';
import ScreenShot from './components/screenshot';
import Testimonial from './components/testimonial';
import Contact from './components/join';
import Footer from './components/footer';

export const Talentize = () => {

	useEffect(() => {
		const timer = setTimeout(() => {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

		return (
			<div>
				<Navbar />
				<section id="home" className="home">
					<div className="home-decor">
						<div className="home-circle1"><img src="assets/images/main-banner3.png" alt="circle1" /></div>
						<div className="home-circle2"><img src="assets/images/main-banner12.png" alt="circle2" /></div>
						<div className="home-circle3"><img src="assets/images/main-banner1.png" alt="circle3" /></div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-5">
								<div className="home-contain">
									<div>
										<h1 className="f-bold">SKILL BASED </h1>
											<h1 className="f-bold f-color">NETWORKING</h1>
						<h5 className="caption-about">Focused on career advancement & developing professional connections</h5> 
						<button type="submit" className="btn-custom theme-color">Sign Up</button> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<About />

				<Feature />

				<ScreenShot />

				<Testimonial />

				<Contact />

				<Footer />

			</div>
		);
	}