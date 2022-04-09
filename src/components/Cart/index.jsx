import { CartProduct } from "../CartProduct"
import { CartTotal } from "../CartTotal"

import { useState } from 'react'

export const Cart = ({currentSale, setCurrentSale, cartTotal, setCartTotal}) => {

    const [cartToRender, setCartToRender] = useState([])

    const addToCart = () => {

        for (let i = 0; i < currentSale.length; i++){
            if (!cartToRender.includes(currentSale[i])){
                setCartToRender([...cartToRender, currentSale[i]])
            }
        }
    }

    addToCart()

    return currentSale.length === 0 ? (
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
                {cartToRender.map((product, index) => <CartProduct product={product} key={index} currentSale={currentSale} setCurrentSale={setCurrentSale} cartToRender={cartToRender} setCartToRender={setCartToRender} />)}
            </div>
            <CartTotal cartTotal={cartTotal} setCartTotal={setCartTotal} currentSale={currentSale} setCurrentSale={setCurrentSale} cartToRender={cartToRender} setCartToRender={setCartToRender}/>
        </div>
    )
}