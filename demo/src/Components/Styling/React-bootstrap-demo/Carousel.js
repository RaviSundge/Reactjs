import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const Carousel2 = () => {
    return ( <>
        <Carousel variant='dark'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./a1.jpg"
      alt="First slide"
      height={400}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./a2.jpg"
      alt="Second slide"
      height={400}
    />

    <Carousel.Caption>
      <h3 className='text-dark'>Hello Ravindra</h3>
      <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./a3.jpg"
      alt="Third slide"
      height={400}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </> );
}
 
export default Carousel2;