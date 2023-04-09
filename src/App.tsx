import React, { useState } from 'react'
import Header from './components/header/header'

import './App.scss'
import Product from './components/product'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount((count) => count + 1)
  const handleDecrement = () =>
    count === 0 ? 0 : setCount((count) => count - 1)
  const handleItemDelete = () => setCount(0)

  const handleShowCart = () => {
    const el = document.querySelector<HTMLElement>('.cartContainer')!
    el.style.display = 'block'
  }

  return (
    <div className="App">
      <Header
        count={count}
        onItemDelete={handleItemDelete}
        onAvatarClicked={handleShowCart}
      />
      <Product
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onItemAddToCart={handleShowCart}
        count={count}
      />
    </div>
  )
}

export default App
