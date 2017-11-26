import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import LandingDefault from "./default/LandingDefault";
import Landing from "./Landing";
import Administration from "./Administration";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LandingDefault} />
            <Route path="/cabinet" component={Header} />
            <Route exact path="/cabinet" component={Landing} />
            <Route path="/cabinet/surveys" component={Dashboard} />
            <Route path="/cabinet/surveys/new" component={SurveyNew} />
            <Route path="/cabinet/administration" component={Administration} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
