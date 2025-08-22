import OrderDetailsCSS from './OrderDetails.module.css';

export const OrderDetails = () => {
  const { overlay, background, container2, left,right, xis,teste } = OrderDetailsCSS;
  return (
    <div className={background}>
      <div className={overlay}>
        <div className={`${container2} ${teste}`}>
          <div className={`${xis} ${teste}`}>xis</div>
        </div>
        <div className={`${left} ${teste}`}>
          <h1>fxgsgs do Pedido</h1>
        </div>
        <div className={right}>
          
        </div>
      </div>
    </div>
  );
};
