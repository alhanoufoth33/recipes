import React, { Component } from 'react';
import './App.css';
import Form from './form';
import Recipes from './recipes';
const API_KEY = "3d5af0e61aa8ced2ac7204d650c5e73d";
class App extends Component {
  
  state = {
      recipes:[]
  }
  getRecipe =async(e)  => {
    const recipeName = e.target.elements.recipeName.value;
    //e.target.elements.recipeName.value;
    e.preventDefault();
    const API_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`);
    
    const data = await API_call.json();
    this.setState({recipes:data.recipes});
    console.log(this.state.recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes} />
           
       
      </div>
    );
  }
}

export default App;
