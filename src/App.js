import './App.css';
import './components/Logo/style.css'
import './components/InputSearch/style.css'
import './components/Header/style.css'
import './components/Cart/style.css'
import './components/CartProduct/style.css'
import './components/CartTotal/style.css'
import './components/Product/style.css'
import './components/ProductsList/style.css'

import { Header } from './components/Header';
import { ProductList } from './components/ProductsList';
import { Cart } from './components/Cart';

import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response) => response.json())
    .then((data) => setProducts(data))
  }, [filteredProducts])

  const showProducts = (inputValue) => {
    setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(inputValue.toLowerCase())))
    console.log(filteredProducts)
  }
  
  const handleClick = (clickedId) => {
    // const result = products.find((product) => product.id === 2)
    // setCurrentSale(products.find((product) => product.id === clickedId))
    // setCurrentSale([...currentSale, sale])
    //recebe id do produto por parâmetro e usa find pra procurar no [products] e adicionar no currentSale
  }


  return (
    <div className="App">

      <Header showProducts={showProducts} inputValue={inputValue} setInputValue={setInputValue}/>
      <div className='div-content'>
      <ProductList products={products} handleClick={handleClick}/>
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </div>

    </div>
  );
}

export default App;
