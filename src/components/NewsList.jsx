import React from 'react';
import SingleNews from './SingleNews';
import {Spinner} from 'react-bootstrap';

const NewsList = ({news,loading}) =>{
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
     <h1 style= {{fontSize:"1.3rem", textTransform:"uppercase"}} className= "text-center mb-4">Headlines</h1><hr/>
      {!news && !loading? (<h1>News not found</h1>)
      :(
         news.map(n =>
          
         <SingleNews news={n} key ={n.source.id}/>   
        
         ))
      }

         <div className="d-flex justify-content-center align-content-center mb-3 mr-5">
         <span className= "mr-2">previous</span>
         <button className= "mr-2">1</button>
         <button className= "mr-2">2</button>
         <span className= "mr-2">Next</span>
         </div> 
 </>

            
    )
}

export default NewsList
