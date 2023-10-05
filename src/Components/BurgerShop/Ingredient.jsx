
const Ingredient = (props) => {
	return (
		<li style={props.disabled ? { background: 'darkgray'} : {background: props.ingredient.color}}>
			{props.ingredient.name}
			{props.addIngredientHandler ? 
			<button disabled={props.disabled} onClick={()=> props.addIngredientHandler(props.ingredient)}>+</button> :
			<button onClick={() => props.removeIngredientHandler(props.idx)}>X</button>
			}
		</li>
	)
}

export default Ingredient