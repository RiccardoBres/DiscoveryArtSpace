import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import IntroHero from '../../Molecules/HeroMolecules/IntroHero';
import CarouselHero from '../../Molecules/HeroMolecules/CarouselHero';


const Hero = () => {
  return (
    <Container fluid className='container-hero'>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <IntroHero />
        </Col>
        <Col lg={12} md={12} sm={12} className='p-0'>
          <CarouselHero />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
