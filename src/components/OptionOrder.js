import optionOrderCSS from './OptionOrder.module.css';

export const OptionOrder = ({id}) => {
    const { optionOrder, optionLabel } = optionOrderCSS
    return (
        <li
        className={optionOrder}
        >
            <label for={`optionOrder${id}`} className={optionLabel}>
            <span>Title</span>
            <span>Description</span>
            <span>R$ Price</span>
            </label>
            <input type="checkbox" id={`optionOrder${id}`} />
        </li>
    );
};
