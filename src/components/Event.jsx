import React from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'

const EventList = ({key, event}) => {
    const {title, description,image,Date,Time, _id,createdAt} = event;

    setTimeout((events)=>{
        return events
    },60)
    
    return (
        <>
          <div >
          <Link to={`/eventdetails/${_id}`}><img src = {image} alt = "events"/></Link>
          <div>
          <Link to={`/eventdetails/${_id}`}><p>{title}</p></Link>
          {/* <p>{Time}</p> */}
          {/* <p>{description}</p> */}
          {/* <small>{moment( Date).format("YYYY-MM-DD hh:mm:ss")}</small> */}
          <small className= "text-left"> Date posted: <Moment format="YYYY/MM/DD">{createdAt}</Moment></small>
          <hr className= "event_divider"/>
          </div>
        </div>
      

        </>
    )
}

export default EventList
