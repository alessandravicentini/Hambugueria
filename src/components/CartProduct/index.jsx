import teste from './teste.png'

export const CartProduct = () => {
    return (
        <div className="div-cart-product">
            <div className='img-cart-product'>
            <img src={teste} alt="" />
            </div>
            <div className="div-info-cart-product">
                <p>nome</p>
                <span>categoria</span>
            </div>
            <button>Remover</button>
        </div>
    )
}