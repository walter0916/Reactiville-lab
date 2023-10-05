import '../../styles/burger.css'

import { ingredients } from '../../data/burger-data'
import  IngredientList  from './IngredientList'
import  BurgerStack  from './BurgerStack'
import { useState, useEffect } from'react'

const BurgerShop = () => {
  const [stack, setStack] = useState([])

  const addIngredientHandler = (item) => {
    setStack([...stack, item])
  }

  const removeIngredientHandler = (idx) => {
    setStack(stack.filter((el, i) => i !== idx))
  }

  const clearOrderHandler = () => {
    setStack([])
  }
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={clearOrderHandler}>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} stack={stack}  addIngredientHandler={addIngredientHandler}/>
        <BurgerStack stack={stack} removeIngredientHandler={removeIngredientHandler}/>
      </section>
    </div>
  )
}

export default BurgerShop