import React  from 'react'

const Form = props => (

<form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }} >
<input   className="form_input" type="text" placeholder="yummy recipes..." name="recipeName"/>
<button className="form_button" >Search  </button>
</form>

);

export default Form;
