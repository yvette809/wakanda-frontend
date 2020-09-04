import React from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'

const Event = ({key, event}) => {
    const {title, description,image,Date,Time, _id,createdAt} = event;

   
    return (
        <>
          <div style={{ boxShadow:"5px 5px 5px 5px  grey"}} >
          <Link to={`/eventdetails/${_id}`}>
              <img src = {image} alt = "events"  style={{height:"80%", width:"80%",objectFit:"cover"}} id="main_img"/>
              </Link>
          <div>
          <Link to={`/eventdetails/${_id}`}><p className= "event_title">{title}</p></Link>
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

export default Event
