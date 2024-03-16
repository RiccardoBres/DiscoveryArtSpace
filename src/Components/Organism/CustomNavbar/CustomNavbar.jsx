import {useEffect, useState} from 'react';
import Nav from '../../Molecules/NavbarMolecules/Nav';

const CustomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Stato per tenere traccia dello scroll


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`custom-navbar ${isScrolled ?  'scrolled' : 'custom-navbar'}`}>
      <Nav/>
    </div>
  )
}

export default CustomNavbar
