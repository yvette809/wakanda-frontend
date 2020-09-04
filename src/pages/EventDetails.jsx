import React, {useState,useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Spinner, Modal, Form,FormControl,Button} from 'react-bootstrap'

const EventDetails = () => {
    const {_id} = useParams();
    const[event, setEvent] = useState("")
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)


    const initialEvent = {
        title:"",
        description:"",
        image:"",
        time:"",
        location:"",
        date: "",
        id: ""
      }

    
      const [newEvent, setnewEvent] = useState(initialEvent)

  useEffect(()=>{
      setLoading(true)
   
      const getSingleEvent = async ()=>{
        setLoading(true)
          try{
              const response = await fetch(`http://localhost:4000/events/${_id}`)
              if(response.ok){
                  const event = await response.json()
                  setEvent(event)
              }else{
                  console.log('something went wrong')
              }
             

          }catch(err){
              console.log(err)
          }
          setLoading(false)
      }
      getSingleEvent()

  },[_id])


  // edit event
  const editEvent =async ()=>{
   
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
    const response = await fetch ("http://localhost:4000/events/" + newEvent.id, {
      method:"PUT",
      body: JSON.stringify(data),
      "Content-Type": "application/json"
    })

    if (response.ok){
     alert("event edited")
      setnewEvent({
       title:newEvent.title,
       description:newEvent.description,
       image:newEvent.image,
       time:newEvent.time,
       location:newEvent.location,
       date: newEvent.date
      })
      setLoading(false)
    
    }else{
      alert("something went wrong")
    }

  }
   

  useEffect(()=>{
     
    editEvent()
  },[])
 
  
   
  if (loading){
      return (
          [1,2,3,4,5,6,7,8,9,10].map(event=>(
          <div key={event}>
            <Spinner animation="border" variant = "danger" role="status" >
            <span className="sr-only ">Loading...</span>
          </Spinner>
        </div>
          )

      ))
          
  }
    return (
        <>
       
          
        {event && !loading? (
            <>
            <div className="container">
                <div className="row align-content-center justify-content-center">
                    <div className="col col-lg-6">
                    <h1 >{event.title}</h1>
                <div>
                   <img src={event.image} alt="single event" style= {{width:"80%", height:"80%"}}/>
               </div><br/>
               <div>
                   <p>Location: <strong>{event.location}</strong></p>
                   <p>Date: <strong>{event.date}</strong></p>
                   <p>Time: <strong>{event.time}</strong></p>
               </div>       
                </div>
                <div className="col col-lg-6">
                    <p className = " align-content-center">{event.description}</p>
                </div>
                 
            </div>
            
        </div>
            </>
        ):(
            <h2 className= "text-center">No Event found</h2>
        )} 

<Modal show ={showModal}>
        <Modal.Header closeButton onClick= {()=> setShowModal(false)}>
    <Modal.Title>Add Event</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Form onSubmit = {editEvent}>
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
    <Button variant="secondary" onClick = {()=>setShowModal(false)}>Close</Button>
    <Button variant="primary" onClick= {editEvent}>Edit Event</Button>
  </Modal.Footer>
  </Modal>
        <button className="btn-primary" onClick = {()=>setShowModal(true)}>Open Modal</button>
        

        </>
       
    )
}

export default EventDetails
