import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import account from "../store/reducer/account";
import { listCustomer, addCustomer } from "../store/action/customer";

export class AddAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {

            account: {
                balance: 0,
                acctStatus: 'ACTIVE',
                customerID: ''
            },
            errors: {},
            msg: '',

        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="account">
                <div className="card">
                    <h5 className="card-header">Add Account</h5>
                    <div className="card-body">
                        <h5 className="card-title">Enter Account Info: </h5>
                        <p className="card-text">
                            <span>{this.state.msg}</span> <br />
                            <label className="side">Account Balance: </label>
                            <input type="number"
                                name="balance"
                                value={this.state.account.balance}
                                onChange={this.changeHandler} disabled />
                            <span style={{ color: 'red' }}>{this.state.errors['balance']}</span>
                            <br /><br />
                            <label className="side">Account Status: </label>
                            <input type="text"
                                name="acctStatus"
                                value={this.state.account.acctStatus}
                                onChange={this.changeHandler} disabled/>
                            <span style={{ color: 'red' }}>{this.state.errors['acctStatus']}</span>
                            <br /><br />
                            <label className="side">CustomerID: </label>
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
        let customerID = this.state.account.customerID;

        let tempErrors = {}
        let formValid = true;

        if (balance !== 0) { //If name is not given
            formValid = false;
            tempErrors['balance'] = 'Balance cannot be empty';
        }
        if (acctStatus !== 'ACTIVE') { //If name is not given
            formValid = false;
            tempErrors['acctStatus'] = 'acctStatus cannot be empty';
        }
        if (!customerID) { //If name is not given
            formValid = false;
            tempErrors['customerID'] = 'customerID cannot be empty';
        }

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