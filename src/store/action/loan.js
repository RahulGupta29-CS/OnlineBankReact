export const listLoan= () => (dispatch) =>{
    fetch('http://localhost:8181/api/loan/getall')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_LOAN',payload: data}) )
}