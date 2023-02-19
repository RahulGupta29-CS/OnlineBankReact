import axios from "axios"

export const listCustomer= () => (dispatch) =>{
    fetch('http://localhost:8181/api/customers/getall')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_CUSTOMER',payload: data}) )
}

export const addCustomer = (data)=>{
    return{
        type:'ADD_CUSTOMER',
        payload:data
    }
}

export const fetchAccount = (accountID) => async(dispatch)=>{
    try{
    const response = await fetch(`/api/account/${accountID}`,{
        credentials:'include'
    });
    const account = await response.json();
    console.log(account);
    // const account = response.data;
    dispatch({
        type: 'FETCH_CUSTOMER_INFO',
        payload:account,
    });
}catch(error){
    if(error.response){
        console.log(error.response.data);  
        console.log(error.response.status);    
        console.log(error.response.headers);    
    }else if(error.request){
        console.log(error.request);
    }else{
        console.log('Error',error.message);
    }
}
};