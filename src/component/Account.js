import axios from "axios";
import { Component } from "react";
import { getAccount } from "../store/action/account";
import { connect } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { AddAccount } from "./PostAccount";
import AccountDeposit from "./AccountDeposit";
import Transaction from "./Transaction";

export class Account extends Component {
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
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                this.setState({ componentNum: 0 })
                            }} > Add Accounts</button> </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                this.setState({ componentNum: 1 })
                            }} > Deposit Amount</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                this.setState({ componentNum: 2 })
                            }} > Send Amount</button>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>
                </div>
                <div >
                    {/* {this.state.componentNum === 0 ? <AddAccount /> : <AccountDeposit/> */
                    }
                    {
                        (() => {
                            if (this.state.componentNum === 0) {
                                return (
                                    <AddAccount/>
                                )
                            } else if (this.state.componentNum === 1) {
                                return (
                                    <AccountDeposit/>
                                )
                            } else {
                                return (
                                    <Transaction/>
                                )
                            }
                        })()
                    }


                </div>
            </div>

        );
    }
};

function mapStateToProps(state) {
    return {
        account: state.account
    };
}

export default connect(mapStateToProps, { getAccount })(Account);