import React, {useState, useEffect} from 'react';
import {Jumbotron, Container, Button,Row,Col, Card, Modal,Form, FormControl} from 'react-bootstrap';
import EventList from '../components/EventList';
import {Link} from 'react-router-dom';

//import EventList from '../components/Event';

 const Home = () => {
  const initialEvent = {
    title:"",
    description:"",
    image:"",
    time:"",
    location:"",
    date: ""
  }
  const[events, setEvents] = useState([])
  const [newEvent, setnewEvent] = useState(initialEvent)
  //const {title,description,image,time,location,date} = initialEvent
  // const [newEvent,setnewEvent] = useState({
  //   title:"",
  //   description:"",
  //   image:"",
  //   time:"",
  //   location:"",
  //   date: ""

  // })
  const [loading, setLoading] = useState(false)
  const [showModal, setshowModal] = useState(false)

  // get Events

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

  // Add Events
  const addEvent =async (e)=>{
   // e.preventDefault();
    setLoading (true)

    var data = {

        title:newEvent.title,
        description:newEvent.description,
        image:newEvent.image,
        time:newEvent.time,
        location:newEvent.location,
        date: newEvent.date

    }
    // const timeStamp = Date.now()
    const response = await fetch ("http://localhost:4000/events", {
      method:"POST",
      body: JSON.stringify(data),
      "Content-Type": "application/json"
    })

    if (response.ok){
     alert("event added")
      setnewEvent(initialEvent)
      setLoading(false)
    
    }else{
      alert("something went wrong")
    }

  }


  useEffect(()=>{
    addEvent()
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
      <div>
        <EventList events={events} loading={loading}/>
    <Modal show ={showModal}>
        <Modal.Header closeButton onClick= {()=> setshowModal(false)}>
    <Modal.Title>Add Event</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Form onSubmit = {addEvent}>
      <FormControl
          type= "text" 
          value = {newEvent.title}
          name = "title"
          placeholder = "Add Title"
          onChange = {(e)=> setnewEvent(e.currentTarget.value)}
      />
      <FormControl
          type= "text" 
          value = {newEvent.description}
          name = "description"
          placeholder = "Add description"
          onChange = {(e)=> setnewEvent(e.currentTarget.value)}
      />
      <FormControl
          type= "text" 
          value = {newEvent.image}
          name = "image"
          placeholder = "Add Image"
          onChange = {(e)=> setnewEvent(e.currentTarget.value)}
          required
      />
      <FormControl
          type= "text" 
          value = {newEvent.time}
          name = "time"
          placeholder = "Add Time"
          onChange = {(e)=> setnewEvent(e.currentTarget.value)}
      />
      <FormControl
          type= "text" 
          value = {newEvent.location}
          name = "location"
          placeholder = "Add Location"
          onChange = {(e)=> setnewEvent(e.currentTarget.value)}
      />
      <FormControl
          type= "date" 
          value = {newEvent.date}
          name = "date"
          placeholder = "Add Date"
          onChange = {(e)=> setnewEvent(e.currentTarget.value)}
      />
     
        <FormControl
          type= "file" 
          value = {newEvent.image}
          name = "file"
          placeholder = "Add file"
          onChange = {(e)=> setnewEvent(e.currentTarget.value)}
      />

    </Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick = {()=>setshowModal(false)}>Close</Button>
    <Button variant="primary" onClick= {addEvent}>Add Event</Button>
  </Modal.Footer>
  </Modal>
        <button className="btn-primary" onClick = {()=>setshowModal(true)}>Open Modal</button>
        </div>
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
