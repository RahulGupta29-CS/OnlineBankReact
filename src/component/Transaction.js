import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendAmount } from "../store/action/transaction";


const TransferMoney = ({ transfer }) => {
  const [accountID, setAccountID] = useState('');
  const [destinationID, setDestinationID] = useState('');
  const [amount, setAmount] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    transfer(accountID, destinationID, amount);
  };


  return (
    <div className="account">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <h5 className="card-header">Send Amount</h5>
          <div className="card-body">
            <p className="card-text">

              <label className="side">Account ID: </label>
              <input type="number"
                value={accountID}
                onChange={(event) => setAccountID(event.target.value)} />
              <br /><br />

              <label className="side">Destination ID: </label>
              <input type="number"
                value={destinationID}
                onChange={(event) => setDestinationID(event.target.value)} />
              <br /><br />

              <label className="side">Amount: </label>
              <input type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)} />
              <br /><br />

              <button type='submit' className="btn btn-primary">Send</button>
            </p>

          </div>
        </div>
      </form>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  transfer: (accountID, destinationID, amount) => dispatch(sendAmount(accountID, destinationID, amount)),
});



export default connect(null, mapDispatchToProps,)(TransferMoney);
