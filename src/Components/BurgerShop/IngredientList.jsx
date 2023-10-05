import { useEffect, useState } from "react"
import Ingredient from "./Ingredient"


const IngredientList = (props) => {

	const [hasBuns, setHasBuns] = useState(false)

	useEffect(() => {
    setHasBuns(props.stack.filter(ingredient => ingredient.type === "bun").length === 2)
  }, [props.stack])
	
	return (
		<ul>
			{props.ingredients.map((ingredient, idx) => <Ingredient ingredient={ingredient} addIngredientHandler={props.addIngredientHandler} disabled={hasBuns && ingredient.type === 'bun'}/>  )}
		</ul>
	)
}

export default IngredientList