import axios from "axios";
import { Component } from "react";

export default class PostCustomer extends Component {
    constructor() {
        super();
        this.state = {
            customer: {
                name: '',
                gender: '',
                address: '',
                number: '',
                emailId: '',
                user: {
                    username: '',
                    password: ''
                }
            },
            errors: {},
            msg: ''
        }
    }

    componentDidMount() { }

    render() {
        return (
            <div className="backg">
                <h3>POST Customer</h3>
                <label className="side">Enter the Name: </label>
                <input type="text"
                    name="name"
                    values={this.state.customer.name}
                    onChange={this.changeHandler} />
                <span style={{ color: 'red', display:'block' }}>{this.state.errors['name']}</span>
                <br />
                <label className="side">Enter the Gender: </label>
                <input type="text"
                    name="gender"
                    values={this.state.customer.gender}
                    onChange={this.changeHandler} />
                <span style={{ color: 'red', display:'block' }}>{this.state.errors['gender']}</span>
                <br />
                <label className="side">Enter the Address: </label>
                <input type="text"
                    name="address"
                    values={this.state.customer.address}
                    onChange={this.changeHandler} />
                <span style={{ color: 'red', display:'block' }}>{this.state.errors['address']}</span>
                <br />
                <label className="side">Enter the Number: </label>
                <input type="text"
                    name="number"
                    values={this.state.customer.number}
                    onChange={this.changeHandler} />
                <span style={{ color: 'red', display:'block' }}>{this.state.errors['number']}</span>
                <br />
                <label className="side">Enter the EmailId: </label>
                <input type="text"
                    name="emailId"
                    values={this.state.customer.emailId}
                    onChange={this.changeHandler} />
                <span style={{ color: 'red', display:'block' }}>{this.state.errors['emailId']}</span>
                <br />
                <label className="side">Enter the UserName: </label>
                <input type="text"
                    name="username"
                    values={this.state.customer.username}
                    onChange={this.changeHandler} />
                <span style={{ color: 'red' , display:'block'}}>{this.state.errors['username']}</span>
                <br />
                <label className="side">Enter the Password: </label>
                <input type="password"
                    name="password"
                    values={this.state.customer.password}
                    onChange={this.changeHandler} />
                <span style={{ color: 'red' , display:'block' }}>{this.state.errors['password']}</span>
                <br />

                <button className="btn btn-info"  onClick={this.onSignUp}>Submit</button>
            </div>
        );
    }
    changeHandler = (event) => {
        this.setState({
            customer: {
                ...this.state.customer,
                [event.target.name]: event.target.value
            }
        });
    }

    onSignUp = () => {
        /* Validate User inputs */
        if (this.handleValidation()) {
            console.log(this.state.customer);
            /* Call the API */
            this.postCustomer(this.state.customer);
        }
        else {
            /* Display error messages */
            console.log('validation not passed..');

        }

    }

    handleValidation() {
        let name = this.state.customer.name;
        let gender = this.state.customer.gender;
        let address = this.state.customer.address;
        let number = this.state.customer.number;
        let emailId = this.state.customer.emailId;
        let username = this.state.customer.username;
        let password = this.state.customer.password;
        let tempErrors = {}
        let formValid = true;
        if (!name) { //If name is not given
            formValid = false;
            tempErrors['name'] = 'Name cannot be empty';
        }
        if (!gender) { //If name is not given
            formValid = false;
            tempErrors['gender'] = 'Gender cannot be empty';
        }
        if (!address) { //If name is not given
            formValid = false;
            tempErrors['address'] = 'Address cannot be empty';
        }
        if (!number) { //If name is not given
            formValid = false;
            tempErrors['number'] = 'Number cannot be empty';
        }
        if (!emailId) { //If email is not given
            formValid = false;
            tempErrors['emailId'] = 'Email cannot be empty';
        }
        if (!username) { //If username is not given
            formValid = false;
            tempErrors['username'] = 'Username cannot be empty';
        }
        if (!password) { //If password is not given
            formValid = false;
            tempErrors['password'] = 'Password cannot be empty';
        }
        this.setState({
            errors: tempErrors
        });

        return formValid;
    }

    async postCustomer(customer) {
        try {
            const response = axios.post("http://localhost:8181/api/customers/add", customer);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
        } catch (error) {
            console.error(error.response.data.msg);
            this.setState({
                msg: error.response.data.msg
            })
        }
    }













}