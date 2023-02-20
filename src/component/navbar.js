import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class NavBar extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
        <div > 
      <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              MY-BANK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/posts">
                    {/* Posts */}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/customer">
                    Customer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/loan">
                    Loan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/fund">
                    Fund
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/account/:id">
                    Post-Account 
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/account/:accountID">
                    Get Info 
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/account/:accountID/:amount">
                    Account
                  </Link>
                </li> */}
                
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-in">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-up">
                    Sign-Up
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        
      </div>
      <div className="containerFluid">
              <div className="row">
                  <div className="col-lg-12">
                    <Outlet />
                </div>
            </div>
        </div>
      </div>
    );
  }
}