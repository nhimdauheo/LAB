import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import Dishdetail from "./DishdetailComponent";
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelected(dishID) {
    this.setState({ selectedDish: dishID })
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="warning">
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
          onClick={(dishID) => this.onDishSelected(dishID)} />
        <Dishdetail
          dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
