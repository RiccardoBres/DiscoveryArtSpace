import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import IntroHero from '../../Molecules/HeroMolecules/IntroHero';


const Hero = () => {
  return (
    <Container fluid className='container-hero'>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <IntroHero />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
