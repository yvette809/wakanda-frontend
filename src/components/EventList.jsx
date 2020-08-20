import React from 'react'
import Event from './Event'

const EventList = ({events, loading}) => {
    
    return (
        <>
         <h1 style= {{fontSize:"1.3rem", textTransform:"uppercase",color:"white"}} className= "text-center mb-4">Upcoming Events</h1><hr/>
        {!events && !loading? (<h1>Events not found</h1>)
        :(
            events.map(event => (
          <Event key= {event.id} event = {event}/>

            ))
        )}
        {/* <h1 style= {{fontSize:"1rem", textTransform:"uppercase",color:"white"}}>Upcoming Events</h1>
        
        <div>
          <p>August 15th, Training Alidhem Pitch</p>
          <p>10.30 - 12.30</p>
          <hr className= "event_divider"/>
        </div>         */}
        </>
    )
}

export default EventList
