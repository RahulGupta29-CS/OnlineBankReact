import axios from "axios";

export const sendAmount = (accountID,destinationID,amount) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(`http://localhost:8181/account/transfer/${accountID}/${destinationID}/${amount}`);
        dispatch({
          type: 'TRANSFER_SUCCESS',
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: 'TRANSFER_FAILURE',
          payload: error.message,
        });
      }
    };
};