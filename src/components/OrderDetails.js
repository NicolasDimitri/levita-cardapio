import OrderDetailsCSS from './OrderDetails.module.css';
import orderPhoto from '../images/renata-imagem-receitas-lasanha-a-bolonhesa-share.jpg';

export const OrderDetails = () => {
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
          </div>
          <div className={right}>
            <div>
              
            </div>
            <h1>right</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
