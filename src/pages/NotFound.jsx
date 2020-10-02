import React from 'react'

const NotFound = () => {
    return (
        <div className= "text-center mt-3">
        <h1 className= "text-large text-primary ">
            <i className= "fa fa-exclamation-triangle mr-2"></i>Page Not Found
        </h1>
        <p className="font-weight-bolder" style={{fontSize: "2rem"}}>Sorry, this page does not exist</p>
            
        </div>
    )
}

export default NotFound
