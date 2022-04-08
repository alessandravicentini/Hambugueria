import { Product } from "../Product"

export const ProductList = ({products, handleClick}) => {
    return (
        <div className="div-all-products">
            {products.map((product) => <Product product={product} handleClick={handleClick}/>)}
        </div>
    )
}