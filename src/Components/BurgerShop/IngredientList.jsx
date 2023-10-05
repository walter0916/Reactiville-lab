import Ingredient from "./Ingredient"


const IngredientList = (props) => {
	return (
		<ul>
			{props.ingredients.map((ingredient, idx) => <Ingredient ingredient={ingredient} addIngredientHandler={props.addIngredientHandler} idx={idx}/>)}
		</ul>
	)
}

export default IngredientList