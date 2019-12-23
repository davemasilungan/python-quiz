import React from 'react';
import Navbar from '../components/navbar';

class SignIn extends React.Component {

   componentDidMount() {
      setTimeout(function () {
         document.querySelector(".loader-wrapper").style = "display: none";
      }, 2000);
   }

   render() {

      return (
        <div>
        <Navbar />
         <section className="authentication-form">
            <div>
               <h2 className="title text-center"><span>Sign In</span></h2>
               <p className="text-center">Need a talentize account?</p>
               <p className="text-center">Create an account.</p>
               <div className="card">
                  <form className="theme-form">
                     <div className="form-group">
                        <input type="email" className="form-control" placeholder="email address" required="required" />
                     </div>
                     <div className="form-group">
                        <input required="" name="login[password]" type="password" className="form-control" placeholder="Password" />
                        <div className="show-hide">
                           <span className="show"></span>
                        </div>
                     </div>
                     <div className="form-group row">
                        <div className="custom-control custom-checkbox col-6">
                           <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                           <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me</label>
                        </div>
                        <a href={`${process.env.PUBLIC_URL}/forget-password`} className="text-right col-6 theme-link">lost your password</a>
                     </div>
                     <div className="form-button text-center">
                        <button type="submit" className="btn btn-custom btn-lg theme-color">Login</button>
                     </div>
                     <div className="or-saparator"><span>or</span></div>
                     <h6 className="text-center mt-0 mb-3">Sign in with:</h6>
                     <div className="form-button text-center social-btns">
                        <button type="submit" className="btn btn-custom fb">Facebook</button>
                        <button type="submit" className="btn btn-custom ggl">Google</button>
                     </div>
                  </form>
               </div>
            </div>
         </section>
         </div>
      );
   }
}


export default SignIn;