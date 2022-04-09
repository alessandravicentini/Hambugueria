export const CartProduct = ({product, currentSale, setCurrentSale, setCartToRender}) => {

    const priceConverted = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.price)

    const productsOnList = currentSale.filter((item) => item === product)
    const productCount = productsOnList.length

    const removeFromCart = (removed) => {

        const salesAtt = []

        for (let i = 0; i < currentSale.length; i++){
            if (i !== currentSale.indexOf(removed)){
                salesAtt.push(currentSale[i])
            }
        }

        setCurrentSale(salesAtt)
    }

    return (
        <div className="div-cart-product">
            <div className='img-cart-product'>
            <img src={product.img} alt="imagem-produto" />
            </div>
            <div className="div-info-cart-product">
                <p>{product.name}</p>
                <span>{product.category}</span>
                <span className="span-qtd">{priceConverted}</span>
            </div>
            <div className="div-cart-product-right">
                <span className="span-qtd">Qtd: {productCount}</span>
                <button onClick={() => {
                    removeFromCart(product)
                    setCartToRender([])
                    }}>Remover</button>
            </div>
        </div>
    )
}
