import OrderDetailsCSS from './OrderDetails.module.css';
import orderPhoto from '../images/renata-imagem-receitas-lasanha-a-bolonhesa-share.jpg';
import { OptionOrder } from './OptionOrder';

export const OrderDetails = () => {
  const lista = [1, 2, 3, 4, 5, 6, 7, 8];
  const { background, overlay, containerX, xis, container, left, right } =
    OrderDetailsCSS;
  return (
    <div className={background}>
      <div className={overlay}>
        <div className={containerX}>
          <div className={xis}>xis</div>
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
            {lista.map((e) => (
              <OptionOrder id={e} />
            ))}

            <h1>right</h1>
            <button className="add-to-cart">
              Adicionar ao carrinho - R$ 49,90
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
