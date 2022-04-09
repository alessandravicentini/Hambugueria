import { Product } from "../Product"

export const ProductList = ({products, handleClick, inputValue, setInputValue, showProducts, display, setDisplay}) => {
    return (
        <div className="main-div">
        <div className={display}>
        <p>Resultados para <strong>{inputValue}</strong></p>
        <button className="button-main-div" onClick={() => {
            showProducts('')
            setInputValue('')
            setDisplay('div-results-hidden')
            }}>Voltar</button>
        </div>
        <div className="div-all-products">
            {products.map((product) => <Product product={product} handleClick={handleClick} key={product.id}/>)}
        </div>
        </div>

    )
}