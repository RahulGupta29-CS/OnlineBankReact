const initialState= {
    list: []
};

const transaction = (state =initialState, action)=>{

    if(action.type === 'DO_TRANSACTION'){
        return {...state, list: action.payload}
    }
    return state;
};

export default transaction; 