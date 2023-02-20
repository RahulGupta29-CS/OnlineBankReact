import { Component } from "react";
import { connect } from "react-redux";
import { listLoan } from "../../store/action/loan";
export class LoanList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listLoan();
      }

      render(){
        return(
            <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">LoanID</th>
                <th scope="col">Brrower</th>
                <th scope="col">type</th>
                <th scope="col">amount</th>
                <th scope="col">startDate</th>
                <th scope="col">loanEnum</th>
                
                {/* <th scope="col">useId</th> */}
                {/* <th scope="col">Rating</th> */}
               
              </tr>
            </thead>
            <tbody>
              {
                this.props.loanList.list.map((l, index) => (
                 
                  <tr key={l.id}>
                    <th scope="row" key={l.id}> {index +1}</th>
                     <td>{l.loan_Id}</td> 
                    <td>{l.borrower}</td>
                    <td>{l.type}</td>
                    <td>{l.amount}</td>
                    <td>{l.startDate}</td>
                    <td>{l.loanEnum}</td>
                    
                    
                    {/* <td>{e.userId}</td> */}
                    
                    {/* <td>{e.rating}</td> */}
                    
                  </tr>
                
              ))}   
            </tbody>
          </table>
          )
      }
}

function mapStateToProps(state) {
    return {
      loanList: state.loan
    }; 
  }
  
  export default connect(mapStateToProps, {listLoan})(LoanList);