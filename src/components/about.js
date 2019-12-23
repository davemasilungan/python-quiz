import React, {useEffect} from 'react';

export const About = () => {
   
   useEffect(() => {
      setTimeout(function () {
         document.querySelector(".loader-wrapper").style = "display: none";
      }, 2000);
   }, [])

      return (
         <section id="about" className="about">
            <div className="about-decor">
               <div className="about-circle1"><img src="assets/images/team1.png" alt="circle-decor" /></div>
               <div className="about-circle2"><img src="assets/images/main-banner1.png" alt="banner1" /></div>
            </div>
            <div className="container">
               <div className="row ">
                  <div className="col-md-5">
                     <div className="about-contain">
                        <div>
                           <h2 className="title"><span>talentize</span> yourself</h2>
                           <p className="caption-about">Join our open, skill based networking community. Enhance your exposure to relevant jobs and connect with other professionals.</p>
                           <div className="row sm-mb">
                              <div className="col-6">
                                 <ul className="about-style">
                                    <li className="abt-hover">
                                       <div className="about-icon">
                                          <div className="icon-hover">
                                             <img src="assets/images/icon4.png" alt="find-people" />
                                          </div>
                                       </div>
                                       <div className="about-text">
                                          <h3>Find People</h3>
                                       </div>
                                    </li>
                                    <li className="abt-hover">
                                       <div className="about-icon">
                                          <div className="icon-hover">
                                             <img src="assets/images/icon4.png" alt="be-found" />
                                          </div>
                                       </div>
                                       <div className="about-text">
                                          <h3>Be Found</h3>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                              <div className="col-6">
                                 <ul className="about-style">
                                    <li className="abt-hover">
                                       <div className="about-icon">
                                          <div className="icon-hover">
                                             <img src="assets/images/icon4.png" alt="find-jobs" />
                                          </div>
                                       </div>
                                       <div className="about-text">
                                          <h3>Find Jobs</h3>
                                       </div>
                                    </li>
                                    <li className="abt-hover">
                                       <div className="about-icon">
                                          <div className="icon-hover">
                                             <img src="assets/images/icon4.png" alt="Connect" />
                                          </div>
                                       </div>
                                       <div className="about-text">
                                          <h3>Connect</h3>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-7 d-medium-none">
                     <div className="about-right">
                        <div className="about-girl">
                           <img src="assets/images/aboutus.png" className="img-fluid" alt="talentize-girl-on-laptop" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   };
