import React  from "react";


class StarRating extends React.Component {
	constructor(props){
		super(props);
		this.state={redStar: 0, selected: 0}
	}
	click(value){
		this.setState({selected: value, redStar: value});
	}
	hover(value){
		if(this.state.selected > 0){
			//disable hover
			return undefined;
		}
		this.setState({redStar: value})
	}
	blur(){
		if(this.state.selected <= 0)
			this.setState({redStar:0})
	}
	render(){
		const stars = [1,2,3,4,5].map(n => {
			return <OneStar key={n} value={n} 
			                className={n <= this.state.redStar ? "red" : ""}
			                mouseLeave={this.blur.bind(this)}
			                hover={this.hover.bind(this)}
			                click={this.click.bind(this)}
			       />
		})
		return(
			<div className="star-rating">
			  <div className="star-rating__wrap" role="select Rating">
			    {stars}
		    	<input id="rating_value" 
		    	       value={this.state.selected} 
		    	       style={{visibility: "hidden"}}
		    	       aria-label="ratings"/>
		    	</div>
			</div>
		)
	}
}

const OneStar = (props) => {
	return(
  		<span className={"starRating_sys glyphicon glyphicon-star " + props.className }
		      htmlFor="star-rating-5" 
		      onMouseLeave={props.mouseLeave}
		      onClick={() => props.click(props.value)}
		      onMouseOver={() => props.hover(props.value)}
		      aria-label={props.value + " out of 5 stars"}></span>
	)
}



module.exports = StarRating;