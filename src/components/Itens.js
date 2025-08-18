import { Item } from './item';

export const Items = () => {
    return (
        <div
        style={{
            display: 'grid',
            "grid-template-columns": "repeat(3, 1fr)", 
            width: '1200px',
        }}
        >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}