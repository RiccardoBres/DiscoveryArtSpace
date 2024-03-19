import React, {useEffect} from 'react';
import CustomNavbar from '../Components/Organism/CustomNavbar/CustomNavbar';
import Hero from '../Components/Organism/HeroSection/Hero';
import PromoItem from '../Components/Molecules/PromoMolecules/PromoItem';
import DescriptionDiscovery from '../Components/Organism/DescriptionSection/DescriptionDiscovery';
import HeroFinal from '../Components/Molecules/HeroMolecules/HeroFinal';
import Footer from '../Components/Organism/FooterOrganism/Footer';


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
}, [])
  return (
    <>
    <CustomNavbar/>
    <Hero/>
    <DescriptionDiscovery/>
    <PromoItem/>
    <HeroFinal/>
    <Footer/>
    </>
  )
}

export default Home;
