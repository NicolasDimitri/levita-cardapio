import optionOrderCSS from './OptionOrder.module.css';
import order from '../images/renata-imagem-receitas-lasanha-a-bolonhesa-share.jpg';

export const OptionOrder = ({ id }) => {
  const { optionOrder, optionLabel, optionInfo } = optionOrderCSS;
  return (
    <li className={optionOrder}>
      <label for={`optionOrder${id}`} className={optionLabel}>
        <img src={order} alt="" />
        <div className={optionInfo}>
          <span>Opção {id}</span>
          <span>Descrição da opção {id}</span>
          <span>R$ {id * 5},00</span>
        </div>
      </label>
      <input type="checkbox" id={`optionOrder${id}`} />
    </li>
  );
};
