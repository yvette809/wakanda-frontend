import React from 'react'
import{Link} from 'react-router-dom'
import logo from  '../../src/wlogo.jpg'


const  Footer = ()=>{
    return(
<footer>
  <div className=" container">     
    <div className="row d-flex-inline text-white">
      <div className="col-sm-3">
          <h3 className = "text-white" >Contact Us</h3>
            <a href="wakandajk2020@gmail.com" class="contact-link">wakandajk2020@gmail.com</a><br/>
            <a href="tel:0121234" class="contact-link">(0046) 707401992</a>
            <div className=" footer-social">
            <ul className="d-flex justify-content-between align-start ">
              <li className= "mx-2"><a href="https://www.facebook.com/?ref=tn_tnmn"><i className="fa fa-facebook"></i></a></li>
              <li className= "mx-2"><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li className= "mx-2"><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li className= "mx-2"><a href="#"><i className="fa fa-youtube"></i></a></li>
              <li className= "mx-2"><a href="#"><i className="fa fa-rss"></i></a></li>
            </ul>
            </div> 
          </div>
          <div className="col-sm-3">
           <div className=" footer-social">
            <ul>
             <Link to='/'><li>Home</li></Link> 
             <Link to='/mission'><li>About us</li></Link> 
             <Link to='/testimonials'><li>Testimonials</li></Link> 
             <Link to="/events"><li><button className= "update">Stay Updated</button></li></Link>
             
            </ul>
            </div> 
          </div>
          <div className="col-sm-3">
           <div className=" footer-social">
            <ul>
            <Link to='/membership'><li>Membership</li></Link> 
            <Link to='/register'><li>Register</li></Link> 
                
            </ul>
            </div> 
          </div>
          <div className="col col-sm-3">
            <Link to="/"><img src={logo} alt= "wsk logo" style={{width:"50%",padding:"0"}}/></Link>
          </div>
        </div>
      </div>
    </footer> 
      
     

    )
}


export default Footer