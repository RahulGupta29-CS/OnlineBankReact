// import { Component } from "react";
// import { connect } from "react-redux";
// import { listCustomer } from "../../store/action/customer";
// export class CustomerList extends Component{
//     constructor(props) {
//         super(props);
    
//         this.state = {
          
//         };
//       }
    
//       componentDidMount() {
//           this.props.listCustomer();
//       }

//       render(){
//         return(
//             <div>
//             <div className="row row-cols-1 row-cols-md-3 g-4 ">
//                 {this.props.customerList.list.map((c) => (
//                     <div className="col" key={c.id}>
//                         <div className="card text-bg-secondary">
//                             <div className="card-header">ID:{c.id}</div>
//                             <div className="card-body">
//                                 <h5 className="card-title">Name: {c.name}</h5>
//                                 <h5 className="card-title">Gender: {c.gender}</h5>
//                                 <h5 className="card-title">Address: {c.address}</h5>
//                                 <h5 className="card-title">Number: {c.number}</h5>
//                                 <h5 className="card-title">EmailId: {c.emailId}</h5>
//                             </div>
//                             {/* <div class="card-footer border-info">Gender:{c.gender}</div> */}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//           )
//       }
// }

// function mapStateToProps(state) {
//     return {
//       customerList: state.customer
//     }; 
//   }
  
//   export default connect(mapStateToProps, {listCustomer})(CustomerList);