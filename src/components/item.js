import food from '../images/renata-imagem-receitas-lasanha-a-bolonhesa-share.jpg';

export const Item = () => {
    return (
        <div
            style={{
                border: '1px solid black',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                margin: '10px',
                borderRadius: '10px',
                // width: '20%'
                width: '90%',
                height: '150px',
            }}
        >
            <div
                style={{
                    marginLeft: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    // margin: ' 0px'
                }}
            >
                <h2
                style={{
                    margin: '0px'
                }}
                >Lasanha Média</h2>
                <p
                style={{
                    margin: '0px'
                }}
                >Reunimos os 4 sabores mais pedidos na casa em uma pizza com desconto</p>
                <p
                style={{
                    margin: '0px'
                }}
                >R$ 23,90</p>
            </div>
            <img style={{
                width: '140px',
                height: '140px',
                borderRadius: '10px'
            }} src={food} alt="lasanha" />
        </div>
    );
};
