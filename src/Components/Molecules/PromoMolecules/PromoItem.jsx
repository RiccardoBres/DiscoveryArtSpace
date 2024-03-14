import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';

const PromoItem = () => {
    const navigate = useNavigate();
    const handleNavigate = (event, destination) => {
        event.preventDefault();
        navigate(destination);
        window.scrollTo(0, 0); 
    };

    return (
        <>
            <div className="container-promo">
                <div className='promo-item first'>
                    <div>
                        <CustomTitle text='DISCOVERY ART SPACE - FIRST EDITION' className='medium-title'/>
                        <CustomParagraph className='medium-p my-3' text= "The inaugural edition of Discovery Art Space was a celebration of our local artists and musicians." />
                        <CustomParagraph onClick={(e) => handleNavigate(e, "/first-event")} text='Gallery' className='medium-p cursor-pointer ' />
                        <hr className='w-25 m-0' />
                    </div>
                </div>
                <div className='promo-item second'>
                    <div>
                        <CustomTitle text='DISCOVERY ART SPACE - SECOND EDITION' />
                        <CustomParagraph text='The second edition of Discovery Art Space delivered even more excitement, creativity, and inspiration.' className='medium-p cursor-pointer my-3' />
                        <CustomParagraph onClick={(e) => handleNavigate(e, "/second-event")} text='Gallery'className='medium-p cursor-pointer '  />
                        <hr className='w-25 m-0' />
                    </div>
                </div>
                <div className='promo-item third'>
                    <div>
                        <CustomTitle text='DISCOVERY ART SPACE - THIRD EDITION' />
                        <CustomParagraph text='The third installment of Discovery continued to showcase the incredible talents of our local artists and musicians.' className='medium-p cursor-pointer my-3' />
                        <CustomParagraph onClick={(e) => handleNavigate(e, "/third-event")} text='Gallery'className='medium-p cursor-pointer '  />
                        <hr className='w-25 m-0' />
                    </div>
                </div>

            </div>
        </>

    )
}

export default PromoItem;
