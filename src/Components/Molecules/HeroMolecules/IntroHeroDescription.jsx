import React from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import CustomTitle from '../../Atoms/CustomTitle';
import Person1 from '../../../Layout/Assets/ArtistImages/DAS22-Artists/07_279130523_6.webp';
import Person2 from '../../../Layout/Assets/ArtistImages/DAS22-Artists/10_278849339_5.webp';
import Person3 from '../../../Layout/Assets/ArtistImages/DAS22-Artists/06_279492825_1.webp';
import './IntroHeroDescription.css';
import CustomImage from '../../Atoms/CustomImage';

const IntroHeroDescription = () => {
    return (
        <div className='container-intro-hero-description'>
            <div>
                <CustomTitle text='Meet the Team Behind the Event' className='very-big-title' />
                <CustomParagraph text='Discover the creative minds shaping the experience.' className='medium-p' />
                <div className="organizers-section">
                    <CustomTitle text='Organizers' className='organizers-title' />
                    <div className="organizer-cards">
                        <div className="organizer-card">
                            <CustomImage src={Person1} alt="Organizer 1" className="organizer-image" />
                            <CustomTitle text="Jasmen Bresolin" className="organizer-name medium-p" />
                        </div>
                        <div className="organizer-card">
                            <CustomImage src={Person2} alt="Organizer 2" className="organizer-image" />
                            <CustomTitle text="Lorenzo Coccheo Filetti" className="organizer-name medium-p" />
                        </div>
                        <div className="organizer-card">
                            <CustomImage src={Person3} alt="Organizer 3" className="organizer-image" />
                            <CustomTitle text="Fabio Saccardo" className="organizer-name medium-p" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroHeroDescription;
