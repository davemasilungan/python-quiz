import React from 'react';


class Join extends React.Component {
   componentDidMount() {
      setTimeout(function () {
         document.querySelector(".loader-wrapper").style = "display: none";
      }, 2000);
   }
   render() {

      return (
         <section id="contact" className="contact">
            <div className="contact-decor">
               <div className="contact-circle1"><img src="assets/images/main-banner12.png" alt="" /></div>
               <div className="contact-circle2"><img src="assets/images/main-banner1.png" alt="" /></div>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-md-12 col-lg-8 col-sm-12">
                     <div className="contact-us">
                        <div className="w-100">
                           <h2 className="title">Join Now<span> For Free</span></h2>
                           <form className="theme-form">
                              <div className="form-group">
                                 <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                    <button type="submit" className="btn btn-custom theme-color">Sign Up</button>
                                    </div>
                                 </div>
                              </div>
                              <div className="form-group">
                                <div className="row">                          
                                </div>
                                <div className="form-button">
                                </div> 
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}


export default Join;