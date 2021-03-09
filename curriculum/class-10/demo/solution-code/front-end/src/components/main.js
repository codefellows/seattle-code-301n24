import React from 'react';
import IngredientForm from './ingredientForm';
import Recipe from './recipe';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipes: []
    }
  }

  upadteRecips = (recipes) => this.setState({ recipes });

  render() {
    return (
      <>
        <IngredientForm upadteRecips={this.upadteRecips} />
        {this.state.recipes.length && this.state.recipes.map((recipe, idx) => (
          <div key={idx}>
            <Recipe recipe={recipe} />
          </div>
        ))}
      </>
    )
  }
}

export default Main;
