const initialState= {
    list: []
};

const transaction = (state =initialState, action)=>{

    if(action.type === 'DO_TRANSACTION'){
        return {...state, list: action.payload}
    }
   
    // if(action.type === 'ADD_ACCOUNT'){
    //     return {...state, list: [...state.list, action.payload]}
    // }

    // if(action.type === 'DEPOSIT_SUCCESS'){
    //     return {...state, list: [...state.list, action.payload]}
    // }

    return state;
};

export default transaction; 