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
  const [display, setDisplay] = useState('div-results-hidden')

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response) => response.json())
    .then((data) => {
      setProducts(data);
      setFilteredProducts(data)
      setInputValue('')
    });
  }, [])


  const showProducts = (inputValue) => {
    const filter = products.filter((product) => product.name.toLowerCase().includes(inputValue.toLowerCase()) || product.category.toLowerCase().includes(inputValue.toLowerCase()))
    setFilteredProducts(filter)
  }
  
  const handleClick = (clickedId) => {
    const result = products.find((product) => product.id === clickedId)

    setCurrentSale([...currentSale, result])
  }


  return (
    <div className="App">

      <Header showProducts={showProducts} inputValue={inputValue} setInputValue={setInputValue} setDisplay={setDisplay}/>
      <div className='div-content'>
      <ProductList products={filteredProducts} handleClick={handleClick} inputValue={inputValue} setInputValue={setInputValue} showProducts={showProducts} display={display} setDisplay={setDisplay}/>
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} cartTotal={cartTotal} setCartTotal={setCartTotal} />
      </div>

    </div>
  );
}

export default App;
