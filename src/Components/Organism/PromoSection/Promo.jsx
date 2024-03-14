import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PromoItem from '../../Molecules/PromoMolecules/PromoItem';


const Promo = () => {
    return (
        <Container fluid className='container-hero'>
            <Row>
                <PromoItem />
            </Row>
        </Container>
    )
}

export default Promo
