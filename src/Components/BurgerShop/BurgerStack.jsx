import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.map((ingredient, idx) => <Ingredient key={idx} ingredient={ingredient} idx={idx} removeIngredientHandler={props.removeIngredientHandler}/>)}
    </ul>
  )
}

export default BurgerStack