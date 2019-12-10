import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  onSearchChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({
      searchTerm,
    });

    this.props.filterPetCallback(this.state.searchTerm);
  }

  onSubmitSearch = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <section onSubmit={this.onSubmitSearch}>
        {/* <section> */}
          {/* <label htmlFor="Search"></label> */}
            <input name="search"
            className="search-bar"
            placeholder="Filter Pets"
            type="text"
            onChange={this.onSearchChange}
            value={this.state.searchTerm}
            />
        {/* </section> */}
      </section> 
    );
  }
};

SearchBar.propTypes = {
  filterPetCallback: PropTypes.func.isRequired,
};

export default SearchBar;
