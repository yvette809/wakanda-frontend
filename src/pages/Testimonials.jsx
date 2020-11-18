
import React from 'react'
import { Container,Carousel } from 'react-bootstrap'
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'
import pic7 from '../images/pic7.jpg'

const Testimonials = () => {
    return (
 <Container style= {{marginTop: "120px"}}>
        <div  className= "text center">
        <h2>At WSK, We Make Sports lovers Happy</h2>
        <p>These are some of our exciting stories</p>
        </div>
   <Carousel className="mb-4 ">
     <Carousel.Item>
      <img
      className="d-block w-100 img-carousel"
      src={pic1}
      alt="First slide "
      />
     <Carousel.Caption>
       <div  className= "test">
       <h3>Jacky, Mukumu,Thomas</h3>
      <p>We look forward to every saturday to Train at WSK</p>
       </div>
      
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 img-carousel"
      src={pic2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <div  className= "test">
      <h3>Babies Corner</h3>
      <p>We love to come here and train with our friends. Love Terrel,Eliora</p>

      </div> 
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 img-carousel"
      src={pic3}
      alt="Third slide"
    />

     <Carousel.Caption>
       <div  className= "test">
       <h3>Jacky</h3>
      <p>WSK gives me confidence.I see the game well-ahead of time</p>
       </div>
     
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      className="d-block w-100 img-carousel"
      src={pic4}
      alt="Fourth slide "
      />
     <Carousel.Caption>
       <div  className= "test">
       <h3>George</h3>
      <p>I am the king of WSK.</p>
       </div>   
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      className="d-block w-100 img-carousel"
      src={pic5}
      alt="Fifthslide "
      />
     <Carousel.Caption>
       <div  className= "test">
       <h3>Bernard, Raymond,Festus & OJ</h3>
      <p>We make Wsk what it is. At wsk, we have maximum fun</p>
       </div>
      
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      className="d-block w-100 img-carousel"
      src={pic6}
      alt="sixth slide "
      />
     <Carousel.Caption>
       <div  className= "test">
        <h3>Anselm,Abang</h3>
      <p>We want more of this.</p>
      </div>
      
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      className="d-block w-100 img-carousel"
      src={pic7}
      alt="seventh slide "
      />
     <Carousel.Caption>
       <div className= "test">
       <h3>Goal Medal</h3>
      <p>We want more of these gold medals. we make WSk proud</p>
       </div>
     
    </Carousel.Caption>
    </Carousel.Item>  
</Carousel>
  
    </Container>
    )
}

export default Testimonials
