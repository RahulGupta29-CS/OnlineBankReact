export const listFund= () => (dispatch) =>{
    fetch('http://localhost:8181/api/fund/getall')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_FUND',payload: data}) )
}

