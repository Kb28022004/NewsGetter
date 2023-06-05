import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setprogress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <LoadingBar color="#f11946" height={2} progress={this.state.progress} />
        <Router>
          <Navbar heading="NewsGetter" />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  setprogress={this.setprogress}
                  pageSize={25}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  setprogress={this.setprogress}
                  pageSize={25}
                  country="in"
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  setprogress={this.setprogress}
                  pageSize={25}
                  country="in"
                  category="Health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  setprogress={this.setprogress}
                  pageSize={25}
                  country="in"
                  category="Science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  setprogress={this.setprogress}
                  pageSize={25}
                  country="in"
                  category="Sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  setprogress={this.setprogress}
                  pageSize={25}
                  country="in"
                  category="Technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
