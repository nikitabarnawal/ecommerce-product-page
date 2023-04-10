import React, { useState } from 'react'
import Header from './components/header/header'

import './App.scss'
import Product from './components/product'

function App() {
  const [count, setCount] = useState(0)
  const [addItemToCart, setAddItemToCart] = useState(false)

  const handleIncrement = () => setCount((count) => count + 1)
  const handleDecrement = () =>
    count === 0 ? 0 : setCount((count) => count - 1)

  const handleItemDelete = () => {
    setAddItemToCart(false)
    setCount(0)
  }

  const handleAddItemToCart = () => setAddItemToCart(true)

  return (
    <div className="App">
      <Header
        count={count}
        onItemDelete={handleItemDelete}
        showCart={addItemToCart}
        setAddItemToCart={setAddItemToCart}
      />
      <Product
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onItemAddToCart={handleAddItemToCart}
        count={count}
      />
    </div>
  )
}

export default App
