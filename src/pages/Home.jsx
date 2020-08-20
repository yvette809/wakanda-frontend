import React, {useState, useEffect} from 'react';
import {Jumbotron, Container, Button,Row,Col, Card} from 'react-bootstrap';
import EventList from '../components/EventList';
import {Link} from 'react-router-dom';
//import EventList from '../components/Event';

 const Home = () => {

  const[events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{

      const getEvents = async ()=>{
        setLoading(true)
          try{
              const response = await fetch("http://localhost:4000/events")
              if(response.ok){
                  const events = await response.json()
                  console.log("events are", events)
                  setEvents(events.data)
              }else{
                  console.log('something went wrong')
              }
             

          }catch(err){
              console.log(err)
          }
          setLoading(false)
      }
      getEvents()

  },[])

    return (
<>

<Row className= "mb-5">
 <Col lg={10}>
    <Jumbotron className= "jumbo">
  <h1 className="text-white text-center">Welcome to Wakanda Sports Klub (WSK)</h1>
  <p className="text-white font-weight-bolder text-center">
    A Home of Champions
  </p>
  <p>
    <Link to="/mission"><Button variant="primary" className= "first_button">Descover more</Button></Link>
  </p> 
</Jumbotron>
</Col>
 <Col lg={2}>
     <div >
     <p className= "mb-4">Click below for details</p>
     <Link to="/membership"><button className="join  text-center" >JOIN</button></Link>
     {/* <hr/> */}
     {/* <h1 style= {{fontSize:"1rem", textTransform:"uppercase",color:"white"}}>Upcoming Events</h1>
        <div>
          <p>August 15th, Training Alidhem Pitch</p>
          <p>10.30 - 12.30</p>
          <hr className= "event_divider"/>
        </div>
        <div>
          <p>August 15th, Training Alidhem Pitch</p>
          <p>10.30 - 12.30</p>
          <hr className= "event_divider"/>
        </div>         */}
        <EventList events={events} loading={loading}/>
 </div>
 </Col>
</Row>
<Container className="values">
<Row className = "text-center my-4">
  <Col className= "col col-lg-2">
  <Card className="mb-5 first_card" style={{backgroundColor:"#008bcc"}}>
  <Card.Body>
    <Card.Title>OUR VALUES</Card.Title><hr style ={{border:"1px solid red"}}/>
    <Card.Text>
      <p>RESPECT</p>
      <p>PASSION</p>
      <p>COMMITMENT</p>
      <p>TEAMWORK</p>
    </Card.Text>
  </Card.Body>
</Card>
  </Col>
  <Col  className= "col col-lg-2">
  <Card className= "first_card" style={{backgroundColor:"#00a13a"}}>
  <Card.Body>
  <Card.Title>WHERE WE OPERATE</Card.Title><hr style ={{border:"1px solid red"}}/>
    <Card.Text>
      <p>We use sports in changing Lives of immigrants all over Umeå</p>
    </Card.Text>
  </Card.Body>
</Card>
  </Col>
  <Col  className= "col col-lg-2">
  <Card className= "first_card" style={{backgroundColor:"#d40075"}}>
  <Card.Body>
  <Card.Title>JOIN US</Card.Title><hr style ={{border:"1px solid red"}}/>
     <Card.Text>
    <p>Come and Experience the magic of WSK aka Wakanda</p>
     <Link to="/register">
     <button className= "register">Register</button>
       </Link>
    </Card.Text>
  </Card.Body>
</Card>
  </Col>
  <Col  className= "col col-lg-2">
  <Card className= "first_card" style={{backgroundColor:"#fbba00"}}>
  <Card.Body>
   <Card.Title>SUPPORT US</Card.Title><hr style ={{border:"1px solid red"}}/>
    <Card.Text>
    <p>If you like what we do, please support us</p>
     <Link to="/donate">
       <button className= "donate">DONATE</button>
       </Link>
    </Card.Text>
  </Card.Body>
</Card>
  </Col>
</Row>
</Container>
</>
        
    )
}


export default Home
