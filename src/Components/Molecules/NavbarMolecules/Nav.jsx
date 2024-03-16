import {useState} from 'react';
import Logo from '../../../Layout/Assets/Grafiche/Logo.jpg'
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomImage from '../../Atoms/CustomImage';
import { RxHamburgerMenu } from "react-icons/rx";
import CustomOffCanvas from './CustomOffCanvas';

const Nav = () => {

 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='navbar-content'>
            <div className="container-nav">
                <RxHamburgerMenu className='menu-icon' onClick={handleShow}/>
            </div>
            <div className="container-logo">
                <div className="container-info-nav ">
                    <CustomImage src={Logo} className='logo' />
                </div>
                <hr className='separator' />
                <div className="container-info-nav address container-nav">
                    <CustomTitle text='San Donà Di Piave, Ve' className='small-title' />
                    <CustomTitle text='June 13-16, 2024' className='small-title' />
                </div>
            </div>
            <div className="container-nav d-flex justify-content-end">
                <CustomButton text='Ticket' className='button-light' />
            </div>
            <CustomOffCanvas show={show} onHide={handleClose}/>
        </div>
    )
}

export default Nav
