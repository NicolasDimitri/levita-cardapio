import OrderDetailsCSS from './OrderDetails.module.css';
import orderPhoto from '../images/renata-imagem-receitas-lasanha-a-bolonhesa-share.jpg';
import OptionOrder from './OptionOrder';
import { useState } from 'react';

const OrderDetails = () => {
  const [textLength, setTextLength] = useState(0);
  const [qtd, setQtd] = useState(1);
  const lista = [1, 2, 3, 4, 5, 6, 7, 8];
  const {
    background,
    overlay,
    containerX,
    xis,
    container,
    left,
    right,
    optionsContainer,
    addToCart,
    qtdButton,
    addCartContainer,
    tetAreaContainer,
  } = OrderDetailsCSS;
  return (
    <div className={background}>
      <div className={overlay}>
        <div className={containerX}>
          <div className={xis}>X</div>
        </div>
        <div className={container}>
          <div className={left}>
            <img src={orderPhoto} alt="" />
            <h1>Lasanha Queijo Mussarela Presunto</h1>
            <p>Serve 5 pessoas</p>
            <h5>
              Para quem gosta de massas, esta lasanha é uma camada de massa
              intercalada com queijo mussarela e presunto, com molho de tomate
              caseiro e queijo parmesão gratinado.
            </h5>
          </div>
          <div className={right}>
            <h2>Opções Disponíveis</h2>
            <div className={optionsContainer}>
              {lista.map((item) => (
                <OptionOrder key={item} id={item} />
              ))}
            </div>
            <div className={tetAreaContainer}>
              <textarea
                placeholder="Observações"
                maxLength="250"
                style={{ resize: 'none' }}
                onChange={(e) => setTextLength(e.target.value.length)}
              />
              <span>{textLength}/250</span>
            </div>
            <div className={addCartContainer}>
              <div className={qtdButton}>
                <button
                onClick={() => setQtd((prevState) => (prevState > 1 ? prevState - 1 : 1  ))}
                >-</button>
                <span>{qtd}</span>
                <button
                onClick={() => setQtd((prevState) => prevState + 1)}
                >+</button>
              </div>
              <button className={addToCart}>
                Adicionar - R$ {(49.90 * qtd).toFixed(2).replace('.', ',')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default OrderDetails;