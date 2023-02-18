import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import account from "../store/reducer/account";
import {listCustomer,addCustomer} from "../store/action/customer";

export class AddAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {

            account: {
                balance: 0,
                acctStatus: '',
                customerID:''
            },
            errors: {},
            msg: '',
            
        };
    }

    componentDidMount() {
        //fetch all departments: call action
        //this.props.listDepartment();
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5 className="card-header">Add Account</h5>
                    <div className="card-body">
                        <h5 className="card-title">Enter Account Info: </h5>
                        <p className="card-text">
                            <span>{this.state.msg}</span> <br />
                            <label>Account Balance: </label>
                            <input type="text"
                                name="balance"
                                value={this.state.account.balance}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['balance']}</span>
                            <br /><br />
                            <label>Account Status: </label>
                            <input type="text"
                                name="acctStatus"
                                value={this.state.account.acctStatus}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['acctStatus']}</span>
                            <br /><br />
                            {/* <label>Employee Salary: </label>
                            <input type="number"
                                name="salary"
                                value={this.state.employee.salary}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['salary']}</span>
                            <br /><br />
                            <label>Joining Date: </label>
                            <input type="date"
                                name="joiningDate"
                                value={this.state.employee.joiningDate}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['joiningDate']}</span>
                            <br /><br />
                            <label>Select Gender: </label>
                            <select name="gender"
                                value={this.state.employee.gender}
                                onChange={this.changeHandler} >
                                <option key={0} value="">--Select Gender--</option>
                                <option key={1} value="MALE">MALE</option>
                                <option key={2} value="FEMALE">FEMALE</option>
                            </select>
                            <span style={{ color: 'red' }}>{this.state.errors['gender']}</span>
                            <br /><br />
                            <label>Select Department: </label>
                            <select name="departmentID"
                                value={this.state.employee.departmentID}
                                onChange={this.changeHandler} >
                                <option key={0} value="">--Select Department--</option>
                                {this.props.dept.list.map(d => (

                                    <option key={d.id} value={d.id}>{d.name}</option>

                                ))}

                            </select>
                            <span style={{ color: 'red' }}>{this.state.errors['departmentId']}</span>
                            <br /><br />

                            <label>Username: </label>
                            <input type="text"
                                name="username"
                                value={this.state.employee.username}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['username']}</span>
                            <br /><br />
                            <label>Password: </label>
                            <input type="password"
                                name="password"
                                value={this.state.employee.password}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['password']}</span>
                            <br /><br /> */}
                            <label>CustomerID: </label>
                            <input type="text"
                                name="customerID"
                                value={this.state.account.customerID}
                                onChange={this.changeHandler} />
                            {/* <span style={{ color: 'red' }}>{this.state.errors['username']}</span> */}
                            <br /><br />
                            <button onClick={this.onAdd} className="btn btn-primary">Add Account</button>
                        </p>

                    </div>
                </div>
            </div>
        );
    }

    changeHandler = (event) => {
        this.setState({
            account: {
                ...this.state.account,
                [event.target.name]: event.target.value
            }
        });
    }

    onAdd = () => {
        /* Validate User inputs */
        if (this.handleValidation()) {
            console.log(this.state.account);
            /* Call the API */
            this.postAccount(this.state.account);
        }
        else {
            /* Display error messages */
            console.log('validation not passed..');
        }
    }

    handleValidation() {
        let balance = this.state.account.balance;
        let acctStatus = this.state.account.acctStatus;
        // let salary = this.state.employee.salary;
        // let joiningDate = this.state.employee.joiningDate;
        // let gender = this.state.employee.gender;
        // let departmentId = this.state.employee.departmentID;
        // let username = this.state.employee.username;
        // let password = this.state.employee.password;
        let customerID = this.state.account.customerID;

        let tempErrors = {}
        let formValid = true;
        
        if (!balance) { //If name is not given
            formValid = false;
            tempErrors['balance'] = 'Balance cannot be empty';
        }
        if (!acctStatus) { //If name is not given
            formValid = false;
            tempErrors['acctStatus'] = 'acctStatus cannot be empty';
        }
        if (!customerID) { //If name is not given
            formValid = false;
            tempErrors['customerID'] = 'customerID cannot be empty';
        }
        // if (!salary) { //If name is not given
        //     formValid = false;
        //     tempErrors['salary'] = 'Employee Salary cannot be empty';
        // }
        // if (!joiningDate) { //If name is not given
        //     formValid = false;
        //     tempErrors['joiningDate'] = 'Please select employee joining date';
        // }
        // if (!gender) { //If name is not given
        //     formValid = false;
        //     tempErrors['gender'] = 'Please select employee gender';
        // }
        // if (!cuId) { //If name is not given
        //     formValid = false;
        //     tempErrors['departmentId'] = 'Please select department ID';
        // }
        // if (!username) { //If name is not given
        //     formValid = false;
        //     tempErrors['username'] = 'Please enter username';
        // }
        // if (!password) { //If name is not given
        //     formValid = false;
        //     tempErrors['password'] = 'Please enter password';
        // }
        this.setState({
            errors: tempErrors
        });

        return formValid;
    }

    async postAccount(e) {
        let account = {
            balance: e.balance,
            acctStatus: e.acctStatus
            }
        
        try {
            const response = axios.post("http://localhost:8181/account/add/" + e.customerID, account);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: "Account Registered"
            })
            this.props.addAccount(data);
        } catch (error) {
            this.setState({
                msg: "Account Registered"
            })
        }
}
}


function mapStateToProps(state) {
    return {
        customer: []
    }
}

export default connect(mapStateToProps, { listCustomer, addCustomer })(AddAccount); 