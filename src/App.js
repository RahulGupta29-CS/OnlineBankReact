import './App.css';
import NavBar from './component/navbar';
// import { Routes } from 'react-router';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Route, Routes } from "react-router-dom";
// import GetCustomers from './component/getcustomers';
import Customer from './component/Customer';
import { Provider } from "react-redux";
import {store} from "./store";
import { Login } from './component/auth/login';
import PostAccount, { AddAccount } from './component/PostAccount';
import AccountDeposit from './component/AccountDeposit';
import PostCustomer from './component/customer-components/postcustomers';
import { Account } from './component/Account';
import { CustomerList } from './component/customer-components/customerlist';
import GetCustomerInfo from './component/GetCustomerInfo';
import { Loan } from './component/Loan';
import { Fund } from './component/Fund';


export default class App extends Component{

  
 
  /* Which function does react call : render() */
  render(){  /* render must return something(JSX) */
    return(
        <div>
          <Provider store={store}>
          <NavBar />
          <Routes>
            <Route path="/" element={ <Login />} /> 
            <Route path="/customer" element={ <Customer />} /> 
            <Route path="/account" element={ <Account />} /> 
            <Route path="/loan" element={ <Loan />} /> 
            <Route path="/fund" element={ <Fund />} /> 

            {/* <Route path="/customer/list" element={ <CustomerList/>} />  */}
            {/* <Route path="/account/:id" element={ < PostAccount />} />  */}
            {/* <Route path="/account/:accountID" element={ < GetCustomerInfo />} />  */}
            {/* <Route path="/account/:accountID/:amount" element={ < AccountDeposit />} />  */}
            <Route path="/sign-in" element={ <Login />} /> 
            <Route path="/sign-up" element={ <PostCustomer />} /> 
            {/* <Route path="*" element={ <PageNotFound />} /> */}
          </Routes>
          </Provider>
        </div>
    );
  }
}