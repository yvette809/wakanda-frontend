import React from 'react'
import Moment from 'react-moment'

function SingleNews({news,key}) {

    const{author,title,description, url,urlToImage,publishedAt,content} = news;
    
    
    
    return (
        <div className="container">
            <div className="row mb-4"  style={{border:"1px solid blue", boxShadow:"5px 5px 5px 5px  grey"}}>
                <div className="col  col-lg-4 news_img">
                
                <img
                 src={urlToImage} 
                 alt="news pics"
                 className = "py-2"
                 style={{height:"100%", width:"80%", objectFit:"cover"}}
                   />
                </div>
                <div className="col col-lg-6 ">
                <p><Moment format = "YYYY/MM/DD">{publishedAt}</Moment></p>
                <h2 className= " news_description" style={{ textShadow: "1px 1px"}}>{title}</h2>
                <i class="fa fa-caret-right mr-2 text-danger" ></i>
                <span>{description}</span><a href ={url} alt="more news"> Read More...</a>
                <p>Written By:<strong>{author? author : "authorsWithoutName"}</strong></p>
                </div>
            </div>
             
        </div>
        
           
            
            
            
            
            
        
    )
}

export default SingleNews
