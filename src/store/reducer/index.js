import { combineReducers } from "@reduxjs/toolkit";
import  customer  from './customer'
import  account  from './account'
import  login  from './login'

export default combineReducers({customer,account,login})