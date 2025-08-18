import background from '../images/67588c6087990.webp';

export const Categorie = () => {
    return (
        <div
            style={{
                borderRadius: '10px',
                color: 'white',
                border: '1px solid black',
                width: '80%',       /* Largura da div */
                // height: '300px',      /* Altura da div */
                'background-image': `linear-gradient(90deg,rgba(0, 0, 0, 0.7) 20%, rgba(255, 255, 255, 0) 70%)
, url(${background})`, /* Caminho da imagem */
                'background-size': 'cover',     /* Ajusta a imagem ao espaço */
                'background-repeat': 'no-repeat', /* Evita repetição */
                'background-position': 'center',  /* Centraliza a imagem */
            }}
        >
            <h1
                style={{
                    marginLeft: '40px'
                }}
            >{">> MASSAS"}</h1>
        </div>
    );
}