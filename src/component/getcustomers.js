import axios from "axios";
import { Component } from "react";

export default class GetCustomers extends Component {
    constructor() {
        super();

        this.state = {
            customers: [],
        };
    }

    componentDidMount() {
        /* Call the API */
        this.getCustomers();
    }

    render() {
        return (
            <div>
                <h1>Customers List</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {this.state.customers.map((c) => (
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
    }

    async getCustomers() {
        try {
            const response = axios.get("http://localhost:8181/api/customers/getall");
            const data = (await response).data;
            this.setState({
                customers: data,
            });
        } catch (error) {
            console.error(error);
        }
    }
}