import { Item } from './item';
import itencss from './Itens.module.css';

export const Items = () => {
    const {itens} = itencss
    return (
        <div
        className={itens}
        >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}