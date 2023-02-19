const initialState= {
    list: [],
    acctID:'',
    balance:'',
    acctStatus:'',
    startDate:'',
    customer:{
    id:'',
    name:'',
    gender:'',
    address:'',
    number:'',
    emailId:'',
    },
    user:{
    username:'',
    password:'',
}};

const customer = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_CUSTOMER'){
        return {...state, list: action.payload}
    }
    if(action.type === 'ADD_CUSTOMER'){
        return {...state, list:[...state.list,action.payload] }
    }
    if(action.type === 'FETCH_CUSTOMER_INFO'){
        return {...state,
            acctID:action.payload.acctID ,
            balance:action.payload.balance ,
            acctStatus:action.payload.acctStatus ,
            startDate:action.payload.startDate ,
            id:action.payload.customer.id,
            name:action.payload.customer.name ,
            gender:action.payload.customer.gender ,
            address:action.payload.customer.address ,
            number:action.payload.customer.number ,
            emailId:action.payload.customer.emailId ,
            username:action.payload.customer.user.username ,
            password:action.payload.customer.user.password ,
        };
    }
    return state;
};

export default customer; 