import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users kaficq</h2>;
}
class App extends Component {
    state = { offices: [] };
    async componentDidMount() {
        try {
            const { data } = await axios.get(
                "https://itk-exam-api.herokuapp.com/api/offices"
            );
            this.setState({ offices: data });
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        return (
            <Router>
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <nav>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about/" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users/" className="nav-link">
                                    Users
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </Router>
        );
    }
}

export default App;
