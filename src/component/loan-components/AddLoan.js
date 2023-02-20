import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";


export class AddLoan extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loan: {
                loan_Id: '',
                borrower: '',
                type:'',
                amount:'',
                startDate:'',
                loanEnum:'',

                

            },
            errors: {},
            msg: '',
            customer: []
        };
    }

    componentDidMount() {
        //fetch all reviews: call action
        //this.props.listReview();
    }
    render() {
        return (
            <div>
                <div className="card">
                    <h5 className="card-header">Add Loan</h5>
                    <div className="card-body">
                        <h5 className="card-title">Enter Loan: </h5>
                        <p className="card-text">
                            <span>{this.state.msg}</span> <br />
                             {/* <label>loan_Id: </label>
                            <input type="number"
                                name="loan_Id"
                                value={this.state.loan.loan_Id}
                                onChange={this.changeHandler} />
        <span style={{ color: 'red' }}>{this.state.errors['loan_Id']}</span> */}
                             <br /><br /> 
                            <label> Borrower: </label>
                            <input type="text"
                                name="borrower"
                                value={this.state.borrower}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['brrower']}</span>
                            <br /><br />
                            <label>Select type: </label>
        <select name="type" 
                value={this.state.loan.type} 
                onChange={this.changeHandler} > 
                {/* onChange={this.changeHandler} > */}
            <option key={0} value="">--Select statustype--</option>
            <option key={1} value="Late">LATE</option>
            <option key={2} value="PAID">PAID</option>
            <option key={2} value="CONTINUING">CONTINUING</option>
        </select>
                              {/* <label>type: </label>
                            <input type="select"
                                name="type"
                                value={this.state.type}
                                onChange={this.changeHandler} /> */}
                            <span style={{ color: 'red' }}>{this.state.errors['type']}</span>
                            <br /><br />  
                            <label> Amount: </label>
                            <input type="number"
                                name="amount"
                                value={this.state.amount}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['amount']}</span>
                            <br /><br />
                            <label>StartDate: </label>
                            <input type="date"
                                name="startDate"
                                value={this.state.startDate}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['startDate']}</span>
                            <br /><br />
                            <label>LoanEnum: </label>
        <select name="loanEnum" 
                value={this.state.loan.loanEnum} 
                onChange={this.changeHandler} > 
            <option key={0} value="">--Select LoanType--</option>
            <option key={1} value="PERSONALLOAN">PERSONALLOAN</option>
            <option key={2} value="HOMELOAN">HOMELOAN</option>
            <option key={2} value="CARLOAN">CARLOAN</option>
        </select>
                            {/* <input type="text"
                                name="loanEnum"
                                value={this.state.loanEnum}
                                onChange={this.changeHandler} /> */}
                            <span style={{ color: 'red' }}>{this.state.errors['loanEnum']}</span>
                            <br /><br />
                                
                            <button onClick={this.onAdd} className="btn btn-primary">Add Loan</button>
                        </p>

                    </div>
                </div>
            </div>
        );
    }

    changeHandler = (event) => {
        this.setState({
            loan: {
                ...this.state.loan,
                [event.target.name]: event.target.value
            }
        });
    }

    onAdd = () => {
        /* Validate User inputs */
        if (this.handleValidation()) {
            console.log(this.state.loan);
            /* Call the API */
            this.postLoan(this.state.loan);
        }
        else {
            /* Display error messages */
            console.log('validation not passed..');
        }
    }

    handleValidation() {
        // let loan_Id = this.state.loan.loan_Id;
        let borrower= this.state.loan.borrower;
        let type= this.state.loan.type;
        let amount= this.state.loan.amount;
        let startDate= this.state.loan.startDate;
        let loanEnum= this.state.loan.loanEnum;
        //  let userId = this.state.author.userId;


        let tempErrors = {}
        let formValid = true;

        // if (!loan_Id) { //If loan-Id is not given
        //     formValid = false;
        //     tempErrors['loan_Id'] = 'loan_Id cannot be empty';
        // }
        if (!borrower) { //If book are not given
            formValid = false;
            tempErrors['borrower'] = ' borrower cannot be empty';
        }
        
        
        if (!type) { //If bookName is not given
            formValid = false;
            tempErrors['type'] = 'type cannot be empty';
        }
        if (!amount) { //If book are not given
            formValid = false;
            tempErrors['amount'] = ' amount cannot be empty';
        }
        if(amount===0 ||amount<10000.0){
            formValid = false;
            tempErrors['amount'] = ' Invalid amount';

        }
        
        if (!startDate) { //If bookName is not given
            formValid = false;
            tempErrors['startDate'] = 'startDate cannot be empty';
        }
        if (!loanEnum) { //If book are not given
            formValid = false;
            tempErrors['loanEnum'] = ' loanEnum cannot be empty';
        }
        // if (!userId) { //If rating is not given
        //     formValid = false;
        //     tempErrors['userId'] = ' userId cannot be empty';
        // }

        this.setState({
            errors: tempErrors
        });

        return formValid;
    }

    async postLoan(l) {
        let loan = {
            // loan_Id:l.loan_Id,
            borrower:l.borrower,
            type:l.type,
            amount:l.amount,
            startDate:l.startDate,
            loanEnum:l.loanEnum

            // userUd: e.userId
           

        }
        try {
            const response = axios.post("http://localhost:8181/api/loan/add", loan);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: data.msg
            })
            this.props.addloan(data);
        } catch (error) {
            console.error(error.response.data.msg);
            this.setState({
                msg: 'Operation Failed'
            })
        }
    }
}


function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps, {})(AddLoan); 
