import React from 'react';
import CustomImage from '../../Atoms/CustomImage';
import { Col } from 'react-bootstrap';
import './ArtistMolecules.css'

const ArtistCard = ({ firstEditionArtists, secondEditionArtist }) => {
    return (
        <>
            {secondEditionArtist.map((photo, index) => (
                <Col lg={4} md={6} sm={12} xs={12} key={index} className='p-0' >
                    <CustomImage src={photo.imagePath} key={index} className='artist-image' />
                </Col>
            ))}
            {firstEditionArtists.map((photo, index) => (
                <Col lg={4} md={6} sm={12} xs={12} key={index} className='p-0' >
                    <CustomImage src={photo.imagePath} key={index} className='artist-image' />
                </Col>
            ))}

        </>
    )
}

export default ArtistCard
