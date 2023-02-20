import { Component } from "react";
import { connect } from "react-redux";
import { AddFund } from "./fund-components/AddFund";
 
import FundList from "./fund-components/FundList";

export  class Fund extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
  // componentDidMount(){
  //   this.props.listReview();
  // }
  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> <button   className="list-group-item fund-sidebar" onClick={()=>{
                this.setState({componentNum : 1})
              }} > Show all Fund </button> </li>
              
                   <li className="list-group-item">
                <button  className=" list-group-item fund-sidebar" 
                onClick={()=>(this.setState({componentNum : 3}))}>
                   Add Fund</button></li>
              
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <FundList />:this.state.componentNum === 2?
                  <Fund />:<AddFund review={this.props.fund} />}
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
export default connect(mapStateToProps, {AddFund})(Fund); 
