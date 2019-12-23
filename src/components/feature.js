import React from 'react';


class Feature extends React.Component {
   componentDidMount() {
      setTimeout(function () {
         document.querySelector(".loader-wrapper").style = "display: none";
      }, 2000);
   }
   render() {

      return (
         <section id="feature" className="feature">
            <div className="container">
               <div className="row">
                  <div className="feature-phone">
                     <img src="assets/images/222.png" className="img-fluid" alt="" />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                     <div className="row">
                        <div className="col-sm-12 mrgn-md-top">
                           <h2 className="title">some pretty cool<span> features</span></h2>
                        </div>
                        <div className="col-12 col-md-6">
                           <ul className="feature-style">
                              <li>
                                 <div className="feature-icon">
                                    <img src="assets/images/icon/1.png" alt="icon" />
                                 </div>
                                 <div className="feature-subtitle">
                                    <h3>join a community</h3>
                                 </div>
                                 <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </li>
                              <li>
                                 <div className="feature-icon">
                                    <img src="assets/images/icon/1.png" alt="icon" />
                                 </div>
                                 <div className="feature-subtitle">
                                    <h3>Find Inspiration</h3>
                                 </div>
                                 <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </li>
                              <li>
                                 <div className="feature-icon">
                                    <img src="assets/images/icon/1.png" alt="icon" />
                                 </div>
                                 <div className="feature-subtitle">
                                    <h3>Share and discover projects</h3>
                                 </div>
                                 <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        <div className="col-12 col-md-6 sm-m-top">
                           <ul className="feature-style">
                              <li>
                                 <div className="feature-icon">
                                    <img src="assets/images/icon/1.png" alt="icon" />
                                 </div>
                                 <div className="feature-subtitle">
                                    <h3>Land your dream job</h3>
                                 </div>
                                 <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </li>
                              <li>
                                 <div className="feature-icon">
                                    <img src="assets/images/icon/1.png" alt="icon" />
                                 </div>
                                 <div className="feature-subtitle">
                                    <h3>Build a professional network</h3>
                                 </div>
                                 <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </li>
                              <li>
                                 <div className="feature-icon">
                                    <img src="assets/images/icon/1.png" alt="icon" />
                                 </div>
                                 <div className="feature-subtitle">
                                    <h3>Find or be a mentor</h3>
                                 </div>
                                 <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}


export default Feature;