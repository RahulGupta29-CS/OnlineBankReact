// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchAccount } from "../store/action/account";
// import {useParams} from "react-router-dom";

// class Account extends React.Component {
//   componentDidMount() {
//     const { accountId } = this.props.match.params;
//     this.props.fetchAccount(accountId);
//   }

//   render() {
//     const { account } = this.props;

//     if (!account) {
//       return <div>loading...</div>;
//     }
//     return (
//       <div>
//         <h1>Account Details</h1>
//         <p>{account.id}</p>
//         <p>{account.balance}</p>
//         <p>{account.acctStatus}</p>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   account: state.account,
// });

// export default withRouter(connect(mapStateToProps,{fetchAccount})(Account));

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { useParams } from 'react-router';
// import { fetchAccount } from '../store/action/account';

// const Account = ({ account, fetchAccount }) => {
//     const { accountId } = useParams();

//     useEffect(() => {
//         fetchAccount(accountId);
//     }, [accountId, fetchAccount]);

//     if (!account) {
//         return <div>Loading..</div>
//     }

//     return (
//         <div>
//             <h1>Account Details</h1>
//             <p>{account.id}</p>
//             <p>{account.balance}</p>
//             <p>{account.acctStatus}</p>
//         </div>
//     );
// }
// const mapStateToProps = (state) => ({
//     account: state.account,
// });

// export default connect(mapStateToProps, { fetchAccount })(Account);

// import React from 'react';
// import { connect } from 'react-redux';
// import { useInRouterContext, withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
// import { getAccount } from '../store/action/account';


// class GetAccount extends React.Component {


//     acctID = '';
//     balance =  '';
//     acctStatus = '';
//     startDate = '';

//     componentDidMount() {

//         const id = this.props.match.params.id;
//         this.props.dispatch(getAccount(id));
//     }

//     // handleOnSubmit = e => {
//     //     e.preventDefault();
//     //     this.props.dispatch(empUpdate({ id: this.props.match.params.id, name: this.name, age: this.age, department: this.department }));
//     // }

//     handleNameChange = e => {
//         this.name = e.target.value;
//     }

//     // render() {
//     //     if (this.props.name) {
//     //         this.name = this.props.name;
//     //         this.age  = this.props.age;
//     //         this.department = this.props.department;
//     //         return (
//     //             <div className="col-md-9 mx-sm-auto col-lg-10 px-md-4">
//     //                 <h4 className="mb-3">Edit Employee</h4>
//     //                 <form className="needs-validation" onSubmit={this.handleOnSubmit}>
//     //                     <div className="row g-3">
//     //                         <div className="col-sm-6">
//     //                             <label htmlFor="firstName" className="form-label">Name</label>
//     //                             <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.handleNameChange} defaultValue={this.name} required />
//     //                             <div className="invalid-feedback">Valid name is required.</div>
//     //                         </div>

//     //                         <div className="col-sm-6">
//     //                             <label htmlFor="lastName" className="form-label">Age</label>
//     //                             <input type="number" className="form-control" id="age" placeholder="Age" onChange={e => this.age = e.target.value} defaultValue={this.age} required />
//     //                             <div className="invalid-feedback">Valid Age is required.</div>
//     //                         </div>

//     //                         <div className="col-12">
//     //                             <label htmlFor="username" className="form-label">Department</label>
//     //                             <div className="input-group has-validation">
//     //                                 <input type="text" className="form-control" id="username" placeholder="Department" onChange={e => this.department = e.target.value} defaultValue={this.department} required />
//     //                                 <div className="invalid-feedback">Your department is required</div>
//     //                             </div>
//     //                         </div>
//     //                         <div className="col-sm-6"><button className="btn btn-primary" type="submit">Submit</button></div>
//     //                         <div className="col-sm-6"><Link to="/"><button className="btn btn-secondary" >Back</button></Link></div>
//     //                     </div>
//     //                 </form>
//     //             </div>
//     //         );
//     //     }
//     //     return <div />
//     // }
//     render(){
//         return(
//         <div>
//        <h1>Account Details</h1>
//          <p>{this.props.acctID}</p>
//          <p>{this.props.balance}</p>
//          <p>{this.props.startDate}</p>
//        </div>
//    ) }
// }

// function mapStateToProps(state) {
//     console.log(state);
//     const { account } = state;
//     return {
//         ...account
//     }
// }

// export default connect(mapStateToProps)(GetAccount);


import axios from "axios";
import { Component } from "react";
import { getAccount } from "../store/action/account";
import { connect } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { AddAccount } from "./PostAccount";

export class GetAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            componentNum: 0
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary" onClick={() => {
                                    this.setState({ componentNum: 0 })
                                }} > Show Accounts</button> </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary" onClick={() => {
                                    this.setState({ componentNum: 1 })
                                }} > Add Account</button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div >
                        {this.state.componentNum === 0 ? this.showCustomerList() : <AddAccount />
                        }
                    </div>
                </div>
            </div>
        );
    }
};
/* // render() {
//     return (
//         <div>
//             <h1>Account</h1>
//             <div className="row row-cols-1 row-cols-md-3 g-4 ">
//                 {this.props.account.list.map((a) => (
//                     <div className="col" key={a.acctID}>
//                         <div className="card text-bg-secondary">
//                             <div className="card-header">ID:{a.acctID}</div>
//                             <div className="card-body">
//                                 <h5 className="card-title">Balance: {a.balance}</h5>
//                                 <h5 className="card-title">Status: {a.acctStatus}</h5>
//                                 <h5 className="card-title">Address: {a.address}</h5>
//                                 <h5 className="card-title">Date: {a.startDate}</h5>
//                                 {/* <h5 className="card-title">EmailId: {c.emailId}</h5> */
//                             </div>
//                             {/* <div class="card-footer border-info">Gender:{c.gender}</div> */}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     )
// } */}

//     async getAccount(id) {
//         try {
//             const response = axios.get("http://localhost:8181/account/" + id);
//             const data = (await response).data;
//             this.setState({
//                 account: data,
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }
function mapStateToProps(state) {
    return {
        account: state.account
    };
}

export default connect(mapStateToProps, { getAccount })(GetAccount);