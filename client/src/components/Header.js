import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="5">
            <Link to={this.props.auth ? "/cabinet/surveys" : "/"} className="">
              Surveys
            </Link>
          </li>,
          <li key="4">
            <Link to={this.props.auth ? "/cabinet/administration" : "/"} className="">
              Administration
            </Link>
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    if (this.props.auth) {
      return (
        <nav className="nav-main">
          <div className="nav-wrapper">
            <Link to="/cabinet" className="brand-logo">
              Emaily
            </Link>

            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      );
    } else {
      return null;
    }
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
