import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";

class LandingDefault extends Component {
  componentWillReceiveProps() {
    if (this.props.auth == true) {
      return <Redirect to="/cabinet" />;
    }
  }
  render() {
    if (this.props.auth) return <Redirect to="/cabinet" push/>;
    else {
      return (
        <div className="inner-container">
          <div style={{ height: "100%" }}>
            <div className="login-window center-align">
              <div>
                <h1>Emaily!</h1>
              </div>
              <div className="sub-text"> Collect feedback form your users</div>
              <div>
                <a
                  className="waves-effect waves-light btn login-button"
                  href="/auth/google"
                >
                  Login With Google
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, null)(LandingDefault);
