import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import NoMatch from './pages/404';
import { Talentize } from './talentize';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import ResetPassword from './pages/reset-pwd';
import ThankYou from './pages/thank-you';
import PageNotFound from './pages/404';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Root = () => {

	return(
		<BrowserRouter basename={'/'} >
			<Switch>
				<Route exact path={`${process.env.PUBLIC_URL}/`} component={Talentize}/>
				<Route path={`${process.env.PUBLIC_URL}/sign-in`} component={SignIn}/>
				<Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp}/>
				<Route path={`${process.env.PUBLIC_URL}/reset-pwd`} component={ResetPassword}/>
				<Route path={`${process.env.PUBLIC_URL}/thank-you`} component={ThankYou}/>
				<Route path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
				<Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
	);
  }

render(<Root />, document.getElementById('root'));

registerServiceWorker();

