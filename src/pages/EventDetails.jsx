import React, {useState,useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap'

const EventDetails = () => {
    const {id} = useParams();
    const[event, setEvent] = useState("")
    const [loading, setLoading] = useState(false)

  useEffect(()=>{
      setLoading(true)
   
      const getSingleEvent = async ()=>{
        setLoading(true)
          try{
              const response = await fetch(`http://localhost:4000/events/${id}`)
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

  },[id])
  
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
                    <h1>{event.title}</h1>
                <div>
                   <img src={event.image} alt="single event"/>
               </div><br/>
               <div>
                   <p>Location: <strong>{event.Location}</strong></p>
                   <p>Date: <strong>{event.Date}</strong></p>
                   <p>Time: <strong>{event.Time}</strong></p>
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

        </>
       
    )
}

export default EventDetails
