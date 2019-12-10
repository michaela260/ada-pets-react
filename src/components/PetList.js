import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {

  const allPets = props.pets.map((pet, i) => {
    return (
      <PetCard key={i}
      index={i}
      id={pet.id}
      name={pet.name}
      species={pet.species}
      about={pet.about}
      location={pet.location}
      onSelectPet={props.onSelectPet}
      onRemovePet={props.onRemovePet}
      />
    )
  });

  return (
    <div className="app-card-list">
      { allPets }
    </div>
  );

}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
  onRemovePet: PropTypes.func,
};

export default PetList;
