import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./components/pages/List";
import Grid from "./components/pages/Grid";
import OfficesMap from "./components/pages/OfficesMap";
import NavBar from "./components/shared/NavBar";
import NavBarBottom from "./components/shared/NavBarBottom";
import "./App.css";

class App extends Component {
  state = {
    offices: [],
    loading: true,
    hasError: false
  };

  prepareData = offices =>
    offices.map(office => {
      return {
        ...office,
        latitude: Number(office.latitude),
        longitude: Number(office.longitude)
      };
    });

  async componentDidMount() {
    try {
      const { data } = await axios.get(process.env.REACT_APP_API_URL);
      const preparedData = this.prepareData(data);
      this.setState({ offices: preparedData, loading: false, hasError: false });
    } catch (error) {
      this.setState({ loading: false, hasError: true });
    }
  }

  render() {
    const { offices, loading, hasError } = this.state;

    if (loading) {
      return (
        <div className="aligner d-flex justify-content-center">
          <div className="aligner-item spinner-border m-5" role="status">
            <div className="sr-only">Loading...</div>
          </div>
        </div>
      );
    }

    if (hasError) {
      return (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Error!</h1>
            <p className="lead"></p>
          </div>
        </div>
      );
    }

    if (offices.length === 0) {
      return (
        <Router>
          <NavBar />
          <Route
            path="/offices-map"
            render={() => <OfficesMap offices={offices} />}
          />
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <p>There are no offices to display at the moment.</p>
            </div>
          </div>
        </Router>
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
        <NavBarBottom />
      </Router>
    );
  }
}

export default App;
