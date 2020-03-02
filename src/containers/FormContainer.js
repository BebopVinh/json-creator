import React, { useState } from "react"
import AddMoreButton from "../components/AddMoreButton"

function FormContainer() {
	const [state, setState] = useState("")
	let element = React.createRef()
	debugger
	return (
		<div className="form-container">
			<AddMoreButton setState={setState} />
		</div>
	)
}

export default FormContainer
