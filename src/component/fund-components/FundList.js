import { Component } from "react";
import { connect } from "react-redux";
import { listFund } from "../../store/action/fund";
export class FundList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listFund();
      }

      render(){
        return(
            <table className="table">
            <thead>
              <tr>
              <th scope="col">#</th>
                  <th scope="col">Id</th>
                  <th scope="col">CompanyName</th>
                  <th scope="col">InvestAmount</th>
                  <th scope="col">investmentDuration</th>
                  <th scope="col">InterestRate</th>
                  <th scope="col">FundEnum</th>
                  <th scope="col">FundResponseId</th>
                  <th scope="col">FundTotalReturn</th>
               
              </tr>
            </thead>
            <tbody>
              {
                this.props.fundList.list.map((f, index) => (
                   
                    <tr key={f.id}>
                      <th scope="row" key={f.id}> {index + 1}</th>
                      <td>{f.id}</td>
                      <td>{f.company_name}</td>
                      <td>{f.investmentAmount}</td>
                      <td>{f.investmentDuration}</td>
                      <td>{f.interestRate}</td>
                      <td>{f.fundenum}</td>
                      <td>{f.fundresponse.id}</td>
                      <td>{f.fundresponse.totalReturn}</td>

                      
                      

                      
                      
                      {/* <td> 
                        {e.projects.map(p=> (
                            <li key={index}>
                                {p.title} 
                            </li>
                        ))}
                      </td> */}
                    </tr>
              ))}   
            </tbody>
          </table>
          )
      }
}

function mapStateToProps(state) {
    return {
      fundList: state.fund
    }; 
  }
  
  export default connect(mapStateToProps, {listFund})(FundList);