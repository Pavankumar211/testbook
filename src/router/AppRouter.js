import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/LoginLink';
import LoginPage from '../components/LoginForm';
import AppHeader from '../components/AppHeader';
import SignupForm from '../components/Signup';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <AppHeader />  
        <Switch>
            <Route path="/" component={Header} exact={true}/>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupForm} />
        </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;