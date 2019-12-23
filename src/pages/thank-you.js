import React from 'react';
import Navbar from '../components/navbar';


class ThankYou extends React.Component {
    render() {

        return (
          <div>
          <Navbar />
            <div className="full-page ">
                <div className="thanks-bg">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="thanks-section">
                                <div>
                                    <img src="assets/images/thank-you.png" className="img-fluid downlod-img" alt="" />
                                    <div className="col-lg-8 offset-lg-2">
                                        <h2>Thank You for Signing Up</h2>
                                    </div>
                                    <h3>{`We've sent you you a confirmation email.`}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*copy-right-section*/}
                <footer className="bg-thanks">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                    <div className="mt-3 text-center">
                                        <a href={`${process.env.PUBLIC_URL}/`} className="btn btn-custom theme-color theme-color pt-2 pb-2">BACK TO HOME PAGE</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*end copy right section*/}
            </div>
          </div>
        
        );
    }
}


export default ThankYou;