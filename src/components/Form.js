import React from "react"
import AddMoreButton from "./AddMoreButton"

function Form() {
	const handleSubmit = () => {
		return
	}
	return (
		<form>
			<input type="text" name="key" />
			<input type="text" name="value" />
			<button onSubmit={handleSubmit}>Submit</button>
		</form>
	)
}

export default Form
