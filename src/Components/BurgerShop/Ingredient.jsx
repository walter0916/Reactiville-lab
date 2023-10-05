
const Ingredient = (props) => {
	return (
		<li style={{background: props.ingredient.color}}>
			{props.ingredient.name}
			{props.addIngredientHandler ? 
			<button onClick={()=> props.addIngredientHandler(props.ingredient)}>+</button> :
			<button onClick={() => props.removeIngredientHandler(props.idx)}>X</button>
			}
		</li>
	)
}

export default Ingredient