import React, {Component} from 'react';
import Menu from './MenuComponents';
import Dishdetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      dishes : DISHES,
      selectedDish: null
    };
  }

  onDishSelected(dishID){
    this.setState({selectedDish: dishID})
}
  render(){
    return (
    <div className="App">
       <Header/>
      <Menu dishes={this.state.dishes}
        onClick={(dishID)=>this.onDishSelected(dishID)} />
      <Dishdetail 
        dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      <Footer/>
    </div>
  );
  }
}

export default Main;
