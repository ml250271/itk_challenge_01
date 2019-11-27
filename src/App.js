import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./List";
import Grid from "./Grid";
import OfficesMap from "./OfficesMap";
import NavBar from "./NavBar";

class App extends Component {
  state = {
    offices: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://itk-exam-api.herokuapp.com/api/offices"
      );
      this.setState({ offices: data, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { offices, loading } = this.state;
    if (loading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    if (offices.length === 0) {
      return (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Error!</h1>
            <p className="lead">Request failed with status code 404</p>
          </div>
        </div>
      );
    }
    return (
      <Router>
        <NavBar />
        <Route path="/" exact render={() => <List offices={offices} />} />
        <Route path="/grid" render={() => <Grid offices={offices} />} />
        <Route
          path="/offices-map"
          render={() => <OfficesMap offices={offices} />}
        />
      </Router>
    );
  }
}

export default App;
