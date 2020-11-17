import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Navigation from "../src/pages/Navigation";
import Home from "../src/pages/Home";
import Footer from "../src/pages/Footer";
import Mission from "../src/pages/Mission";
import Donate from "../src/pages/Donate";
import Members from "./pages/Members";
import News from "../src/pages/News";
import Kids from "./components/Kids"
import Basket from "./components/Basket"
import Football from "./components/Football"
import Testimonials from "../src/pages/Testimonials";
import NotFound from "./pages/NotFound";
import EventDetails from "./pages/EventDetails";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { LOGOUT } from "./actions/types";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import AddExperience from "./components/profile-form/AddExperience";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/posts";
import Post from "./components/post/post";
import { loadUser } from "./actions/auth";
import setAuthToken from "./components/utils/setAuthToken";
import store from "./store";
import Alert from "./components/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminProfiles from "./components/AdminProfiles";
import AdminPosts from "./components/AdminPosts";

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Router>
      <Navigation />
      <Alert />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/mission" component={Mission}></Route>
        <Route path="/members" component={Members}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/donate" component={Donate}></Route>
        <Route path="/kids" component={Kids}></Route>
        <Route path="/basketball" component={Basket}></Route>
        <Route path="/football" component={Football}></Route>
        <Route path="/testimonials" component={Testimonials}></Route>
        <Route path="/eventdetails/:_id" component={EventDetails}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/profiles" component={Profiles}></Route>
        <Route path="/profile/:_id" exact component={Profile}></Route>
        <PrivateRoute
          exact
          path="/dashboard"
          component={Dashboard}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/create-profile"
          component={CreateProfile}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/edit-profile"
          component={EditProfile}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/add-experience"
          component={AddExperience}
        ></PrivateRoute>
        <PrivateRoute exact path="/posts" component={Posts}></PrivateRoute>
        <PrivateRoute exact path="/posts/:id" component={Post}></PrivateRoute>
        <PrivateRoute exact path="/admin/profiles" component={AdminProfiles}></PrivateRoute>
        <PrivateRoute exact path="/admin/posts" component={AdminPosts}></PrivateRoute>
  
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
