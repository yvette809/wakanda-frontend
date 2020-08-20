import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap'
import  Navigation from '../src/pages/Navigation'
import Home from '../src/pages/Home'
import Footer from '../src/pages/Footer'
import Mission from '../src/pages/Mission'
import Donate from '../src/pages/Donate'
import  Membership from './pages/Membership'
//import  Events from '../src/pages/Events'
import  Testimonials from '../src/pages/Testimonials'
import  Faqs from './pages/Faqs'
import EventDetails from './pages/EventDetails'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
     
      <Container fluid>
      <Router>
        <Navigation/>
        <Route path="/" exact component = {Home}></Route>
        <Route path="/mission" component={Mission}></Route>
        <Route path="/membership" component={Membership}></Route>
        {/* <Route path="/events" component={Events}></Route> */}
        <Route path="/faqs" component={Faqs}></Route>
        <Route path="/donate" component={Donate}></Route>
        <Route path="/testimonials" component={Testimonials}></Route>
        <Route path="/eventdetails/:id" component={EventDetails}></Route>
        <Footer/>
      </Router>
      
       </Container>
    );
  }

}
 


export default App;
