import { combineReducers } from "@reduxjs/toolkit";
import  customer  from './customer'
import  account  from './account'
import  login  from './login'
import  loan  from './loan'
import  fund  from './fund'

export default combineReducers({customer,account,login,loan,fund})