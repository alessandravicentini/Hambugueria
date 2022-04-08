import { CartProduct } from "../CartProduct"
import { CartTotal } from "../CartTotal"

export const Cart = ({currentSale, setCurrentSale}) => {
    return currentSale === 0 ? (
        <div className="div-empty-cart">
            <div className="header-cart"><p>Carrinho de compras</p></div>
            <div className="body-empty-cart">
                <p>Seu carrinho está vazio</p>
                <span>Adicione itens</span>
            </div>
        </div>
    ) : (
        <div className="div-cart">
            <div className="header-cart"><p>Carrinho de compras</p></div>
            <div className="body-cart">
                
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
            
            </div>
            <CartTotal />
        </div>
    )
}