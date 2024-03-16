import React from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomImage from '../../Atoms/CustomImage';
import LocandinaHero from '../../../Layout/Assets/Grafiche/DAS2022 GRAFICHE/LocandinaFirstEdition.jpeg';
const IntroHero = () => {
    return (
        <div className='container-intro-hero'>
            <div className="intro-hero">
                <CustomTitle text='1-DAY, 2-DAY & 4-DAY TICKETS ON-SALE NOW!' className='title-hero' />
                <CustomParagraph text='GET YOURS STARTING AT $25 DOWN WITH A LAYAWAY PLAN.' className='small-title w-75' />
                <CustomButton text='BUY TICKETS' className='button mt-4' />
            </div>
                <CustomImage src={LocandinaHero} />
        </div>
    )
}

export default IntroHero
