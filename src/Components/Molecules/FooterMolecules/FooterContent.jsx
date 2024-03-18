import React from 'react';
import './FooterMolecules.css';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';


const FooterContent = () => {
  return (
    <>
    <div className="container-footer">
      <div className='d-flex flex-column'>
        <CustomTitle text="Discovery Art Space" className="medium-title" />
        <CustomParagraph text="Art & Music" className="medium-p" />
      </div>
      <div className='info-footer'>
        <CustomTitle text="Teams" className="small-title" />
        <CustomTitle text="Faq" className="small-title" />
        <CustomTitle text="Submit a ticket" className="small-title" />
      </div>
      <div className='info-footer'>
        <CustomTitle text="Service" className="small-title" />
        <CustomTitle text="Theme Tweak" className="small-title" />
      </div>
      <div className='info-footer'>
        <CustomTitle text="Show Case" className="small-title" />
        <CustomTitle text="Support" className="small-title" />

      </div>
      <div className='info-footer'>
        <CustomTitle text="About Us" className="small-title" />
        <CustomTitle text="Contact Us" className="small-title" />
        <CustomTitle text="Sponsor" className="small-title" />
      </div>
    </div>
  </>
  )
}

export default FooterContent
