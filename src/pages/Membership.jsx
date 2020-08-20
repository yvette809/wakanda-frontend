import React from 'react'
import { Container,Row,Col, Jumbotron,Button } from 'react-bootstrap'
import{Link} from 'react-router-dom'

const Membership = () => {
    return (
       <Container>
         <Row className= "mb-2">
          <Col lg={10}>
           <Jumbotron className= "jumbos">
            <h1 className="text-white text-center">Welcome to Wakanda Sports Klub (WSK)</h1>
            </Jumbotron>
           </Col>
        </Row>
        <div><h1> Join US!</h1></div>
        <Row className= "mb-5 d-flex justify-content-center">
            <Col className= "col col-lg-10">
            <p>At WSK, we take things seriously.It is for this reason we welcome only registered members</p>
            <p>Annula membership fees : 300kr</p>
            <h3>The benefits of registration include:</h3>
            <ul className= "d-inline-flex mr-5">
            <span><i className="fa  fa-2x  fa-angle-double-right mr-2"></i></span><span><li>Free Access to The WSK Training facility</li></span>
            <span><i className="fa  fa-2x  fa-angle-double-right mr-2"></i></span><span><li>Access to free training sessions</li></span>
            <span><i className="fa  fa-2x  fa-angle-double-right mr-2"></i></span><span><li>Opportunity to work with our qualified coaches</li></span>
            <span><i className="fa  fa-2x  fa-angle-double-right mr-2"></i></span><span><li>Free Integration advice from our mentors</li></span>
            <span><i className="fa  fa-2x  fa-angle-double-right mr-2"></i></span><span><li>Opportunity to meet other sports lovers</li></span>
            </ul>
            <div><button className= "membership btn-lg justify-content-center align-items-center">Register</button></div>
            </Col>
            <Col></Col>
           
           
            </Row>

       </Container>
    )
}

export default Membership
