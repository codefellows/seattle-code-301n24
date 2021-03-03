import React from 'react';
import axios from 'axios';
import Pokemon from './/pokemon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      pokemon: []
    }
  }

  getPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const pokemon = await axios.get(url);
    this.setState({ pokemon: pokemon.data.results });
  }

  render() {
    return(
      <>
        <button onClick={this.getPokemon}>Get Some Pokemon</button>

        {this.state.pokemon.length && this.state.pokemon.map((creature, idx) => (
          <div key={idx}>
            <Pokemon name={creature.name} />
          </div>
        ))}
      </>
    )
  }
}

export default App;
