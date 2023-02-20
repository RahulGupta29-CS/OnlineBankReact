import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";


export class AddFund extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fund: {
                company_name:'',
                investmentAmount:'',
                investmentDuration:'',
                interestRate:'',
                fundenum:'',
                // FundResponseId:'',
                // FundTotalReturn:'',
             
                

            },
            errors: {},
            msg: '',
            fundresponse: []
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
                    <h5 className="card-header">Add Fund</h5>
                    <div className="card-body">
                        <h5 className="card-title">Enter Fund: </h5>
                        <p className="card-text">
                            <span>{this.state.msg}</span> <br />
                            <label>Company Name: </label>
                            <input type="text"
                                name="company_name"
                                value={this.state.fund.company_name}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['company_name']}</span>
                            <br /><br />
                            <label> Invest Amount: </label>
                            <input type="number"
                                name="investmentAmount"
                                value={this.state.fund.investmentAmount}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['investmentAmount']}</span>
                            <br /><br />
                             <label> Investment Duration: </label>
                            <input type="number"
                                name="investmentDuration"
                                value={this.state.fund.investmentDuration}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['investmentDuration']}</span>
                            <br /><br />  
                            <label> InterestRate: </label>
                            <input type="number"
                                name="interestRate"
                                value={this.state.fund.interestRate}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['interestRate']}</span>
                            <br /><br />  
                            {/* <label>Select Fund: </label>
                            <input type="text"
                                name="fundenum"
                                value={this.state.fund.fundenum}
                                onChange={this.changeHandler} />
                                <option key={1} value="MUTUALFUND">MUTUALFUND</option>
                            <span style={{ color: 'red' }}>{this.state.errors['fundenum']}</span>
                            <br /><br />   */}

<label>Select Fund: </label>
                    <select name="fundenum" 
                            value={this.state.fund.fundenum} 
                            onChange={this.changeHandler} >
                        <option key={0} value="">--Select Fund--</option>
                        <option key={1} value="MUTUALFUND">MUTUALFUND</option>
                        
                    </select>
                    <span style={{ color : 'red'}}>{this.state.errors['fundenum']}</span>
                    <br /><br />
                            {/* <label> FundResponseId: </label>
                            <input type="number"
                                name="FundResponseId"
                                value={this.state.FundResponseId}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['FundResponseId']}</span>
                            <br /><br />  
                            <label> FundTotalReturn: </label>
                            <input type="number"
                                name="FundTotalReturn"
                                value={this.state.FundTotalReturn}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['FundTotalReturn']}</span>
                            <br /><br />   */}


                            <button onClick={this.onAdd} className="btn btn-primary">Add </button>
                        </p>

                    </div>
                </div>
            </div>
        );
    }

    changeHandler = (event) => {
        this.setState({
            fund: {
                ...this.state.fund,
                [event.target.name]: event.target.value
            }
        });
    }

    onAdd = () => {
        /* Validate User inputs */
        if (this.handleValidation()) {
            console.log(this.state.fund);
            /* Call the API */
            this.postFund(this.state.fund);
        }
        else {
            /* Display error messages */
            console.log('validation not passed..');
        }
    }

    handleValidation() {
        let company_name= this.state.fund.company_name;
        let investmentAmount = this.state.fund.investmentAmount;
        let investmentDuration= this.state.fund.investmentDuration;
        let interestRate= this.state.fund.interestRate;
        let  fundenum= this.state.fund.fundenum;
        // let FundResponseId= this.state.fund.FundResponseId;
        // let FundTotalReturn= this.state.fund.FundTotalReturn;

        //  let userId = this.state.author.userId;


        let tempErrors = {}
        let formValid = true;

        if (!company_name) { //If bookName is not given
            formValid = false;
            tempErrors['company_name'] = 'CompanyName cannot be empty';
        }
        if (!investmentAmount) { //If book are not given
            formValid = false;
            tempErrors['investmentAmount'] = ' InvestmentAmount cannot be empty';
        }
        if (!investmentDuration) { //If rating is not given
            formValid = false;
            tempErrors['investmentDuration'] = ' investmentduration cannot be empty';
        }
        if (!interestRate) { //If rating is not given
            formValid = false;
            tempErrors['interestRate'] = ' interestrate cannot be empty';
        }
        if (!fundenum) { //If rating is not given
            formValid = false;
            tempErrors['fundenum'] = ' Fundenum cannot be empty';
        }
        {/*if (!FundResponseId) { //If rating is not given
            formValid = false;
            tempErrors['FundResponseId'] = ' userId cannot be empty';
        }
        if (!FundTotalReturn) { //If rating is not given
            formValid = false;
            tempErrors['FundTotalReturn'] = ' userId cannot be empty';
        }
    */}
        this.setState({
            errors: tempErrors
        });

        return formValid;
    }

    async postFund(f) {
        let fund = {
            company_name: f.company_name,
            investmentAmount : f.investmentAmount,
            investmentDuration : f.investmentDuration,
            interestRate: f.interestRate,
            fundenum : f.fundenum,
            // FundResponseId : e.FundResponseId,
            // FundTotalReturn: e.FundTotalReturn,
            
           

        }
        try {
            const response = axios.post("http://localhost:8181/api/fund/add/", fund);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: data.msg
            })
            this.props.addfund(data);
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

export default connect(mapStateToProps, {})(AddFund); 