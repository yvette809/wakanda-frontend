import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Navigation from "../src/pages/Navigation";
import Home from "../src/pages/Home";
import Footer from "../src/pages/Footer";
import Mission from "../src/pages/Mission";
import Donate from "../src/pages/Donate";
import Membership from "./pages/Membership";
import News from "../src/pages/News";
import Testimonials from "../src/pages/Testimonials";
import Faqs from "./pages/Faqs";
import EventDetails from "./pages/EventDetails";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Alert from "./components/Alert"
import PrivateRoute from "./components/routing/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Alert/>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/mission" component={Mission}></Route>
        <Route path="/membership" component={Membership}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/faqs" component={Faqs}></Route>
        <Route path="/donate" component={Donate}></Route>
        <Route path="/testimonials" component={Testimonials}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
        <Route path="/eventdetails/:_id" component={EventDetails}></Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
