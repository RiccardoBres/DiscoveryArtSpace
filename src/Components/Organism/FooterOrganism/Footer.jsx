import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import FooterIcons from '../../Molecules/FooterMolecules/FooterIcons'
import FooterContent from '../../Molecules/FooterMolecules/FooterContent'
const Footer = () => {
    return (
        <footer className='footer'>
            <FooterContent />
            <FooterIcons />
        </footer>
    )
}

export default Footer