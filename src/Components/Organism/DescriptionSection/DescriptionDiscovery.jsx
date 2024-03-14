import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './descriptionSection.css';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import PromoItem from '../../Molecules/PromoMolecules/PromoItem';

const DescriptionDiscovery = () => {
    return (
        <>
         <Container fluid className='container-description-section1'>
            <Row>
                <div className='container-description1'>
                    <Col lg={12} md={12} sm={12} >
                        <div >
                            <CustomTitle text='Discovery Art Space: A Hub for Local Artistic and Musical Exploration' className='big-title' />
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} >
                        <div>
                            <CustomParagraph className='medium-p' text="Discovery Art Space is a vibrant cultural venue dedicated to fostering local talent in the realms of visual arts and music. Through a diverse array of exhibitions, performances, and collaborative events, we aim to provide a platform for emerging artists and musicians to showcase their creativity and connect with the community. Whether you're an aspiring painter, sculptor, musician, or simply an art enthusiast, join us on a journey of discovery and inspiration." />
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
        <Container fluid className='container-description-section2'>
            <Row>
                <div className='container-description2'>
                    <Col lg={12} md={12} sm={12} >
                        <div >
                            <CustomTitle text='Discovery Art Space: A Hub for Local Artistic and Musical Exploration' className='big-title' />
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} >
                        <div>
                            <CustomParagraph className='medium-p' text="Discovery Art Space is a vibrant cultural venue dedicated to fostering local talent in the realms of visual arts and music. Through a diverse array of exhibitions, performances, and collaborative events, we aim to provide a platform for emerging artists and musicians to showcase their creativity and connect with the community. Whether you're an aspiring painter, sculptor, musician, or simply an art enthusiast, join us on a journey of discovery and inspiration." />
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
        </>
       
    )
}

export default DescriptionDiscovery;
