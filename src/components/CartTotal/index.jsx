export const CartTotal = ({cartTotal, setCartTotal, currentSale, setCurrentSale, setCartToRender}) => {
    
    const total = currentSale.reduce((a,b) => a + b.price, 0)
    const totalConverted = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)
    setCartTotal(totalConverted)

    return (
        <div className="div-cart-total">
            <div className="div-total-price">
                <span>Total</span>
                <p>{cartTotal}</p>
            </div>
            <button onClick={() => {
                setCurrentSale([])
                setCartToRender([])
                }}>Remover todos</button>
        </div>
    )
}