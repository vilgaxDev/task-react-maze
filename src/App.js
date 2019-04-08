import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/menu';
import Game from './components/game';
import './App.css';

class App extends Component {
  state = {
    columns: 10,
    rows: 10,
    gameStart: false,
    player: 1,
    reds: [],
    steps: 0
  }

  // Binding functions to this
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  createReds = this.createReds.bind(this);
  movePlayer = this.movePlayer.bind(this);

  // Start game, send columns and rows to css and set player position
  handleSubmit(e){
    e.preventDefault();
    const {columns, rows } = this.state;
    let playerPosition = Math.ceil(((columns * rows) / 2) % 2 === 0 ? ((columns * rows) / 2) - columns/2 : Math.ceil((columns * rows) / 2 ));
    document.documentElement.style.setProperty("--columns", columns);
    document.documentElement.style.setProperty("--rows", rows);
    this.setState({ gameStart: true, player: playerPosition }, () =>{
      this.createReds();
    });
  }

  //Set columns and rows
  handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  // Move player
  movePlayer(e){
    if(this.state.reds.includes(this.state.player)){
        this.removeReds(this.state.player);
      }
    switch (e.keyCode) {
        case 39:
          return this.setState((this.state.player + 1) <= this.state.columns * this.state.rows && this.state.player % this.state.columns !== 0 ? { player: this.state.player + 1, steps: this.state.steps + 1 } : { player: this.state.player} );
        case 37:
          return this.setState((this.state.player - 1) > 0 && this.state.player % this.state.columns !== 1 ? { player: this.state.player - 1, steps: this.state.steps + 1 } : { player: this.state.player });
        case 38:
          return this.setState((this.state.player - this.state.columns) > 0 ? { player: this.state.player - this.state.columns, steps: this.state.steps + 1 } : { player: this.state.player });
        case 40:
          return this.setState((this.state.player + Number(this.state.columns)) <= this.state.columns * this.state.rows ? { player: this.state.player + Number(this.state.columns), steps: this.state.steps + 1 } : { player: this.state.player });
      }
  }

  // Create red squares array
  createReds(){
    const {columns, rows, player } = this.state;
    let array = [];
    let index = 0;
    for(let i = 0; i < columns; i++){
      for(let j = 0; j < rows; j++){
        index++
        if(Math.ceil(Math.random()*10) === 5) {
          if(index !== player) array.push(index);
        }
      }
    }

    this.setState({ reds: array })
  }

  // Deletes red squares
  removeReds(red){
    let array = [...this.state.reds];
    let index = array.indexOf(red);
    array.splice(index,1);
    this.setState({ reds: array }, () => {
      if(this.state.reds.length === 0 ) {
        alert(`Game finished: You took ${this.state.steps - 1 } steps`)
        this.setState({ gameStart: false,  steps: 0 })
      }
    })
  }

  render() {
    return (
      <Router>      
        <div className="App">
          <Route
          exact path="/"
          render={() => (
            !this.state.gameStart ? (
              <Menu
              columns={this.state.columns}
              rows={this.state.rows}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange} />
              ) : (
              <Game
              movePlayer={this.movePlayer}
              columns={this.state.columns}
              rows={this.state.rows}
              player={this.state.player}
              steps={this.state.steps}
              reds={this.state.reds} />
              )
            )             
          }
          />
        </div>
      </Router>
    );
  }
}

export default App;
