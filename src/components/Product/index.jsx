export const Product = ({product, handleClick}) => {
    const priceFormated = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.price)
    return (
        <div className="div-product">
            <div className="div-img-product">
            <img src={product.img} alt="" />
            </div>
            <div className='div-info-product'>
            <h3>{product.name}</h3>
            <span>{product.category}</span>
            <p>{priceFormated}</p>
            <button id={product.id} onClick={(event) => {handleClick(event.target.id)}}>Adicionar</button>
            </div>
        </div>
    )
}