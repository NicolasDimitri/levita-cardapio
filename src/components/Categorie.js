import categorieCSS from './Categorie.module.css';

export const Categorie = () => {
    const {cssCategorie} = categorieCSS;
    return (
        <div
            className={cssCategorie}
        >
            <h1>{">> MASSAS"}</h1>
        </div>
    );
}