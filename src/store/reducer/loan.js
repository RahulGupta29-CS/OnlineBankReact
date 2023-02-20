const initialState= {
    list: []
};

const loan = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_LOAN'){
        return {...state, list: action.payload}
    }
   

    return state;
};

export default loan; 
