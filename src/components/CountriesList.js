import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountriesList extends React.Component {
  state = {
    countries: [...countries],
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-5 "
            style={{
              maxHeight: '90vh',
              overflow: 'scroll',
            }}
          >
            {this.state.countries.map((country) => {
              return (
                <div className="list-group" key={country.cca3}>
                  <Link
                    className="list-group-item"
                    to={`/countries/${country.cca3}`}
                  >
                    {country.flag} {country.name.common}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;
