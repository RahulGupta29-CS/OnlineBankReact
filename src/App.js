import './App.css';
import NavBar from './component/navbar';
// import { Routes } from 'react-router';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCustomer from './component/postcustomers';
import { Outlet, Route, Routes } from "react-router-dom";
// import GetCustomers from './component/getcustomers';
import Customer from './component/Customer';
import { Provider } from "react-redux";
import {store} from "./store";
import { Login } from './component/auth/login';
import GetAccount from './component/Account';
import PostAccount, { AddAccount } from './component/PostAccount';
import AccountDeposit from './component/AccountDeposit';


export default class App extends Component{

  
 
  /* Which function does react call : render() */
  render(){  /* render must return something(JSX) */
    return(
        <div>
          <Provider store={store}>
          <NavBar />
          <Routes>
            {/* <Route path="/" element={ <Customer />} />  */}
            {/* <Route path="/" element={ <P />} />  */}
            <Route path="/customer" element={ <Customer />} /> 
            {/* <Route path="/sign-up" element={ <SignUp />} />  */}
            <Route path="/sign-up" element={ <PostCustomer />} /> 
            <Route path="/account/:id" element={ < PostAccount />} /> 
            <Route path="/account" element={ < AccountDeposit />} /> 
            <Route path="/sign-in" element={ <Login />} /> 
            {/* <Route path="*" element={ <PageNotFound />} /> */}
          </Routes>
          </Provider>
        </div>
    );
  }
}