import { Component } from "react";
import { connect } from "react-redux";
import { AddLoan } from "./loan-components/AddLoan";
import { LoanList } from "./loan-components/LoanList";
 

export  class Loan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> <button   className="list-group-item review-sidebar" onClick={()=>{
                this.setState({componentNum : 1})
              }} > Show all Loan </button> </li>
              
                   <li className="list-group-item">
                <button  className=" list-group-item loan-sidebar" 
                onClick={()=>(this.setState({componentNum : 3}))}>
                   Add Loan</button></li>
              
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <LoanList />:this.state.componentNum === 2?
                  <Loan />:<AddLoan loan={this.props.loan} />}
          </div> 
        </div>
      </div>
    );
  }
};
function mapStateToProps(state){
  return {
      
  }    
}
export default connect(mapStateToProps, {AddLoan})(Loan); 
