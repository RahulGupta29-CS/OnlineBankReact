const initialState= {
    list: []
};

const fund = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_FUND'){
        return {...state, list: action.payload}
    }
   

    return state;
};

export default fund; 