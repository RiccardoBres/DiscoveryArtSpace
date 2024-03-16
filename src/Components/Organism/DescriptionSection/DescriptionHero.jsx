import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './descriptionSection.css';
import IntroHeroDescription from '../../Molecules/HeroMolecules/IntroHeroDescription';

const DescriptionHero = () => {
  return (
    <Container fluid className='container-hero-description'>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <IntroHeroDescription />
        </Col>
      </Row>
    </Container>
  )
}

export default DescriptionHero
