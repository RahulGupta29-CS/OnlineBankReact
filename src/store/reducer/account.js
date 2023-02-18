// // Define action types
// export const GET_LIST_ACCOUNT = 'GET_LIST_ACCOUNT';
// export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';
// export const GET_ACCOUNT_FAILURE = 'GET_ACCOUNT_FAILURE';

// // Define action creators
// export const getAccountRequest = (accountId) => ({
//   type: GET_LIST_ACCOUNT,
//   payload: accountId,
// });

// export const getAccountSuccess = (account) => ({
//   type: GET_ACCOUNT_SUCCESS,
//   payload: account,
// });

// export const getAccountFailure = (error) => ({
//   type: GET_ACCOUNT_FAILURE,
//   payload: error,
// });

// // Define initial state
// const initialState = {
//   account: [],
//   loading: false,
//   error: null,
// };

// // Define reducer
// const account = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_LIST_ACCOUNT:
//       return {
//         ...state,
//         loading: true,
//       };
//     case GET_ACCOUNT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         account: action.payload,
//       };
//     case GET_ACCOUNT_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };


// // const initialState= {
// //     list: []
// // };

// // const account = (state =initialState, action)=>{

// //     if(action.type === 'GET_LIST_ACCOUNT'){
// //         return {...state, list: action.payload}
// //     }
   

// //     return state;
// // };

// export default account; 

// const accountReducer = (state = null,action)=>{
//     switch(action.type){
//         case 'FETCH_ACCOUNT_SUCCESS':
//             return action.payload;
//         default:
//             return state;
//     }
// };
// export default accountReducer;

// const initializeState = {
//     accounts: [],
//     account: {}
// }

// const accountReducer = (state = initializeState, action) => {
//     console.log(action.type);
//     switch (action.type) {
//         case "account/add":
//             if (!state.accounts) state.accounts = [];
//             console.log(action.data);
//             return state;
//         case "account/getAll":
//             return {accounts: action.data};
//         case "account/getById":
//             return {
//                 accounts: state.accounts,
//                 //employee= action.whatever is fetched from api
//                 account: action.data
//             }
//         default:
//             console.log(state.accounts);
//             return state;
//     }
// }

// export default accountReducer;

const initialState= {
    list: []
};

const account = (state =initialState, action)=>{

    if(action.type === 'GET_ACCOUNT'){
        return {...state, list: action.payload}
    }
   
    if(action.type === 'ADD_ACCOUNT'){
        return {...state, list: [...state.list, action.payload]}
    }

    if(action.type === 'DEPOSIT_SUCCESS'){
        return {...state, list: [...state.list, action.payload]}
    }

    return state;
};

export default account; 