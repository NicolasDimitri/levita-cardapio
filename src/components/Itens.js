import Item from './Item';
import itencss from './Itens.module.css';

const Items = () => {
  const { itens } = itencss;
  return (
    <div className={itens}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Items;