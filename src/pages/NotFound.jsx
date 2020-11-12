import React from 'react'

const NotFound = () => {
    return (
        <div className= "text-center not_found ">
            <div className="container" style={{marginTop:"70px"}}>
            <h1 className= "text-large text-primary ">
            <i className= "fa fa-exclamation-triangle mr-2"></i>Page Not Found
        </h1>
        <p className="font-weight-bolder" style={{fontSize: "2rem"}}>Sorry, this page does not exist</p>
            

            </div>
       
        </div>
    )
}

export default NotFound
