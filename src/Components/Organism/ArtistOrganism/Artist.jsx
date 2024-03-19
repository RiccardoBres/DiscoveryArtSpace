import React from 'react';
import {Container, Row} from 'react-bootstrap';
import ArtistCard from '../../Molecules/ArtistMolecules/ArtistCard';
import './Artists.css'
import {ArtistFirstEditionMetadata, ArtistSecondEditionMetadata,  } from '../../Molecules/ArtistMolecules/ArtistAndMusiciansDataset';

const Artist = () => {
  return (
    <>
    <Container fluid className='container-artist'>
        <Row>
            <ArtistCard firstEditionArtists={ArtistFirstEditionMetadata} secondEditionArtist={ArtistSecondEditionMetadata}/>
        </Row>
    </Container>
    </>
  )
}

export default Artist
