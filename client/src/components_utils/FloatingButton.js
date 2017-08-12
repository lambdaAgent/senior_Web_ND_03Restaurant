import React from "react";

/*
	Floating rounded button
	function: button that is in fixed position;
	props:
	className: string,
	style: string,
	content: string,
	onClick: func,
	role: string
*/

const FloatingButton = (props) => {
	const content = props.content || <span className="glyphicon glyphicon-cog" style={glyphicon}></span>
	return(
		<button 
		    onClick={props.onClick}
			role={props.role}
			className={"btn btn-lg floatingButton" + props.className }
			{...props}
		> 
			{content}
		</button>
	)
};

const glyphicon ={
	fontSize: 30
}

module.exports = FloatingButton;