import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      location: '',
      about: '',
      species: '',
      images: [],
    };
  }

  onSubmitPet = (event) => {
    event.preventDefault();

    const pet = {
      name: this.state.name,
      location: this.state.location,
      about: this.state.about,
      species: this.state.species,
      images: this.state.images,
    }

    if (pet.name === '' || pet.species === '' || pet.images.length === 0) {
      
    } else {
      this.props.addPetCallback(pet);

      this.setState({
        name: '',
        location: '',
        about: '',
        species: '',
        images: [],
      });
    }   
  }

  onNameChange = (event) => {
    const name = event.target.value;
    this.setState({
      name: name,
    });
  }

  onLocationChange = (event) => {
    const location = event.target.value;
    this.setState({
      location,
    });
  }

  onAboutChange = (event) => {
    const about = event.target.value;
    this.setState({
      about,
    });
  }

  onSpeciesChange = (event) => {
    const species = event.target.value;
    this.setState({
      species,
    });
  }

  onImagesChange = (event) => {
    const images = [event.target.value];
    this.setState({
      images,
    });
  }
  

  render() {
    return (
      <form
        className="new-pet-form"
        id="new-pet-form"
        onSubmit={this.onSubmitPet}
      >
        <h3>Add a Pet</h3>
        <div>
          <label className="new-pet-form--label" htmlFor="Name">Name</label>
          <input name="name"
          placeholder="name"
          id="name"
          type="text"
          onChange={this.onNameChange}
          value={this.state.name}
          />
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="Location">Location</label>
          <input name="location"
          placeholder="location"
          id="location"
          type="text"
          onChange={this.onLocationChange}
          value={this.state.location}
          />
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="About">About</label>
          <input name="about"
          placeholder="about"
          id="about"
          type="text"
          onChange={this.onAboutChange}
          value={this.state.about}
          />
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="Species">Species</label>
          <input name="species"
          placeholder="species"
          id="species"
          type="text"
          onChange={this.onSpeciesChange}
          value={this.state.species}
          />
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="Images">Image</label>
          <input name="images"
          placeholder="image link"
          id="images"
          type="text"
          onChange={this.onImagesChange}
          value={this.state.images}
          />
        </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;