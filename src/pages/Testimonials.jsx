
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
 <Container>
        <h2>At WSK, we Make people Happy</h2>
        <p>These are some of our exciting stories</p>
        <div>
   <Carousel className="mb-4 ">
     <Carousel.Item>
      <img
      className="d-block w-100 img-carousel"
      src={pic1}
      alt="First slide "
      />
     <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 img-carousel"
      src={pic2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 img-carousel"
      src={pic3}
      alt="Third slide"
    />

     <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      className="d-block w-100 img-carousel"
      src={pic4}
      alt="Fourth slide "
      />
     <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      className="d-block w-100 img-carousel"
      src={pic5}
      alt="Fifthslide "
      />
     <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      className="d-block w-100 img-carousel"
      src={pic6}
      alt="sixth slide "
      />
     <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      className="d-block w-100 img-carousel"
      src={pic7}
      alt="seventh slide "
      />
     <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>  
</Carousel>
  </div>
    </Container>
    )
}

export default Testimonials
