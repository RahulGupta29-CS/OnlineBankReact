import { Component } from "react";
import { connect } from "react-redux";
import { listCustomer } from "../store/action/customer";
import PostCustomer from "./postcustomers";


export class Customer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCustomerAdd: false,
            componentNum:0
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
                            <a className="nav-link" to="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div >
                    {this.state.componentNum === 0 ? this.showCustomerList():<PostCustomer/>
                    // {this.state.componentNum ===0 ?
                    //     <PostCustomer />:this.state.componentNum ===2 ?
                    //     this.showCustomerList() :this.showCustomerList()
                        // <div className="row row-cols-1 row-cols-md-4 g-4 ">
                        //     {this.props.customerList.list.map((c) => (
                        //         <div className="col" key={c.id}>
                        //             <div className="card text-bg-secondary border-dark ">
                        //                 <div className="card-header">ID:{c.id}</div>
                        //                 <div className="card-body">
                        //                     <h5 className="card-title">Name: {c.name}</h5>
                        //                     <h5 className="card-title">Gender: {c.gender}</h5>
                        //                     <h5 className="card-title">Address: {c.address}</h5>
                        //                     <h5 className="card-title">Number: {c.number}</h5>
                        //                     <h5 className="card-title">EmailId: {c.emailId}</h5>
                        //                 </div>
                        //                 {/* <div class="card-footer border-info">Gender:{c.gender}</div> */}
                        //             </div>
                        //         </div>
                        //     ))}
                        // </div>
                        
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