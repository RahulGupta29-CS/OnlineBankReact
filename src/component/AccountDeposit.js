import React, { useState } from 'react';
import { connect } from 'react-redux';
import { depositAmount } from "../store/action/account";



const AccountDeposit = ({ deposit }) => {
  const [accountID, setAccountID] = useState('');
  const [amount, setAmount] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    deposit(accountID, amount);
  };


  return (
    <div className="account">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <h5 className="card-header">Add Amount</h5>
          <div className="card-body">
            <p className="card-text">
             
              <label className="side">Account ID: </label>
              <input type="number"
                value={accountID}
                onChange={(event) => setAccountID(event.target.value)} />
              <br /><br />

              <label className="side">Deposit Amount: </label>
              <input type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)} />
              <br /><br />

              <button type='submit'  className="btn btn-primary">Deposit Amount</button>
            </p>

          </div>
        </div>
      </form>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  deposit: (accountID, amount) => dispatch(depositAmount(accountID, amount)),
});



export default connect(null, mapDispatchToProps,)(AccountDeposit);
