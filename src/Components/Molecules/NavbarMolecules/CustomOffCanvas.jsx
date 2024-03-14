import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomButton from '../../Atoms/CustomButton';
import { useNavigate } from 'react-router-dom';

const CustomOffCanvas = ({ show, onHide }) => {
  const navigate = useNavigate();

  const handleArtistPage = () => {
    navigate('/artists');
    console.log('hello world');
  };

  const offCanvasTitle = ['Home', 'LineUp', 'Ticket', 'Beyond the Artist', 'Beyond the Music'];

  return (
    <>
      <Offcanvas show={show} onHide={onHide}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container-list-item">
            <CustomTitle text='Home' className='medium-title' onClick={() => navigate('/home')} />
            <CustomTitle text='LineUp' className='medium-title' onClick={() => navigate('/lineup')} />
            <CustomTitle text='Ticket' className='medium-title' onClick={() => navigate('/ticket')} />
            <CustomTitle text='Beyond the Artist' className='medium-title' onClick={handleArtistPage} />
            <CustomTitle text='Beyond the Music' className='medium-title' onClick={() => navigate('/musicians')} />
          </div>
          <hr/>
          <div className="container-list-item info">
            <CustomTitle text='Help & Info' className='small-title' />
            <CustomTitle text='Getting Here' className='small-title' />
          </div>
          <hr/>
          <div className="container-list-item info ">
            <CustomTitle text='Contact Us' className='small-title' />
            <CustomTitle text='Contribute' className='small-title' />
          </div>
          <hr/>
          <div className="container-list-item info w-30 mt-1">
            <CustomButton text='Ticket' className='button-light'/>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomOffCanvas;
