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

