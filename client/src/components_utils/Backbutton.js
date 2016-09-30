import React from 'react';

/*
	name: Back button
	function: click to previous page
	props:
	onClick: func.isRequired,
	style: object

*/

const BackButton = (props) => (
	<button className="btn btn-primary" 
			role="backButton"
	        style={Object.assign({}, {marginBottom: 40 }, props.style)  }
	        onClick={ () => window.history.back() }>{"< Back"}</button>
)

export default BackButton;
