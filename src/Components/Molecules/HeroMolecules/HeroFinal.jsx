import React from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomImage from '../../Atoms/CustomImage';
import { useNavigate } from 'react-router-dom';
import PromoItem from '../PromoMolecules/PromoItem';

const HeroFinal = () => {


    return (
        <div className='container-intro-gallery-hero'>
            <div>
                <CustomTitle text='Discovery Art Space' className='big-title' />
            </div>
            <div className='container-item-cards'>
                <div>
                    <CustomTitle text="Explore Our Gallery" className='medium-title' />
                    <CustomParagraph text='View Our Upcoming Events and Exhibitions.' className='medium-p' />
                </div>
                <div>
                    <CustomTitle text="Lorem Ipsum" className='medium-title' />
                    <CustomParagraph text='Find answers to your questions and learn more about our services.' className='medium-p' />
                </div>
                <div>
                    <CustomTitle text="Lorem Ipsum" className='medium-title' />
                    <CustomParagraph text='Find answers to your questions and learn more about our services.' className='medium-p' />
                </div>
            </div>

        </div>
    )
}

export default HeroFinal;
