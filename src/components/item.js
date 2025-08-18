import food from '../images/renata-imagem-receitas-lasanha-a-bolonhesa-share.jpg';
import itemModule from './Item.module.css';

export const Item = () => {
    const {addButton, container, text, foodimage} = itemModule
    return (
        <div
        className={container}
        >
            <div
            className={text}
            >
                <h2>Lasanha Média</h2>
                <p>Reunimos os 4 sabores mais pedidos na casa em uma pizza com desconto</p>
                <p>R$ 23,90</p>
            </div>
            <img 
            className={foodimage}
            src={food} alt="lasanha" />
            <div
            className={addButton}
            >+</div>
        </div>
    );
};
