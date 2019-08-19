import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./List";
import Grid from "./Grid";
import OfficesMap from "./OfficesMap";
import NavBar from "./NavBar";

class App extends Component {
    state = {
        offices: [
            // {
            //     id: 1,
            //     name: "Belgrade Office",
            //     description: "Itekako Belgrade office address is Terazije 23",
            //     latitude: "44.786568",
            //     longitude: "20.4489216",
            //     photo: "http://www.geonames.org/flags/x/rs.gif"
            // },
            // {
            //     id: 2,
            //     name: "Paris Office",
            //     description: "Itekako Paris office address is Main street",
            //     latitude: "48.856614",
            //     longitude: "2.3522219",
            //     photo: null
            // },
            // {
            //     id: 3,
            //     name: "Oslo Office",
            //     description: "Itekako Oslo office address is Maine street",
            //     latitude: "59.911491",
            //     longitude: "10.757933",
            //     photo: "http://www.geonames.org/flags/x/no.gif"
            // }
        ],
        loading: true
    };

    async componentDidMount() {
        try {
            const { data } = await axios.get(
                "https://itk-exam-api.herokuapp.com/api/offices"
            );
            this.setState({ offices: data, loading: false });
        } catch (error) {
            console.log(error);
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
                        <p className="lead">
                            Request failed with status code 404
                        </p>
                    </div>
                </div>
            );
        }
        return (
            <Router>
                <NavBar />
                <Route
                    path="/"
                    exact
                    render={() => <List offices={offices} />}
                />
                <Route path="/grid" render={() => <Grid offices={offices} />} />
                <Route path="/offices-map" component={OfficesMap} />
            </Router>
        );
    }
}

export default App;
