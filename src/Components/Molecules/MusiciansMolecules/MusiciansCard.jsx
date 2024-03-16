import React from 'react';
import CustomImage from '../../Atoms/CustomImage';
import { Col } from 'react-bootstrap';
import '../ArtistMolecules/ArtistMolecules.css'

const MusiciansCard = ({ firstEditionMusician, secondEditionMusician }) => {
    return (
        <>
            {secondEditionMusician?.map((photo, index) => (
                <Col lg={4} md={6} sm={12} xs={12} key={index} className='p-0' >
                    <CustomImage src={photo.imagePath} key={index} className='artist-image' />
                </Col>
            ))}
            {firstEditionMusician.map((photo, index) => (
                <Col lg={4} md={6} sm={12} xs={12} key={index} className='p-0' >
                    <CustomImage src={photo.imagePath} key={index} className='artist-image' />
                </Col>
            ))}
        </>
    )
}

export default MusiciansCard
