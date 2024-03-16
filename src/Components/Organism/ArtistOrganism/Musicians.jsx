import React from 'react';
import {Container, Row} from 'react-bootstrap';
import MusiciansCard from '../../Molecules/MusiciansMolecules/MusiciansCard';
import {MusiciansFirstEditionMetadata, MusiciansSecondEditionMetadata  } from '../../Molecules/ArtistMolecules/ArtistAndMusiciansDataset';

const Musicians = () => {
  return (
    <>
    <Container fluid className='container-artist'>
        <Row>
            <MusiciansCard firstEditionMusician={MusiciansFirstEditionMetadata} secondEditionMusician={MusiciansSecondEditionMetadata} />
        </Row>
    </Container>
    </>
  )
}

export default Musicians
