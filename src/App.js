import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';
// const pets = importData.pets;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
    console.log(pets);
  }

  onSelectPet = (rightPetId) => {
    const rightPet = this.state.petList[rightPetId]
    this.setState({
      currentPet: rightPet
    })
  }


  render () {
    const { currentPet } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar />
        </section>
        {/* Pet details should be here  */}
        <section className="pet-details">
          <PetDetails
            currentPet={currentPet}
          />
        </section>
        <section className="pet-list">
          <PetList pets={this.state.petList} onSelectPet={this.onSelectPet}/>
        </section>
        <section className="new-pet-form">
          { /* Wave 3:  Where NewPetForm should appear */}
        </section>
      </main>
    );
  }
}

export default App;
