import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends React.Component {
  state = {
    name: '',
    capital: '',
    area: '',
  };

  searchCountry = () => {
    if (!this.state.name) {
      const foundCountry = countries.find((country) => {
        return country.cca3 === this.props.match.params.cca3;
      });

      if (foundCountry) {
        this.setState({ ...foundCountry });
      }
    }
  };
  render() {
    this.searchCountry();
    return (
      <div>
        <h2>{this.state.name} </h2>

        <h2>Capital: {this.state.capital} </h2>

        <h2>Area: {this.state.area} </h2>
      </div>
    );
  }
}

export default CountryDetails;
