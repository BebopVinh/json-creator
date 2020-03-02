import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import Form from "./Form"

function AddMoreButton(props) {
	const { setState } = props

	const handleClick = event => {
		event.preventDefault()
		return <Form />
	}
	return (
		<button onClick={handleClick}>
			<FontAwesomeIcon icon={faPlus} /> Add More
		</button>
	)
}

export default AddMoreButton
