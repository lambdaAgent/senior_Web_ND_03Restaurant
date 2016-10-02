import React, { Component } from 'react';
import SimpleDB from "../../../database/simpleDB"

import {Link} from "react-router";
import Navbar from "../components_utils/Navbar";
import StarRating from "../components_utils/StarRating";
import SearchBar from "../components_utils/SearchBar";
import RestaurantList from "../components_utils/RestaurantList";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {restaurants: SimpleDB.init()._restaurants, showHamburger: false }
  }
  _filterByAlphabets(name){
    const filteredRestaurants = filterByAlphabets(name, SimpleDB.init()._restaurants)
    this.setState({restaurants: filteredRestaurants})
  }
  _cancelFilter(e){
    //cancel sort can also use this
    this.setState({restaurants: SimpleDB.init()._restaurants})
  }
 
  _filterByCategory(e){
    const restaurants = SimpleDB.init()._restaurants;
    var filteredRestaurants = restaurants.filter(r => {
      return r.category == e.target.value
    });
    if(e.target.value === "none") filteredRestaurants = restaurants;
    this.setState({restaurants: filteredRestaurants})
  }
  _sortBy(e){
    var order = "D";
    var field = e.target.value
    var restaurants = sortBy(field, order, this.state.restaurants);
    this.setState({restaurants: restaurants.length > 0 ? restaurants : this.state.restaurants })
  }
  _hamburgerClick(e){
    e.preventDefault();
    this.setState({showHamburger: !this.state.showHamburger})
  }
  render() {
    const self = this;
    const Restaurants__loop = this.state.restaurants.map(r =>  <RestaurantList key={r.id} restaurant={r}/> )
    return (
      <div className="container" style={{paddingLeft:0}}>

        <mainDesktop className="desktop">
          <Navbar />
          <label htmlFor="searchbar" >Search: </label>
          <div style={{position:"relative"}}>
            <SearchBar 
              style={{width: "100%", textIndent: 30, borderRadius: 5}}
              data={this.state.restaurants.map(r => r.name)}
              onEnterPress={this._filterByAlphabets.bind(this)}
              onChange={this._filterByAlphabets.bind(this)}
            />
            <i className="glyphicon glyphicon-search" style={{top:3, left:5, position:"absolute", fontSize:"20px"}}></i>
          </div>
          <div className="row">
            <label htmlFor="sort">sort By:</label>
            <select name="sort" id="sort" defaultValue="name" onChange={this._sortBy.bind(this)}>
              <option value="name">name</option> 
              <option value="ratings">ratings</option> 
            </select>
            <label htmlFor="category">Category: </label>
            <select name="category" id="category" defaultValue="none" onChange={this._filterByCategory.bind(this)}>
              <option value="none">None</option> 
              <option value="Restaurant">Restaurant</option> 
              <option value="Hawker">Hawker</option> 
              <option value="Chinese-Food">Chinese-Food</option> 
              <option value="Truck-Food">Truck-Food</option> 
              <option value="Fast-Food">Fast-Food</option> 

            </select>
          </div>
          <br />
          <ul className="list-group">
            {Restaurants__loop}
          </ul> 
        </mainDesktop>




        <mainMobile className="mobile">
           <Navbar showBackButton={true}
                   RBSymbol={<i className="glyphicon glyphicon-menu-hamburger" onClick={self._hamburgerClick.bind(self)}></i>}
                   RBAria={"signup"}
                    RBAction={ this.signupWithBackHistory }/>
          <dropdown>

          </dropdown>

          <div className="row" style={{marginTop:70, position:"relative"}}>
            <ul className="list-group">
              {Restaurants__loop}
            </ul>
          </div> 
        </mainMobile>

      </div>
    );
  }
}


export default App;





function filterByAlphabets(name, restaurants){
    var filteredRestaurants = restaurants.filter(r => {
        //is it two words name??
        name = name.toLowerCase();
        var full_name = r.name.toLowerCase();
        var first_name = r.name.split(" ")[0].toLowerCase();
        var second_name = r.name.split(" ")[1];
        second_name = second_name ? second_name.toLowerCase() : undefined;
        if(second_name && second_name !== ""){
          return full_name.indexOf(name)===0 || first_name.indexOf(name) === 0 || second_name.indexOf(name) === 0
        } else {
          return full_name.indexOf(name)===0 || first_name.indexOf(name) === 0;
        }
    });

    return filteredRestaurants;
}

function sortBy(field, order, restaurants){
    var accepted_fields = ["name", "ratings", "comments_amount"];
    var result = [];
    if(accepted_fields.indexOf(field) < 0){
      return undefined;
    }
    if(order === "asc" || order === "A"){
      result = restaurants.sort((prev, next) => {
          if(field === "name"){
             if(prev.name < next.name) return -1;
             if(prev.name > next.name) return 1;
             return 0;
          }
          return prev[field] - next[field]
      })
    }
    if(order === "desc" || order === "D"){
      result = restaurants.sort((prev, next) => {
         if(field === "name"){
             if(prev.name > next.name) return -1;
             if(prev.name < next.name) return 1;
             return 0;
          }
          return next[field] - prev[field]
      })
    }

    return result;
}