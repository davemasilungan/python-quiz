import React from 'react';
import Navbar from '../components/navbar';

class SignUp extends React.Component {
   render() {

      return (
        <div>
        <Navbar />
         <section className="authentication-form">
            <div>
               <h2 className="title text-center">Create your free account</h2>
               <p className="text-center"></p>
               <div className="card">
                  <form className="theme-form">
                     <div className="form-group">
                        <div className="md-fgrup-margin">
                           <input type="text" className="form-control" placeholder="Name" required="required" />
                        </div>
                     </div>
                     <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required="required" />
                     </div>
                     <div className="form-group">
                        <input required="" type="password" className="form-control" placeholder="Password" />
                     </div>
                     <div className="form-group">
                        <input type="password" name="login[password]" className="form-control" placeholder="Confirm Password" required="required" />
                        <div className="show-hide">
                           <span className="show"></span>
                        </div>
                     </div>
                     <div className="form-group row">
                        <div className="custom-control custom-checkbox col-6">
                           <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                           <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me</label>
                        </div>
                        <a href={`${process.env.PUBLIC_URL}/forget-password`} className="text-right col-6 theme-link">forgot password?</a>
                     </div>
                     <div className="form-button text-center">
                        <button type="submit" className="btn btn-custom theme-color">Sign Up</button>
                     </div>
                     <div className="or-saparator"><span>or</span></div>
                     <h6 className="text-center mt-0 mb-3">Sign up with:</h6>
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


export default SignUp;