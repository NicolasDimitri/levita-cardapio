import navbarCSS from './NavBar.module.css';
import { useState } from 'react';

export const NavBar = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = ['Inicio', 'Promoções', 'Pedidos', 'Entrar/Cadastrar'];
  const handleClick = (index) => {
    setSelectedButton(index); // Define o botão clicado como selecionado
  };
  return (
    <div className={navbarCSS.containerNav}>
      <nav className={navbarCSS.navbar}>
        {buttons.map((button, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={selectedButton === i ? navbarCSS.selected : ''}
          >
            {button}
          </button>
        ))}
      </nav>
    </div>
  );
};
