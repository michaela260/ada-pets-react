import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';


const PetCard = (props) => {

  const { id, index, name, species, about, location, onSelectPet, onRemovePet } = props;

  const onDetailsClicked = () => {
    onSelectPet(index);
  };

  const onRemoveClicked = () => {
    onRemovePet(index);
  }

  return (
    <div className="card pet-card">

      <section className="pet-card--header">

        {speciesEmoji(species)} {id} - {name}
        <button
          onClick={onDetailsClicked}
          className="btn btn-primary pet-card--select-pet-btn"
        >
          Select
        </button>
        <button
          type="button"
          onClick={onRemoveClicked}
          className="btn btn-danger pet-card--remove-btn"
          aria-label="Remove"
        >
          Remove
        </button>
      </section>
      <section className="pet-card--body">
        {about.length > 128 ? `${ about.substring(0, 128) }...` : about}
      </section>
      <section className="pet-card--footer text-muted">
        {location}
      </section>
    </div>
  );
};

PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  about: PropTypes.string,
  location: PropTypes.string,
  onSelectPet: PropTypes.func,
  onRemovePet: PropTypes.func,
}

export default PetCard;