var Login = {
	_navbar: undefined,
	_fromAddReviewMobileToSignUp__ShowBackButton:false,
	init(window){
		return this.isAuthenticated();
	},
	getFromDatabase(){
		var user = window.localStorage["login"];
		return user ? JSON.parse(user) : undefined;
	},
	isAuthenticated(){
		return (this.getFromDatabase()) ? true : false;
	},
	get(){
		return this.getFromDatabase();
	},
	set(user){
		window.localStorage.setItem("login", JSON.stringify(user))
	},	
	clear(){
		window.localStorage.removeItem("login")
	},
	fromAddReviewMobileToSignUp__ShowBackButton(){
		this._fromAddReviewMobileToSignUp__ShowBackButton = true
	},
	clearFromAddReviewToSignup(){
		this._fromAddReviewMobileToSignUp__ShowBackButton = false;
	},
	showBackButton(){
		return this._fromAddReviewMobileToSignUp__ShowBackButton
	}
};


module.exports = Login;