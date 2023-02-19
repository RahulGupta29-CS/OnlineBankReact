import axios from "axios";

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
export const depositAmount = (accountID, amount) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(`http://localhost:8181/account/deposit/${accountID}/${amount}`);
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