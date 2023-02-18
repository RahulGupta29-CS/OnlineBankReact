// import axios from "axios";

// const fetchAccountSuccess = account =>({
//     type:'FETCH_ACCOUNT_SUCCESS',
//     payload:account,
// });


// export const fetchAccount = (accountId) => {
//     return async dispatch => {
//       try {
//             const response = await axios.get(`http://localhost:8181/account/`+ accountId);
//             dispatch(fetchAccountSuccess(response.data));
//         } catch (error) {
//             console.log(error);
//         }
//     };
//   };

// import axios from "axios";

// export const accountGetAll = (accounts) => {
//     console.log('get all', accounts);
//     return {
//         type: 'account/getAll',
//         data: accounts
//     }
// }

// export const getAccount = (id) => {
//     return async function (dispatch, getState) {
//         await axios.get("http://localhost:8181/account/" + id)
//             .then(data => {
//                 console.log(data);
//                 return dispatch({
//                     type: "account/getById",
//                     data: data.data
//                 });
//             });
//     };
// }

// export const accountDelete = (id) => {
//     return async function (dispatch, getState) {
//         await axios.delete("http://localhost:8080/employee/api/" + id)
//             .then(data => {
//                 console.log("delete", data);
//                 return dispatch(accountFetchAll());
//             });
//     };
// }

// export const accountUpdate = (account) => {
//     return async function (dispatch, getState) {
//         await axios.post("http://localhost:8080/employee/api/", account)
//             .then(data => {
//                 console.log(data);
//             });
//     };
// }

// export const accountAdd = (account) => {
//     if (account) {
//         return async function (dispatch, getState) {
//             await axios.put("http://localhost:8080/employee/api/", account)
//                 .then(data => {
//                     console.log(data);
//                 });
//         };
//     }
// }

// export const accountFetchAll = () => {
//     return async function (dispatch, getState) {
//         await axios.get("http://localhost:8080/employee/api/")
//             .then(data => {
//                 console.log(data);
//                 return dispatch(accountGetAll(data.data));
//             });
//     };
// }

export const getAccount= (id) => (dispatch) =>{
    fetch("http://localhost:8181/account/" + id)
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_ACCOUNT',payload: data}) )
}

export const addAccount = (data)=>{
    return{
        type:'ADD_ACCOUNT',
        payload:data
    }
}
// export const depositAmount= (accountID, amount)=>{
//     return{
//         type:'DEPOSIT_SUCCESS',
//         payload:data
//     }
// }
export const depositAmount = (accountID, amount) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('http://localhost:8181/account/deposit/');
        dispatch({
          type: 'DEPOSIT_SUCCESS',
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: 'DEPOSIT_FAILURE',
          payload: error.message,
        });
      }
    };
  };