import React from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomImage from '../../Atoms/CustomImage';
import Gelo from '../../../Layout/Assets/Sponsor/gelo-logo.png';
import RedBull from '../../../Layout/Assets/Sponsor/Redbull-logo.png';
import Canella from '../../../Layout/Assets/Sponsor/canella-logo.png';
import Aperol from '../../../Layout/Assets/Sponsor/Aperol-logo.png';
import Cola from '../../../Layout/Assets/Sponsor/Cola-logo.png';
import JackDaniels from '../../../Layout/Assets/Sponsor/Jack-Daniels-Logo.png';
import Campari from '../../../Layout/Assets/Sponsor/campari-logo.png';
import Corona from '../../../Layout/Assets/Sponsor/corona-logo.png';

import './HeroFinal.css'


const HeroFinal = () => {


    return (
        <div className='container-intro-gallery-hero'>
            <div>
                <CustomTitle text='PARTNERS' className='medium-title' />
            </div>
            <div className='container-item-cards p-0'>
                <CustomImage src={RedBull} alt="RedBull Logo" className="sponsor-logo" />
                <CustomImage src={Cola} alt="Cola Logo" className="sponsor-logo" />
                <CustomImage src={JackDaniels} alt="JackDaniels Logo" className="sponsor-logo" />
                <CustomImage src={Aperol} alt="Aperol Logo" className="sponsor-logo" />
               {/*  <CustomImage src={Gelo} alt="Gelo Logo" className="sponsor-logo" />
                <CustomImage src={Canella} alt="Canella Logo" className="sponsor-logo" /> */}
            </div>
            <div className='container-item-cards'>
                <CustomImage src={Corona} alt="Corona Logo" className="sponsor-logo" />
                <CustomImage src={Campari} alt="Campari Logo" className="sponsor-logo" />
                <CustomImage src={Canella} alt="Canella Logo" className="sponsor-logo" />
            </div>

        </div>
    )
}

export default HeroFinal;
