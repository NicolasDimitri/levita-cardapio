import headerCSS from './Header.module.css';
import logo from '../images/images.jpeg';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 150) {
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
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Logo Levita Massas" />
      <div>
        <h1>Levita Massas</h1>
        <span>
          R. Pedro da Costa Agra, 296 - José Pinheiro, Campina Grande, PB
        </span>
        <p>Aberto até as 21:00</p>
      </div>
    </header>
  );
};
