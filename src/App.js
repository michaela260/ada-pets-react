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
      filterPets: pets,
    };
    console.log(pets);
  }

  onSelectPet = (rightPetId) => {
    const rightPet = this.state.filterPets[rightPetId]
    this.setState({
      currentPet: rightPet
    })
  }

  onRemovePet = (petIndex) => {
    if (this.state.currentPet === this.state.filterPets[petIndex]) {
      this.setState({
        currentPet: undefined
      })
    }
    
    let filteredPets = this.state.filterPets
    let allPets = this.state.petList;
    let newPetList = allPets.filter(function(value, index, arr){

      return value !== filteredPets[petIndex];
    });
    
    // allPets.splice(petIndex, 1);
    this.setState({
      petList: newPetList,
      filterPets: newPetList,
    })
  }

  addPet = (pet) => {
    const { petList } = this.state;

    petList.push(pet);
    this.setState({
      petList: petList,
      filterPets: petList,
    });
  }

  filterPets = (searchTerm) => {
    let searchedPets = [];
    let hasSearchTerm = new RegExp(searchTerm, 'i');
    let i;
    for (i = 0; i < this.state.petList.length; i++) {
      if (hasSearchTerm.test(this.state.petList[i].name) || hasSearchTerm.test(this.state.petList[i].about) || hasSearchTerm.test(this.state.petList[i].species)) {
        searchedPets.push(this.state.petList[i])
      }
    };

    if (searchTerm === '') {
      this.setState({
        filterPets: this.state.petList
      });
    } else {
      this.setState({
        filterPets: searchedPets
      });
    }
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
          <SearchBar filterPetCallback={this.filterPets}/>
        </section>
        <section className="pet-details">
          <PetDetails
            currentPet={currentPet}
          />
        </section>
        <section className="pet-list">
          <PetList pets={this.state.filterPets} onSelectPet={this.onSelectPet} onRemovePet={this.onRemovePet}/>
        </section>
        <section className="new-pet-form">
          <NewPetForm addPetCallback={this.addPet}/>
        </section>
      </main>
    );
  }
}

export default App;
