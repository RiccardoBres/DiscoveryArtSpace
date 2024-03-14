import React from 'react';
import CustomNavbar from '../Components/Organism/CustomNavbar/CustomNavbar';
import Hero from '../Components/Organism/HeroSection/Hero';
import PromoItem from '../Components/Molecules/PromoMolecules/PromoItem';
import DescriptionDiscovery from '../Components/Organism/DescriptionSection/DescriptionDiscovery';



const Home = () => {
  return (
    <>
    <CustomNavbar/>
    <Hero/>
    <DescriptionDiscovery/>
    <PromoItem/>
    </>
  )
}

export default Home;
