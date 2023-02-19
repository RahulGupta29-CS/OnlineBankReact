import { Component } from "react";
import { connect } from "react-redux";
import { listCustomer } from "../store/action/customer";
import PostCustomer from "./customer-components/postcustomers";
import GetCustomerInfo from "./GetCustomerInfo";


export class Customer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            componentNum: 0
        };
    }

    componentDidMount() {
        this.props.listCustomer();
    }

    render() {
        return (
            <div>
                {/* <h1>Customers List</h1> */}
                <div>
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                this.setState({ componentNum: 0 })
                            }} > Show Customer</button> </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                this.setState({ componentNum: 1 })
                            }} > Add Customer</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                this.setState({ componentNum: 2 })
                            }} > Get Details</button>
                        </li>
                        {/* <li className="nav-item">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                this.setState({ componentNum: 2 })
                            }} > Show Details</button>
                        </li> */}
                    </ul>
                </div>
                <div >
                {
                        (() => {
                            if (this.state.componentNum === 0) {
                                return (
                                    this.showCustomerList()
                                )
                            } else if (this.state.componentNum === 1) {
                                return (
                                    <PostCustomer/>
                                )
                            } 
                            else {
                                return (
                                    <GetCustomerInfo/>
                                )
                            }
                        })()
                    }
                </div>

            </div>
        );
    }

    showCustomerList() {
        return (
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {this.props.customerList.list.map((c) => (
                        <div className="col" key={c.id}>
                            <div className="card text-bg-secondary">
                                <div className="card-header">ID:{c.id}</div>
                                <div className="card-body">
                                    <h5 className="card-title">Name: {c.name}</h5>
                                    <h5 className="card-title">Gender: {c.gender}</h5>
                                    <h5 className="card-title">Address: {c.address}</h5>
                                    <h5 className="card-title">Number: {c.number}</h5>
                                    <h5 className="card-title">EmailId: {c.emailId}</h5>
                                </div>
                                {/* <div class="card-footer border-info">Gender:{c.gender}</div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        )
    };
};


function mapStateToProps(state) {
    return {
        customerList: state.customer
    };
}

export default connect(mapStateToProps, { listCustomer })(Customer);