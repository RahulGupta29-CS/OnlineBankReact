
import React from 'react';
import { connect } from 'react-redux';
import { fetchAccount } from "../store/action/customer";

class GetCustomerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountID: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchAccount(this.state.accountID);
    }

    render() {
        const { account } = this.props;

        return (
            <div className='details'>
                <h2>Customer Info</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">ID:</span>
                        <input type="text" class="form-control" value={this.state.accountID} placeholder="Enter ID" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => this.setState({ accountID: e.target.value })} />
                        <button type="submit" className="btn btn-outline-dark">Search</button>
                        </div>
                        
                        {/* <input type="text" value={this.state.accountID} onChange={(e) => this.setState({ accountID: e.target.value })} /> */}
                    </label>
                    
                </form>
                <br />
                {account && (
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-action list-group-item-warning">AcctID:{account.acctID}</li>
                        <li class="list-group-item list-group-item-action list-group-item-info">Balance:{account.balance}</li>
                        <li class="list-group-item list-group-item-action list-group-item-light">AccountStatus:{account.acctStatus}</li>
                        <li class="list-group-item list-group-item-action list-group-item-light">StartDate:{account.startDate}</li>
                        <li class="list-group-item list-group-item-action list-group-item-light">CustomerID:{account.id}</li>
                        <li class="list-group-item list-group-item-action list-group-item-light">Name:{account.name}</li>
                        <li class="list-group-item list-group-item-action list-group-item-light">Gender:{account.gender}</li>
                        <li class="list-group-item list-group-item-action list-group-item-light">Address:{account.address}</li>
                        <li class="list-group-item list-group-item-action list-group-item-light">EmailID:{account.emailId}</li>
                        <li class="list-group-item list-group-item-action list-group-item-light">UserName:{account.username}</li>
                        <li class="list-group-item list-group-item-action list-group-item-light">Password:{account.password}</li>

                    </ul>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.customer
    };
};

export default connect(mapStateToProps, { fetchAccount })(GetCustomerInfo);
